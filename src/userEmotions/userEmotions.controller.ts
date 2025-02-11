import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserEmotionsService } from './userEmotions.service';
import { UserEmotion } from './userEmotion.schema';

@Controller('userEmotions')
export class UserEmotionsController {
    constructor(private readonly userEmotionsService: UserEmotionsService) { }

    @Post()
    async create(@Body() createUserEmotionsDto: UserEmotion) {
        console.log('createUserEmotionsDto: ',createUserEmotionsDto);
        return this.userEmotionsService.create(createUserEmotionsDto);
    }

    /*@Post()
    async update(@Body() createUserEmotionsDto: any) {
        return this.userEmotionsService.update(createUserEmotionsDto);
    }*/

    @Get()
    async findAll() {
        return this.userEmotionsService.findAll();
    }

    @Get(':userEmotionsName')
    async findOne(@Param('userEmotionsName') userEmotionsName: string) {
        return this.userEmotionsService.findByUserEmotionsname(userEmotionsName);
    }
}