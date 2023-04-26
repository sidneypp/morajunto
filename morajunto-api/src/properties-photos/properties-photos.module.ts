import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { DatabaseModule } from '~/database';
import { InvalidFileType } from '~/photos/exceptions/invalid-file-type';
import { PropertiesModule } from '~/properties';
import { S3Module } from '~/s3';
import { PropertiesPhotosController } from './properties-photos.controller';
import { PropertiesPhotosService } from './properties-photos.service';

@Module({
  imports: [
    PropertiesModule,
    DatabaseModule,
    S3Module,
    MulterModule.register({
      fileFilter: (request: Request, file: Express.Multer.File, cb) => {
        if (file.mimetype.includes('image')) {
          return cb(null, true);
        }
        return cb(new InvalidFileType(), false);
      },
    }),
  ],
  providers: [PropertiesPhotosService],
  controllers: [PropertiesPhotosController],
})
export class PropertiesPhotosModule {}
