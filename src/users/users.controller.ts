// users/users.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('create')
    async create(@Body() createUserDto: User) {
        return this.usersService.create(createUserDto);
    }

    @Post()
    async update(@Body() createUserDto: any) {
        return null//this.usersService.update(createUserDto);
    }

    @Get('all')
    async findAll() {
        return this.usersService.findAll();
    }

    @Get('search/:username')
    async findOne(@Param('username') username: string) {
        return this.usersService.findByUsername(username);
    }

    @Post('login')
    async findByUserAndPassword(@Body('username') username: string, @Body('password') password: string) {
        console.log('****', username, password);
        return this.usersService.findByUserAndPassword(username, password);
    }
}