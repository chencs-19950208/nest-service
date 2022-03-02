import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 生成Swagger 文档相关配置
  const swaggerOptions = new DocumentBuilder()
    .setTitle('node-service-api-document')
    .setDescription('node service project api document')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
