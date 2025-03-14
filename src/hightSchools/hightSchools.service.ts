import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppLoggerService } from '../helpers/logger/logger.service';
import { HightSchool } from './schemas/hightSchool.schema';

@Injectable()
export class HightSchoolsService {
    constructor(
        @InjectModel(HightSchool.name) private hightSchoolsModel: Model<HightSchool>,
        private readonly logger: AppLoggerService,
    ) {
        this.logger.log('HightSchoolssService initialized');
    }

    async create(createHightSchoolsDto: HightSchool): Promise<HightSchool> {
        this.logger.log('Creating a new hightSchools...');
        const createdHightSchools = new this.hightSchoolsModel({ ...createHightSchoolsDto });
        return createdHightSchools.save();
    }

    async updateKeepSessionActive(createHightSchoolsDto: HightSchool): Promise<HightSchool> {
        this.logger.log('Updating a hightSchools...');
        const createdHightSchools = new this.hightSchoolsModel({ ...createHightSchoolsDto });
        return createdHightSchools.save();
    }

    async findAll(): Promise<HightSchool[]> {
        this.logger.log('Fetching all hightSchoolss...');
        return this.hightSchoolsModel.find().exec();
    }

    async findByHightSchoolsname(hightSchoolsname: string): Promise<HightSchool | undefined> {
        this.logger.log(`Finding hightSchools by hightSchoolsname: ${hightSchoolsname}`);
        return this.hightSchoolsModel.findOne({ hightSchoolsname }).exec();
    }
}
