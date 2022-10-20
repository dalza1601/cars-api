import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remueve los elementos del request que no son necesarios para tu modelo
      forbidNonWhitelisted: true, // informa que los datos innecesarios que se envian en el response no son admitidos con status 400
    }),
  );

  await app.listen(3000);
}
bootstrap();
