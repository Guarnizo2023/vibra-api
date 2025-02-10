import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './helpers/auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoggerModule } from './helpers/logger/logger.module';
import { EmotionsModule } from './emotions/emotions.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    LoggerModule, // Import the logger module
    AuthModule,
    UsersModule,
    EmotionsModule,
  ],
})
export class AppModule { }
