
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
    // logger : true,    
    httpsOptions: {
      key: fs.readFileSync('/home/AzureUser/ssl/server.key.pem'),
      cert: fs.readFileSync('/home/AzureUser/ssl/ngao_tech.pem')
    }
  });
  // app.enableCors({ origin: '123', credentials: false, methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', })
  app.use(helmet());
  
  const options = {
    "origin": ["https://23.97.77.60","https://ngao.tech","http://localhost:3000"],  // attempted "origin":["http://localhost"]
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200,
    "credentials":false,
    "allowedHeaders": "Content-Type, Accept,Authorization",

  }
  app.use(cors(options))
  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }))
  await app.listen(3001);
}
bootstrap();
