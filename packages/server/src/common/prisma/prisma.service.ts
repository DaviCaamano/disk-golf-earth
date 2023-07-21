import { INestApplication, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export abstract class DatabaseService
  extends PrismaClient
  implements OnModuleInit
{
  protected constructor() {
    super({ datasources: { db: { url: process.env.DATABASE_HOST } } });
  }

  onModuleInit() {
    this.$connect;
  }

  enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', () => {
      app.close;
    });
  }
}
