import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HightSchoolsService } from './hightSchools.service';
import { HightSchoolsController } from './hightSchools.controller';
import { HightSchool, HightSchoolSchema } from './schemas/hightSchool.schema';
import { LoggerModule } from '../helpers/logger/logger.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: HightSchool.name, schema: HightSchoolSchema }]),
        LoggerModule,
    ],
    controllers: [HightSchoolsController],
    providers: [HightSchoolsService],
    exports: [HightSchoolsService],
})
export class HightSchoolsModule { }