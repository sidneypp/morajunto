import {
  IsDateString,
  IsEmail,
  IsIn,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { IsCpf } from '../decorators/is-cpf.decorator';
import { Gender, User } from '../entities/user.entity';

export class UpdateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  @IsIn(['masculine', 'feminine'])
  @IsOptional()
  gender: Gender;

  @IsString()
  @IsOptional()
  @IsPhoneNumber('BR')
  phoneNumber: string;

  @IsDateString()
  @IsOptional()
  birthDate: string;

  @IsString()
  @IsOptional()
  @IsCpf()
  document: string;
}
