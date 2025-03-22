import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://192.168.101.73:27017/test'),
        MulterModule.register({
            storage: memoryStorage(),
        }),
    ],
    controllers: [FileUploadController],
    providers: [FileUploadService],
})
export class FileUploadModule { }