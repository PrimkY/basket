import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'someuniqemail@gmail.com',
    description: 'user email / string',
  })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    example: 'passwordTh@t$tronG.2244',
    description: 'password / not uniq / string',
  })
  @IsNotEmpty()
  readonly password: string;
}
