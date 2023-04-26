import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { DatabaseModule } from '~/database';
import { S3Module } from '~/s3';
import { InvalidFileType } from './exceptions/invalid-file-type';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';

@Module({
  imports: [
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
  providers: [PhotosService],
  controllers: [PhotosController],
})
export class PhotosModule {}
