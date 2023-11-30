import { ApiProperty } from '@nestjs/swagger';

export class RemoveProductDto {
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
}
