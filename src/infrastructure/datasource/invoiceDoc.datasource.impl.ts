import InvoiceDocDatasource from "../../domain/datasource/invoiceDoc.datasource"
import type InvoiceDto from "../../domain/dtos/invoice/invoice.dto"
import DocumentEntity from "../../domain/entities/document.entity"
import path from "path"; 
import fs from "fs"
import { Fs } from "../fs"
import { v4 } from "uuid"
import { XMLBuilder } from "fast-xml-parser"
import htmlpdfnode from 'html-pdf-node'
import handlebars from 'handlebars'

export default class InvoiceDocDatasourceImpl extends InvoiceDocDatasource {
    async createInvoiceDocs(invoiceDto: InvoiceDto): Promise<DocumentEntity[]> {
        await this.removeAllDocs(invoiceDto.uuid);
        let documentEntity: DocumentEntity [] = [] ;
        documentEntity.push(await this.createInvoceXml(invoiceDto));
        documentEntity.push(await this.createInvoicePdf(invoiceDto));
        return documentEntity;
    }
    async removeAllDocs(uuid: string): Promise<void> {
        let dir = await new Fs().completeWork(uuid)
        const files = fs.readdirSync(dir);

        for (let i = 0; i < files.length; i++) {
            const element = files[i];
            const filePath = `${dir}/${element}`
            fs.unlinkSync(filePath);
        }        
    }
    async createInvoceXml(invoiceDto: InvoiceDto): Promise<DocumentEntity> {
        let dir = await new Fs().completeWork(invoiceDto.uuid)
        let docname = v4();
        const builder = new XMLBuilder({
            arrayNodeName: "invoice"
        })

        // Genera el contenido XML
        const xmlContent = `<?xml version="1.0"?>
        <catalog>
          ${builder.build(invoiceDto)}
        </catalog>`;

        fs.writeFile(`${dir}/${docname}.xml`, xmlContent, (err) => {
            if (err) throw err;
        });
        return new DocumentEntity("xml", `http://localhost:3000/api/docs/xml/${invoiceDto.uuid}/${docname}.xml`)
    }
    async createInvoicePdf(invoiceDto: InvoiceDto): Promise<DocumentEntity> {
        try {
            let dir = await new Fs().completeWork(invoiceDto.uuid)
            let docname = v4();

            const templatePath = path.join(__dirname, "../utils/templates/invoice.html");

            const invoiceDoc = fs.readFileSync(templatePath, 'utf8');
            
            // Compilar la plantilla con Handlebars
            const template = handlebars.compile(invoiceDoc);
            console.log(invoiceDto.detailsDto);
            
            const html = template(invoiceDto);
               
            // Opciones para la generación del PDF
            const options:htmlpdfnode.Options = { 
                format: 'A4',
                path: `${dir}/${docname}.pdf`
            };
        
            // Crear un archivo PDF a partir del HTML
            const file = { content: html };
        
            htmlpdfnode.generatePdf(file, options)
            
            return new DocumentEntity("pdf", `http://localhost:3031/api/docs/pdf/${invoiceDto.uuid}/${docname}.pdf`);
        } catch (error) {
            console.log(error);
            throw new Error("Error generating PDF");
        }
    }
}