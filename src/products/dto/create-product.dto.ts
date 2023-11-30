import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    example: 'paper',
    description: 'required name / not uniq / string',
  })
  @IsNotEmpty()
  readonly name: string;
  @IsInt()
  @ApiProperty({
    example: 105.52,
    description: 'uniq and require price / string',
  })
  readonly price: number;
  @IsString()
  @ApiProperty({
    example: 'block of 500 paper shits',
    description: 'not uniq / string',
  })
  @IsNotEmpty()
  readonly description: string;
}
