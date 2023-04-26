import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { User } from '~/users';
import { InvalidFileType } from './exceptions/invalid-file-type';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  createOrUpdate(
    @CurrentUser() user: User,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) throw new InvalidFileType();
    return this.photosService.createOrUpdate(user, file);
  }
}
