import { Controller, Get, Param, Delete, UseFilters, HttpException, HttpStatus, Query, Patch, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

import { ExceptionService } from './exception.service';
import { HttpExceptionFilter } from '../../common/filters/http.exception';
import { ParseIntPipe } from '../../common/pipes/parse-int.pipe'; // 类型转化通道

@ApiBearerAuth()
@ApiTags('exception')
@UseFilters(HttpExceptionFilter) // 单独模块添加拦截的方式
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

  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ description: '请输入message' })
  // 有时我们希望参数类型是int，则可以通过通道进行转化
  update(@Param('id', new ParseIntPipe()) id, @Body() { message }): string {
    console.log(typeof id);

    return this.exceptionService.update(id, message);
  }
}
