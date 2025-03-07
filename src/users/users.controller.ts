import { Body, Controller, Get, Param, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EventsGateway } from '../helpers/events.gateway';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from './guard/auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly eventsGateway: EventsGateway,
        private readonly jwtService: JwtService,
    ) { }

    @Get('trigger')
    @UseGuards(AuthGuard)
    triggerEvent() {
        const data = { message: '¡Evento generado desde el backend!' };
        this.eventsGateway.emitEvent(data); // Emitir el evento
        return { message: 'Evento emitido' };
    }

    @Post('create')
    @UseGuards(AuthGuard)
    async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto)
            .then((response: CreateUserDto) => {
                if (response) {
                    const data = { message: `Se ha registrado un nuevo usuario al sistema, Usuario: ${response.username}` };
                    this.eventsGateway.emitEvent(data);
                    return { username: response.username };
                } else {
                    return null;
                }
            });
    }

    @Post()
    @UseGuards(AuthGuard)
    async update(@Body() createUserDto: any) {
        return null//this.usersService.update(createUserDto);
    }

    @Get('all')
    @UseGuards(AuthGuard)
    async findAll() {
        return this.usersService.findAll();
    }

    @Get('search/:username')
    @UseGuards(AuthGuard)
    async findOne(@Param('username') username: string) {
        return this.usersService.findByUsername(username);
    }

    @Post('login/userValidate')
    async findByEmailAndPassword(@Body('email') email: string, @Body('password') password: string) {
        console.info('User email and password: ', email, password);
        const user = await this.usersService.findByEmailAndPassword(email, password);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        // Generate JWT token with user data
        const payload = {
            sub: user._id,
            email: user.email,
            username: user.username,
            role: user.role
        };

        const token = this.jwtService.sign(payload, {
            secret: 'vibra-secret-key', //process.env.JWT_SECRET,
            expiresIn: '24h' // Token expires in 24 hours
        });

        return {
            access_token: token,
            user: {
                id: user._id,
                email: user.email,
                username: user.username,
                role: user.role
            }
        };
    }
}