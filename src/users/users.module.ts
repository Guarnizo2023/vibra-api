import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './user.entity';
import { LoggerModule } from '../helpers/logger/logger.module';
import { EventsGateway } from 'src/helpers/events.gateway';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from '../auth/auth.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        LoggerModule,
        JwtModule.register({
            secret: 'vibra-secret-key', //process.env.JWT_SECRET,
            signOptions: { expiresIn: '24h' },
        }),
    ],
    controllers: [UsersController],
    providers: [UsersService, EventsGateway],
    exports: [UsersService],
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes(
            { path: '/users', method: RequestMethod.GET },
            { path: '/users', method: RequestMethod.POST }
        ).apply(AuthMiddleware).forRoutes('users');
    }
}