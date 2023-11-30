import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({
    example: 'someuniqemail@gmail.com',
    description: 'user email / string',
  })
  readonly email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]*$/, {
    message:
      'Password must contain at least one lowercase letter, one uppercase letter, and one number.',
  })
  @ApiProperty({
    example: 'passwordTh@t$tronG.2244',
    description: 'password / not uniq / string',
  })
  readonly password: string;
}
