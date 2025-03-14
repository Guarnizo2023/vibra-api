import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Query, Req } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto, UpdateActivityDto } from './dto/activity.dto';
import { JwtAuthGuard } from './guard/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ActivityResponseDto } from './dto/activity-response.dto';

@ApiTags('Activities')
@ApiBearerAuth()
@Controller('activities')
export class ActivitiesController {
    constructor(private readonly activitiesService: ActivitiesService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() createActivityDto: CreateActivityDto) {
        return this.activitiesService.create(createActivityDto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    findAll(
        @Query('emotion') emotion: string,
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
    ) {
        console.log({ page, limit, emotion });
        return this.activitiesService.paginate({ page, limit }, emotion == 'all' ? {} : { emotion });
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne(@Param('id') id: string) {
        return this.activitiesService.findById(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto) {
        return this.activitiesService.update(id, updateActivityDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    remove(@Param('id') id: string) {
        return this.activitiesService.softDelete(id);
    }

    @Get('emotions/list')
    @UseGuards(JwtAuthGuard)
    getAvailableEmotions() {
        return this.activitiesService.getAvailableEmotions();
    }

    @Get('daily/current')
    @UseGuards(JwtAuthGuard)
    getDailyActivity() {
        return this.activitiesService.getTodaysActivity();
    }

    @Post(':id/submit')
    @UseGuards(JwtAuthGuard)
    submitResponse(
        @Param('id') activityId: string,
        @Param('userId') userId: string,
        @Body() responseDto: ActivityResponseDto,
        @Req() req: any
    ) {
        return this.activitiesService.processResponse(
            userId,
            activityId,
            responseDto
        );
    }
}