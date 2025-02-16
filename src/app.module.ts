import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from './courses/courses.module';
import { EmotionsModule } from './emotions/emotions.module';
import { AuthModule } from './helpers/auth/auth.module';
import { EventsGateway } from './helpers/events.gateway';
import { LoggerModule } from './helpers/logger/logger.module';
import { HightSchoolsModule } from './hightSchools/hightSchools.module';
import { RolesModule } from './roles/roles.module';
import { UserEmotionsModule } from './userEmotions/userEmotions.module';
import { UsersModule } from './users/users.module';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    LoggerModule,
    AuthModule,
    UsersModule,
    EmotionsModule,
    HightSchoolsModule,
    RolesModule,
    CoursesModule,
    UserEmotionsModule,
    FileUploadModule
  ],
  providers: [EventsGateway],
})
export class AppModule { }
