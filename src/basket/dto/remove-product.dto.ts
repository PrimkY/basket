import { ApiProperty } from '@nestjs/swagger';

export class RemoveProductDto {
  @ApiProperty({
    example: 13,
    description: 'basket id / number',
  })
  readonly basketId: number;
  @ApiProperty({
    example: 105,
    description: 'productId / number',
  })
  readonly productId: number;
}
