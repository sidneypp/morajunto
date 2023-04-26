import { FileInterceptor } from '@nestjs/platform-express';
import { IsNotEmpty, Validate } from 'class-validator';

export class CreateOrUpdatePhoto {
  @IsNotEmpty()
  @Validate(FileInterceptor('file', { limits: { fileSize: 1024 * 1024 } }))
  file: Express.Multer.File;
}
