import {dotEnvConfig} from "../../../constants/env";
dotEnvConfig();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import nestConfigs from "../nest.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(nestConfigs().port);
}
bootstrap();
