// 异常拦截处理
import { Catch, ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // 拿到http所有信息
    const request = ctx.getRequest(); // 拿到请求信息
    const response = ctx.getResponse(); // 拿到响应的信息
    const status = exception.getStatus(); // 拿到状态码
    console.log(exception);

    const exceptionRes: any = exception.getResponse(); // 拿到响应的异常信息
    const { message, error } = exceptionRes;

    response.status(status).json({
      status,
      timestamp: new Date().toISOString,
      message,
      error,
      path: request.url,
    });
  }
}