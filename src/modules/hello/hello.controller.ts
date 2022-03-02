import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiQuery, ApiParam, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { HelloService } from './hello.service';
import { CreateHelloDto } from './dto/create-hello.dto';
import { Hello, UserRole } from './classes/hello';

@ApiBearerAuth()
@Controller('/hello')
@ApiTags('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // 创建
  @Post()
  @ApiBody({ description: '填写需要创建得内容' })
  create(@Body() createHelloDto: CreateHelloDto) {
    return this.helloService.create(createHelloDto);
  }

  // 查询详情
  @Get(':id')
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'role', enum: UserRole})
  @ApiResponse({
    status: 200,
    description: 'ok',
    type: Hello
  })
  findOne(@Param('id') id: string) {
    return this.helloService.findOne(+id);
  }

  // 更新
  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ description: '请输入 update Hello' })
  update(@Param('id') id: string, @Body() { message }): string {
    return this.helloService.update(+id, message);
  }

  // 删除
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.helloService.remove(+id);
  }
}
