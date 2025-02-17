
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HightSchoolsService } from './hightSchools.service';
import { HightSchool } from './hightSchool.schema';

@Controller('hightSchools')
export class HightSchoolsController {
    constructor(private readonly hightSchoolsService: HightSchoolsService) { }

    @Post()
    async create(@Body() createHightSchoolsDto: HightSchool) {
        console.log('createHightSchoolsDto: ',createHightSchoolsDto);
        return this.hightSchoolsService.create(createHightSchoolsDto);
    }

    /*@Post()
    async update(@Body() createHightSchoolsDto: any) {
        return this.hightSchoolsService.update(createHightSchoolsDto);
    }*/

    @Get('all')
    async findAll() {
        return this.hightSchoolsService.findAll();
    }

    @Get(':hightSchoolsname')
    async findOne(@Param('hightSchoolsname') hightSchoolsname: string) {
        return this.hightSchoolsService.findByHightSchoolsname(hightSchoolsname);
    }
}