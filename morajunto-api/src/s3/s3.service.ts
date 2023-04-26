import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { v4 as uuid } from 'uuid';

@Injectable()
export class S3Service {
  private readonly s3: S3;
  private readonly bucketName: string;

  constructor() {
    this.bucketName = process.env.S3_BUCKET_NAME;
    this.s3 = new S3({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  upload(file: Express.Multer.File, folder: string) {
    const key = uuid();
    const filename = `${key}-${file.originalname}`;
    const params = {
      Bucket: this.bucketName,
      Key: `${folder}/${filename}`,
      Body: file.buffer,
      ACL: 'public-read',
      ContentType: file.mimetype,
    };

    return this.s3.upload(params).promise();
  }

  delete(key: string) {
    const params = {
      Bucket: this.bucketName,
      Key: key,
    };
    return this.s3.deleteObject(params).promise();
  }
}
