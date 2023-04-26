import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';

export function IsCpf(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isCpf',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return cpf.isValid(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid CPF`;
        },
      },
    });
  };
}
