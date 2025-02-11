// hightSchoolss/hightSchoolss.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HightSchoolsService } from './hightSchools.service';
import { HightSchoolsController } from './hightSchools.controller';
import { HightSchool, HightSchoolSchema } from './hightSchool.schema';
import { LoggerModule } from '../helpers/logger/logger.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: HightSchool.name, schema: HightSchoolSchema }]),
        LoggerModule, // Import logger module
    ],
    controllers: [HightSchoolsController],
    providers: [HightSchoolsService],
    exports: [HightSchoolsService],
})
export class HightSchoolsModule { }