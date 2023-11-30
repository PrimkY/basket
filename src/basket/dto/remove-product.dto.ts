import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class RemoveResponseDto {
  @ApiProperty({
    example: 'Successfully deleted',
    description: 'status of deleting / number',
  })
  readonly deleteStatus: string;
}

export class RemoveProductDto {
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
}
