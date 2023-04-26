import { Injectable } from '@nestjs/common';
import { DatabaseService } from '~/database';
import { PropertiesService } from '~/properties';
import { PropertyNotFound } from '~/properties/exceptions/property-not-found';
import { S3Service } from '~/s3';
import { User } from '~/users';
import { UpdatePhotoDto } from './dto/create-property-photo.dto';
import { PropertyImageNotFound } from './exceptions/property-image-not-found';

@Injectable()
export class PropertiesPhotosService {
  constructor(
    private readonly s3Service: S3Service,
    private readonly databaseService: DatabaseService,
    private readonly propertiesService: PropertiesService,
  ) {}

  async create(user: User, propertyId: number, file: Express.Multer.File) {
    const { id, userId } = await this.propertiesService.findOrThrow(propertyId);

    if (userId !== user.id) throw new PropertyNotFound();

    const { Key, Location } = await this.s3Service.upload(file, 'properties');

    return this.databaseService.propertyPhotos.create({
      data: {
        key: Key,
        url: Location,
        filename: file.originalname,
        size: file.size,
        type: file.mimetype,
        property: {
          connect: {
            id: id,
          },
        },
      },
    });
  }

  async findOrThrow(id: number) {
    const image = await this.databaseService.propertyPhotos.findUnique({
      where: {
        id,
      },
    });

    if (!image) throw new PropertyImageNotFound();

    return image;
  }

  async delete(user: User, id: number) {
    const { propertyId, key } = await this.findOrThrow(id);
    const property = await this.propertiesService.findOrThrow(propertyId);

    if (property.userId !== user.id) throw new PropertyImageNotFound();

    await this.s3Service.delete(key);

    return this.databaseService.propertyPhotos.delete({
      where: {
        id,
      },
    });
  }
  async update(user: User, id: number, propertyPhoto: UpdatePhotoDto) {
    const { propertyId } = await this.findOrThrow(id);
    const property = await this.propertiesService.findOrThrow(propertyId);

    if (property.userId !== user.id) throw new PropertyImageNotFound();

    return this.databaseService.propertyPhotos.update({
      data: {
        houseSection: propertyPhoto.houseSection,
      },
      where: {
        id: id,
      },
    });
  }
}
