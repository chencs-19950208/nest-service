import { Controller, Get, Param, Delete, UseFilters, HttpException, HttpStatus, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ExceptionService } from './exception.service';
import { HttpExceptionFilter } from '../../common/filters/http.exception';

@ApiBearerAuth()
@ApiTags('exception')
// @UseFilters(HttpExceptionFilter) // 单独模块添加拦截的方式
@Controller('/exception')
export class ExceptionController {
  constructor(private readonly exceptionService: ExceptionService) {}

  @Get()
  findOne(@Query('id') id: string) {
    console.log(id, 'id---')
    if (!id) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        message: '请求参数 id 必传',
        error: 'id is required'
      }, HttpStatus.BAD_REQUEST);
    };

    return this.exceptionService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exceptionService.remove(+id);
  }
}
