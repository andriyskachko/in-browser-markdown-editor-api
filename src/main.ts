import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
    cors: { origin: 'http://localhost:5173' },
  });

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port);
}

bootstrap();
