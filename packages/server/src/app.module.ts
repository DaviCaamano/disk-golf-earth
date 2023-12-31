import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import nestConfigs from '../nest.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [nestConfigs],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
