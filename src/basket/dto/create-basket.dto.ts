import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateBasketDto {
  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'user id / not uniq / string',
  })
  readonly userId: number;
}
