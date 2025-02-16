import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEmotionsService } from './userEmotions.service';
import { UserEmotionsController } from './userEmotions.controller';
import { UserEmotion, UserEmotionSchema } from './userEmotion.schema';
import { LoggerModule } from '../helpers/logger/logger.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: UserEmotion.name, schema: UserEmotionSchema }]),
        LoggerModule,
    ],
    controllers: [UserEmotionsController],
    providers: [UserEmotionsService],
    exports: [UserEmotionsService],
})
export class UserEmotionsModule { }