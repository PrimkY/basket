import { ApiProperty } from '@nestjs/swagger';

export class AddProductDto {
  @ApiProperty({
    example: 1,
    description: 'basket id / number',
  })
  readonly basketId: number;
  @ApiProperty({
    example: 5,
    description: 'productId / number',
  })
  readonly productId: number;
  @ApiProperty({
    example: 5,
    description: 'quantity of products added to basket / number',
  })
  readonly quantity: number;
}
