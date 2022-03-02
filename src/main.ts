import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { HttpExceptionFilter } from './common/filters/http.exception';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局添加异常拦截 过滤器
  // app.useGlobalFilters(new HttpExceptionFilter());

  // 全局添加参数类型转换管道
  // app.useGlobalPipes(new ValiditionPipe())

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
