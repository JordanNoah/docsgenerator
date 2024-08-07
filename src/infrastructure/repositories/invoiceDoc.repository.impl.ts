import type InvoiceDocDatasource from "../../domain/datasource/invoiceDoc.datasource";
import type InvoiceDto from "../../domain/dtos/invoice/invoice.dto";
import type DocumentEntity from "../../domain/entities/document.entity";
import InvoiceDocRepository from "../../domain/repositories/invoiceDoc.repository";

export default class InvoiceDocRepositoryImpl implements InvoiceDocRepository {
    constructor(private readonly invoiceDocDatasource: InvoiceDocDatasource) {}

    createInvoiceDocs(InvoiceDto: InvoiceDto): Promise<DocumentEntity[]> {
        return this.invoiceDocDatasource.createInvoiceDocs(InvoiceDto);
    }
    createInvoceXml(InvoiceDto: InvoiceDto): Promise<DocumentEntity> {
        return this.invoiceDocDatasource.createInvoceXml(InvoiceDto);
    }
    createInvoicePdf(InvoiceDto: InvoiceDto): Promise<DocumentEntity> {
        return this.invoiceDocDatasource.createInvoicePdf(InvoiceDto);
    }
}