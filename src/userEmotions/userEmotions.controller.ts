import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserEmotionsService } from './userEmotions.service';
import { UserEmotion } from './userEmotion.schema';
import { User } from 'src/users/user.schema';
import { Emotion } from 'src/emotions/emotion.schema';
import { Event } from 'src/events/event.schema';

@Controller('userEmotions')
export class UserEmotionsController {
    constructor(private readonly userEmotionsService: UserEmotionsService) { }

    @Post()
    async create(@Body() createUserEmotionsDto: UserEmotion) {
        console.log('createUserEmotionsDto: ', createUserEmotionsDto);
        return this.userEmotionsService.create(createUserEmotionsDto);
    }

    @Post('update')
    async update(@Body() updateUserEmotionsDto: any) {
        return this.userEmotionsService.update(updateUserEmotionsDto);
    }

    @Get()
    async findAll() {
        return this.userEmotionsService.findAll();
    }

    @Post('findByUser')
    async findByUser(@Param('name') user: User) {
        return this.userEmotionsService.findByUser(user);
    }

    @Post('findByEmotion')
    async findByEmotion(@Param('name') emotion: Emotion) {
        return this.userEmotionsService.findByEmotion(emotion);
    }

    @Post('findByEvent')
    async findByEvent(@Param('name') event: Event) {
        return this.userEmotionsService.findByEvent(event);
    }

    @Post('findByUserEmotionAndEvent')
    async findByUserEmotionAndEvent(@Param('name') user: User, @Param('name') emotion: Emotion, @Param('name') event: Event) {
        return this.userEmotionsService.findByUserEmotionAndEvent(user, emotion, event);
    }
}