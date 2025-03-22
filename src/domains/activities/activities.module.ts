import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResponse, UserResponseSchema } from 'src/domains/userResponses/schemas/userResponse.schema';
import { ActivitiesController } from './activities.controller';
import { ActivitiesService } from './activities.service';
import { Activity, ActivitySchema } from './schemas/activity.schema';
import { WeeklySchedule, WeeklyScheduleSchema } from './schemas/weekly-schedule.schema';
import { UserResponseService } from 'src/domains/userResponses/userResponse.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Activity.name, schema: ActivitySchema },
            { name: WeeklySchedule.name, schema: WeeklyScheduleSchema },
            { name: UserResponse.name, schema: UserResponseSchema }
        ]),
    ],
    controllers: [ActivitiesController],
    providers: [ActivitiesService, UserResponseService],
    exports: [ActivitiesService]
})
export class ActivitiesModule { }