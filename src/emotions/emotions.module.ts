import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmotionsService } from './emotions.service';
import { EmotionsController } from './emotions.controller';
import { Emotion, EmotionSchema } from './emotion.schema';
import { LoggerModule } from '../helpers/logger/logger.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Emotion.name, schema: EmotionSchema }]),
        LoggerModule,
    ],
    controllers: [EmotionsController],
    providers: [EmotionsService],
    exports: [EmotionsService],
})
export class EmotionsModule { }