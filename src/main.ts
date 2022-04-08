import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Application example')
  .setDescription('The LIVEN API description')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.HTTP_PORT || 5000 || 3000);
}
bootstrap();
