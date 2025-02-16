// users/users.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './user.schema';
import { LoggerModule } from '../helpers/logger/logger.module';
import { EventsGateway } from 'src/helpers/events.gateway';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        LoggerModule,
    ],
    controllers: [UsersController],
    providers: [UsersService, EventsGateway],
    exports: [UsersService],
})
export class UsersModule { }