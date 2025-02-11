import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppLoggerService } from '../helpers/logger/logger.service';
import { UserEmotion } from './userEmotion.schema';

@Injectable()
export class UserEmotionsService {
    constructor(
        @InjectModel(UserEmotion.name) private userEmotionsModel: Model<UserEmotion>,
        private readonly logger: AppLoggerService,
    ) {
        this.logger.log('UserEmotionssService initialized');
    }

    async create(createUserEmotionsDto: UserEmotion): Promise<UserEmotion> {
        this.logger.log('Creating a new userEmotions...');
        const createdUserEmotions = new this.userEmotionsModel({ ...createUserEmotionsDto });
        return createdUserEmotions.save();
    }

    async updateKeepSessionActive(createUserEmotionsDto: UserEmotion): Promise<UserEmotion> {
        this.logger.log('Updating a userEmotions...');
        const createdUserEmotions = new this.userEmotionsModel({ ...createUserEmotionsDto });
        return createdUserEmotions.save();
    }

    async findAll(): Promise<UserEmotion[]> {
        this.logger.log('Fetching all userEmotionss...');
        return this.userEmotionsModel.find().exec();
    }

    async findByUserEmotionsname(userEmotionsname: string): Promise<UserEmotion | undefined> {
        this.logger.log(`Finding userEmotions by userEmotionsname: ${userEmotionsname}`);
        return this.userEmotionsModel.findOne({ userEmotionsname }).exec();
    }
}
