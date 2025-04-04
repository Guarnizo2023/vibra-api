import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../../domains/users/users.module';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: 'vibra-secret-key', //process.env.JWT_SECRET,
            signOptions: { expiresIn: '24h' },
        }),
        UsersModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule { }