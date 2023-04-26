import { Injectable } from '@nestjs/common';
import { DatabaseService } from '~/database';
import { S3Service } from '~/s3';
import { User } from '~/users';

@Injectable()
export class PhotosService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly s3Service: S3Service,
  ) {}

  async createOrUpdate(user: User, file: Express.Multer.File) {
    const photo = await this.databaseService.photo.findUnique({
      where: {
        userId: user.id,
      },
    });

    const { Key, Location } = await this.s3Service.upload(file, 'users');
    const data = {
      key: Key,
      url: Location,
      filename: file.originalname,
      size: file.size,
      type: file.mimetype,
    };

    if (photo) {
      await this.s3Service.delete(photo.key);
      return this.databaseService.photo.update({
        data,
        where: {
          userId: user.id,
        },
      });
    }

    return this.databaseService.photo.create({
      data: {
        ...data,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
  }
}
