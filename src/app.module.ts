import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from './courses/courses.module';
import { EmotionsModule } from './emotions/emotions.module';
import { AuthModule } from './auth/auth.module';
import { EventsGateway } from './sockets/events.gateway';
import { LoggerModule } from './helpers/logger/logger.module';
import { HightSchoolsModule } from './hightSchools/hightSchools.module';
import { RolesModule } from './roles/roles.module';
import { UserEmotionsModule } from './userEmotions/userEmotions.module';
import { UsersModule } from './users/users.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { EmailModule } from './emails/email.module';
import { PreTestModule } from './preTest/preTest.module';
import { PoliciesModule } from './policies/policies.module';
import { ActivitiesModule } from './activities/activities.module';
import { RankingModule } from './rankings/ranking.module';
import { SchedulingModule } from './scheduling/scheduling.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    LoggerModule,
    AuthModule,
    UsersModule,
    EmotionsModule,
    HightSchoolsModule,
    RolesModule,
    CoursesModule,
    UserEmotionsModule,
    FileUploadModule,
    EmailModule,
    PreTestModule,
    PoliciesModule,
    ActivitiesModule,
    RankingModule,
    SchedulingModule
  ],
  providers: [EventsGateway],
})
export class AppModule { }
