import { IsInt, IsString } from 'class-validator';

export class CreateHelloDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly bread: string;
}
