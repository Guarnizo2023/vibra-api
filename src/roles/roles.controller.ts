import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from './role.schema';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

    @Post('create')
    async create(@Body() createRoleDto: Role) {
        return this.rolesService.create(createRoleDto);
    }

    @Post('updateKeepSessionActive')
    async updateKeepSessionActive(@Body() createRoleDto: Role) {
        return this.rolesService.updateKeepSessionActive(createRoleDto);
    }

    @Get('all')
    async findAll() {
        return this.rolesService.findAll();
    }

    @Get('roles/:name')
    async findOne(@Param('name') name: string) {
        return this.rolesService.findByName(name);
    }
}
