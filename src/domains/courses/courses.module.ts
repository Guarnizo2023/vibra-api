import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Course, CourseSchema } from './schemas/course.schema';
import { LoggerModule } from '../../helpers/logger/logger.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
        LoggerModule,
    ],
    controllers: [CoursesController],
    providers: [CoursesService],
    exports: [CoursesService]
})
export class CoursesModule { }