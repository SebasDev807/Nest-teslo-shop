import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Remueve todo lo que no esta incluido en los DTOs
      forbidNonWhitelisted: true // Retorna 400 si hay propiedades no requeridas
    })
  );

  await app.listen(3000);
}
bootstrap();
