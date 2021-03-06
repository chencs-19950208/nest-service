import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';

import { HelloModule } from './modules/hello/hello.module';
import { ExceptionModule } from './modules/exception/exception.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { RoleGuardModule } from './modules/role-guard/role-guard.module';

@Module({
  imports: [HelloModule, ExceptionModule, RoleGuardModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  // 中间件处理
  configure(consumer: MiddlewareConsumer) {
    // 为 hello 路由添加中间件
    // 生产 - 消费
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'hello', method: RequestMethod.POST }) // 排除 hello 的 post请求
      .forRoutes('hello') // 监听的根路径
  };
};
