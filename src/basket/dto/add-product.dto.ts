import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class AddProductDto {
  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'basket id / number',
  })
  readonly basketId: number;
  @IsInt()
  @ApiProperty({
    example: 5,
    description: 'productId / number',
  })
  readonly productId: number;
  @IsInt()
  @ApiProperty({
    example: 5,
    description: 'quantity of products added to basket / number',
  })
  readonly quantity: number;
}
