import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { InvalidFileType } from '~/photos/exceptions/invalid-file-type';
import { User } from '~/users';
import { UpdatePhotoDto } from './dto/create-property-photo.dto';
import { PropertiesPhotosService } from './properties-photos.service';

@Controller('properties/:propertyId/photos')
export class PropertiesPhotosController {
  constructor(
    private readonly propertiesPhotosService: PropertiesPhotosService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @CurrentUser() user: User,
    @Param('propertyId') propertyId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) throw new InvalidFileType();
    return this.propertiesPhotosService.create(user, propertyId, file);
  }

  @Delete(':id')
  delete(@CurrentUser() user: User, @Param('id') id: number) {
    return this.propertiesPhotosService.delete(user, id);
  }
  @Post(':id')
  update(
    @CurrentUser() user: User,
    @Param('id') id: number,
    @Body() updatePhotoDto: UpdatePhotoDto,
  ) {
    return this.propertiesPhotosService.update(user, id, updatePhotoDto);
  }
}
