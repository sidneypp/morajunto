import { Optional } from '@nestjs/common';
import { IsString } from 'class-validator';

export class UpdatePhotoDto {
  @IsString()
  @Optional()
  houseSection: string;
}
