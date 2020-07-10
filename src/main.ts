
import { NestFactory, NestApplication } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import * as fs from 'fs'
import * as helmet from 'helmet';
import * as cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(
    AppModule, {
    logger : true,    
    httpsOptions: {
      key: fs.readFileSync('/home/AzureUser/ssl/hostname.pem'),
      cert: fs.readFileSync('/home/AzureUser/ssl/hostname.pem')
    }
  });  
  app.enableCors({origin : "*"})
  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }))
  await app.listen(3001);
}
bootstrap();
