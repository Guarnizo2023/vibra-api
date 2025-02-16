import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.schema';
import { EventsGateway } from '../helpers/events.gateway';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly eventsGateway: EventsGateway
    ) { }

    @Get('trigger')
    triggerEvent() {
        const data = { message: '¡Evento generado desde el backend!' };
        this.eventsGateway.emitEvent(data); // Emitir el evento
        return { message: 'Evento emitido' };
    }

    @Post('create')
    async create(@Body() createUserDto: User) {
        const response = this.usersService.create(createUserDto)
            .then((response) => {
                if (response) {
                    const data = { message: '¡Evento generado desde el backend!' };
                    this.eventsGateway.emitEvent(data); // Emitir el evento
                }
            })
        return response;
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