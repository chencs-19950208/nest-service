// 参数转int 的通道
import { PipeTransform, ArgumentMetadata, Injectable, BadRequestException} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    console.log(metadata, 'metadata-----');
    const val = parseInt(value, 10);

    if (isNaN(val)) {
      throw new BadRequestException('Validation failed!');
    };

    return val;
  }
}