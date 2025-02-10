// auth/auth.controller.ts
import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() loginDto: any) {
        return this.authService.login(loginDto);
    }

    /*@Post('profile')
    @UseGuards(AuthGuard('jwt'))
    async getProfile(@Request() req: any) {
        return req.user;
    }*/
}