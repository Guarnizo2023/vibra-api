// emotions/emotions.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppLoggerService } from '../helpers/logger/logger.service';
import { Emotion } from './schemas/emotion.schema';

@Injectable()
export class EmotionsService {
    constructor(
        @InjectModel(Emotion.name) private emotionModel: Model<Emotion>,
        private readonly logger: AppLoggerService,
    ) {
        this.logger.log('EmotionsService initialized');
    }

    async create(createEmotionDto: any): Promise<Emotion> {
        this.logger.log(`Creating a new emotion...: ${createEmotionDto}`);
        const createdEmotion = new this.emotionModel({ ...createEmotionDto });
        return createdEmotion.save();
    }

    async findAll(): Promise<Emotion[]> {
        this.logger.log('Fetching all emotions...');
        return this.emotionModel.find().exec();
    }

    async findByName(name: string): Promise<Emotion | undefined> {
        this.logger.log(`Finding emotion by name: ${name}`);
        return this.emotionModel.findOne({ name }).exec();
    }
}
