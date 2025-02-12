import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppLoggerService } from '../helpers/logger/logger.service';
import { UserEmotion } from './userEmotion.schema';
import { User } from 'src/users/user.schema';
import { Emotion } from 'src/emotions/emotion.schema';
import { Event } from 'src/events/event.schema';

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

    async update(updateUserEmotionsDto: UserEmotion): Promise<UserEmotion> {
        this.logger.log('Updating a user emotions ...');
        const createdUserEmotions = new this.userEmotionsModel({ ...updateUserEmotionsDto });
        return createdUserEmotions.save();
    }

    async findAll(): Promise<UserEmotion[]> {
        this.logger.log('Fetching all user emotions...');
        return this.userEmotionsModel.find().exec();
    }

    async findByUser(user: User): Promise<UserEmotion | undefined> {
        this.logger.log(`Finding user emotions by user name: ${user.username}`);
        return this.userEmotionsModel.findOne({ user }).exec();
    }

    async findByEmotion(emotion: Emotion): Promise<UserEmotion | undefined> {
        this.logger.log(`Finding user emotions by emotion name: ${emotion.name}`);
        return this.userEmotionsModel.findOne({ emotion }).exec();
    }

    async findByEvent(event: Event): Promise<UserEmotion | undefined> {
        this.logger.log(`Finding user emotions by event name: ${event.name}`);
        return this.userEmotionsModel.findOne({ event }).exec();
    }

    async findByUserEmotionAndEvent(user: User, emotion: Emotion, event: Event): Promise<UserEmotion | undefined> {
        this.logger.log(`Finding user emotions by user name, emotion name and event name: ${user.username}`);
        return this.userEmotionsModel.findOne({ user, emotion, event }).exec();
    }
}
