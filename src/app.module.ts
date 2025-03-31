import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD } from '@nestjs/core';
import { CoursesModule } from './domains/courses/courses.module';
import { EmotionsModule } from './domains/emotions/emotions.module';
import { AuthModule } from './infrastructure/auth/auth.module';
import { EventsGateway } from './infrastructure/sockets/events.gateway';
import { LoggerModule } from './helpers/logger/logger.module';
import { HightSchoolsModule } from './domains/hightSchools/hightSchools.module';
import { RolesModule } from './domains/roles/roles.module';
import { UserEmotionsModule } from './domains/userEmotions/userEmotions.module';
import { UsersModule } from './domains/users/users.module';
import { FileUploadModule } from './infrastructure/file-upload/file-upload.module';
import { EmailModule } from './infrastructure/emails/email.module';
import { PreTestModule } from './domains/preTest/preTest.module';
import { PoliciesModule } from './domains/policies/policies.module';
import { ActivitiesModule } from './domains/activities/activities.module';
import { RankingModule } from './domains/rankings/ranking.module';
import { SchedulingModule } from './domains/scheduling/scheduling.module';
import { AppThrottlerModule } from './infrastructure/throttler/throttler.module';
import { ThrottlerGuard } from './infrastructure/throttler/throttler.guard';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';

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
    SchedulingModule,
    AppThrottlerModule,
    ExceptionsModule
  ],
  providers: [
    EventsGateway,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule { }
