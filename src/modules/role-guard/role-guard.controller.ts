import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RoleGuardService } from './role-guard.service';
import { RoleGuard } from 'src/common/guards/role.guard';
import { Roles } from 'src/common/decorators/role.decorator';

@ApiBearerAuth()
@ApiTags('role-guard')
@UseGuards(RoleGuard)
@Controller('/role-guard')
export class RoleGuardController {
  constructor(private readonly roleGuardService: RoleGuardService) {}

  @Get()
  @Roles('admin')
  findOne(@Query('id') id: string) {
    return this.roleGuardService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleGuardService.remove(+id);
  }
}
