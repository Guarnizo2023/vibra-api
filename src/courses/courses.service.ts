import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppLoggerService } from '../helpers/logger/logger.service';
import { Course } from './course.schema';

@Injectable()
export class CoursesService {
    constructor(
        @InjectModel(Course.name) private coursesModel: Model<Course>,
        private readonly logger: AppLoggerService,
    ) {
        this.logger.log('CoursessService initialized');
    }

    async create(createCoursesDto: Course): Promise<Course> {
        this.logger.log('Creating a new courses...');
        const createdCourses = new this.coursesModel({ ...createCoursesDto });
        return createdCourses.save();
    }

    async updateKeepSessionActive(createCoursesDto: Course): Promise<Course> {
        this.logger.log('Updating a courses...');
        const createdCourses = new this.coursesModel({ ...createCoursesDto });
        return createdCourses.save();
    }

    async findAll(): Promise<Course[]> {
        this.logger.log('Fetching all coursess...');
        return this.coursesModel.find().exec();
    }

    async findByCourseName(name: string): Promise<Course | undefined> {
        this.logger.log(`Finding courses by name: ${name}`);
        return this.coursesModel.findOne({ name }).exec();
    }

    async findByHightSchool(hightSchool: string):  Promise<Course[]>  {
        this.logger.log(`Finding courses by hightSchool: ${hightSchool}`);
        return this.coursesModel.find({ hightSchool }).exec();
    }
}
