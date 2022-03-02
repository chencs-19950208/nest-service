import { Injectable } from '@nestjs/common';

@Injectable()
export class ExceptionService {

  findAll() {
    return `This action returns all exception`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exception`;
  }

  remove(id: number) {
    return `This action removes a #${id} exception`;
  }
}
