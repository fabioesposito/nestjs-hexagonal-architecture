import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.NESTJS_PORT);
}
bootstrap();
