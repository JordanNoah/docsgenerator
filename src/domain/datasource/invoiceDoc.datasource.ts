import type InvoiceDto from "../dtos/invoice/invoice.dto";
import type DocumentEntity from "../entities/document.entity";

export default abstract class InvoiceDocDatasource {
    abstract createInvoiceDocs(InvoiceDto: InvoiceDto): Promise<DocumentEntity[]>;
    abstract createInvoceXml(InvoiceDto: InvoiceDto): Promise<DocumentEntity>;
    abstract createInvoicePdf(InvoiceDto: InvoiceDto): Promise<DocumentEntity>;
    abstract removeAllDocs(uuid: string): Promise<void>;
}