import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Offer } from '../entities/offer.entity';

export class CreateOfferDto extends Offer {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  depositAmount: string;

  @IsString()
  rentPricing: string;

  @IsBoolean()
  withElectricity: boolean;

  @IsBoolean()
  withGas: boolean;

  @IsBoolean()
  withInternet: boolean;

  @IsBoolean()
  withWater: boolean;

  @IsBoolean()
  depositRequired: boolean;

  @IsNumber()
  minimumStay: number;

  @IsNumber()
  @IsOptional()
  ageGroup?: number;
  @IsBoolean()
  toWork: boolean;
  @IsBoolean()
  toStudy: boolean;
  @IsBoolean()
  menAllowed: boolean;
  @IsBoolean()
  womenAllowed: boolean;
}
