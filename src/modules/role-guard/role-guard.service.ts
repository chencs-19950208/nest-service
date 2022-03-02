import { Injectable } from '@nestjs/common';
@Injectable()
export class RoleGuardService {
  findAll() {
    return `This action returns all roleGuard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roleGuard`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleGuard`;
  }
}
