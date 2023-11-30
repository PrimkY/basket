import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBasketDto {
  @ApiProperty({
    example: '1',
    description: 'user id / not uniq / string',
  })
  @IsNotEmpty()
  readonly userId: number;
}
