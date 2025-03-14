import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 4000;
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  await app.listen(port);

  Logger.log(`App running on port: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();
