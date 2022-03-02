import { Module } from '@nestjs/common';
import { RoleGuardService } from './role-guard.service';
import { RoleGuardController } from './role-guard.controller';

@Module({
  controllers: [RoleGuardController],
  providers: [RoleGuardService]
})
export class RoleGuardModule {}
