import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Address } from '~/addresses/entities/address.entity';

export class CreateAddressDto extends Address {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  zipcode: string;

  @IsNumber()
  @IsPositive()
  stateId: number;

  @IsNumber()
  @IsPositive()
  cityId: number;

  @IsNumber()
  @IsPositive()
  neighborhoodId: number;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsNumber()
  @IsPositive()
  number: number;

  @IsString()
  @IsOptional()
  complement?: string;
}
