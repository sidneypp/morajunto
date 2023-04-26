import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class FindAddressDto {
  @IsString()
  @MinLength(8)
  @MaxLength(8)
  @Matches(/^\d{8}$/)
  zipcode: string;
}
