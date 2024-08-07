import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { AppRoutes } from "./routes/routes";
import { Fs } from "../infrastructure/fs";
import configuration from "../domain/configuration";

export class Server {
    public readonly app: Hono
    public readonly port: number

    constructor() {
        this.app = new Hono()
        this.port = configuration.PORT
    }

    public async start() {
        try {
            await new Fs().completeWork()
            this.app.route('/api', new AppRoutes().routes)
            const server = serve({
                fetch: this.app.fetch,
                port: this.port
            },(info) => {
                console.log(`Server running on port ${info.port}`);
            })
        } catch (error) {
            console.error(`Error starting server: ${error}`)
        }
    }
}