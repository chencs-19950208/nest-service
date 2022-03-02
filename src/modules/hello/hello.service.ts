import { Injectable } from '@nestjs/common';
import { CreateHelloDto } from './dto/create-hello.dto';

@Injectable()
export class HelloService {
  create(createHelloDto: CreateHelloDto) {
    return 'This action adds a new hello';
  }

  findAll() {
    return `This action returns all hello`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hello`;
  }

  update(id: number, message: string) {
    return `This action updates a #${id} hello ${message}`;
  }

  remove(id: number) {
    return `This action removes a #${id} hello`;
  }
}
