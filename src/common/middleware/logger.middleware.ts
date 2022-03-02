/**
 * logger 中间件 用于监听每个请求日志
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { method, path } = req;
    console.log(`${method}-----${path}`);
    next();
  };
};