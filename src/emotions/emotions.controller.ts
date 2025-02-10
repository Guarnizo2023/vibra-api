import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EmotionsService } from './emotions.service';

@Controller('emotions')
export class EmotionsController {
    constructor(private readonly emotionsService: EmotionsService) { }

    @Post()
    async create(@Body() createEmotionDto: any) {
        return this.emotionsService.create(createEmotionDto);
    }

    @Get()
    async findAll() {
        return this.emotionsService.findAll();
    }

    @Get(':emotionname')
    async findOne(@Param('emotionname') emotionname: string) {
        return this.emotionsService.findByEmotionname(emotionname);
    }
}