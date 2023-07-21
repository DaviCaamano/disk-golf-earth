import {INestApplication, OnModuleInit} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";


export abstract class DatabaseService
    extends PrismaClient
    implements OnModuleInit
{
    protected constructor() {
        super({datasources: { db: { url: process.env.DB_URL}}});
    }

    onModuleInit() {
        this.$connect;
    }

    enableShutdownHooks(app: INestApplication) {
        this.$on("beforeExit", () => {
            app.close;
        });
    }
}
