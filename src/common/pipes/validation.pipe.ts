import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors: ValidationError[] = await validate(object);

    if (errors.length > 0) {
      const errorMessage = this.buildErrorMessage(errors);
      throw new BadRequestException(errorMessage);
    }

    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  private buildErrorMessage(errors: ValidationError[]): string {
    const errorMessages = errors.map((error) => {
      for (const constraint in error.constraints) {
        if (error.constraints.hasOwnProperty(constraint)) {
          return error.constraints[constraint];
        }
      }
    });
    return errorMessages.join(', ');
  }
}
