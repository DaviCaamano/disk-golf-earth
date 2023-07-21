import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const DEFAULT_SERVER_PORT = 3001;
const port = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT, 10): DEFAULT_SERVER_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log('#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#')
  console.log(`

port`, port)

  await app.listen(port);
}

bootstrap();
