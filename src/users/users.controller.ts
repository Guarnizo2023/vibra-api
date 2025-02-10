// users/users.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body() createUserDto: any) {
        return this.usersService.create(createUserDto);
    }

    @Post()
    async update(@Body() createUserDto: any) {
        return this.usersService.update(createUserDto);
    }

    @Get()
    async findAll() {
        return this.usersService.findAll();
    }

    @Get(':username')
    async findOne(@Param('username') username: string) {
        return this.usersService.findByUsername(username);
    }
}