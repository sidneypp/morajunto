import { Type } from 'class-transformer';
import {
  IsIn,
  IsNumber,
  IsObject,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from '~/addresses/dto/create-address.dto';
import { Property, PropertyKind } from '~/properties/entities/property.entity';

export class CreatePropertyDto extends Property {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsIn(['apartment', 'studio', 'house'])
  kind: PropertyKind;

  @IsNumber()
  @IsPositive()
  area: number;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
