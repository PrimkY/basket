import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
    @ApiProperty({
        example: 'paper',
        description: 'required name / not uniq / string',
    })
    @IsNotEmpty()
    readonly name: string;
    @ApiProperty({
        example: '105.52',
        description: 'uniq and require price / string',
    })
    @IsNotEmpty()
    readonly price: number;
    @ApiProperty({ example: 'block of 500 paper shits', description: 'not uniq / string' })
    @IsNotEmpty()
    readonly description: string;

}
