import { Hono, type Context } from "hono";
import InvoiceDto from "../../domain/dtos/invoice/invoice.dto";
import InvoiceDocDatasourceImpl from "../../infrastructure/datasource/invoiceDoc.datasource.impl";
import InvoiceDocRepositoryImpl from "../../infrastructure/repositories/invoiceDoc.repository.impl";
import fs from "fs";
import { Readable } from "stream";

export class AppRoutes {
    public get routes(): Hono {
        const router = new Hono()

        const datasource = new InvoiceDocDatasourceImpl()
        const repository = new InvoiceDocRepositoryImpl(datasource)

        router.post("/doc", async (c: Context) => {
            const body = await c.req.json()            
            const [error, invoiceDto] = InvoiceDto.save(body)
            if (error) return c.json({ error })
            return c.json(await repository.createInvoiceDocs(invoiceDto!))
        })


        router.get("/docs/pdf/:uuid/:uuidv4", async (c: Context) => {
            // Capturar los parámetros de la ruta
            const { uuid, uuidv4 } = c.req.param();

            // Opcional: Validar los parámetros o realizar alguna lógica específica
            if (!uuid || !uuidv4) {
                return c.text('Missing parameters', 400);
            }

            // Ruta del archivo PDF basándote en los parámetros
            const filePath = `${process.cwd()}/src/presentation/docs/${uuid}/${uuidv4}`

            // Verificar si el archivo existe
            if (!fs.existsSync(filePath)) {
                return c.text('File not found', 404);
            }

            // Leer el archivo PDF y convertir ReadStream en ReadableStream
            const fileStream = fs.createReadStream(filePath);
            const readableStream = new ReadableStream({
                start(controller) {
                    fileStream.on('data', (chunk) => controller.enqueue(chunk));
                    fileStream.on('end', () => controller.close());
                    fileStream.on('error', (err) => controller.error(err));
                }
            });

            // Configurar el encabezado de la respuesta para indicar que se está devolviendo un PDF
            c.header('Content-Type', 'application/pdf');
            c.header('Content-Disposition', 'inline; filename="${uuid}-${uuidv4}.pdf"');


            // Enviar el archivo PDF como respuesta
            return c.body(readableStream);
        })

        router.get("/docs/xml/:uuid/:uuidv4", async (c: Context) => {
            // Capturar los parámetros de la ruta
            const { uuid, uuidv4 } = c.req.param();

            // Opcional: Validar los parámetros o realizar alguna lógica específica
            if (!uuid || !uuidv4) {
                return c.text('Missing parameters', 400);
            }

            // Ruta del archivo XML basándote en los parámetros
            const filePath = `${process.cwd()}/src/presentation/docs/${uuid}/${uuidv4}`

            // Verificar si el archivo existe
            if (!fs.existsSync(filePath)) {
                return c.text('File not found', 404);
            }

            // Leer el archivo XML y convertir ReadStream en ReadableStream
            const fileStream = fs.createReadStream(filePath);
            const readableStream = new ReadableStream({
                start(controller) {
                    fileStream.on('data', (chunk) => controller.enqueue(chunk));
                    fileStream.on('end', () => controller.close());
                    fileStream.on('error', (err) => controller.error(err));
                }
            });

            // Configurar el encabezado de la respuesta para indicar que se está devolviendo un XML
            c.header('Content-Type', 'application/xml');
            c.header('Content-Disposition', 'inline; filename="${uuid}-${uuidv4}.xml"');

            // Enviar el archivo XML como respuesta
            return c.body(readableStream);
        })
        return router
    }
}