import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './course.schema';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post('create')
  async create(@Body() createCoursesDto: Course) {
    console.log('coursesDto: ', createCoursesDto);
    return this.coursesService.create(createCoursesDto); 
  }

  /*
    @Post()
    async update(@Body() createCoursesDto: any) {
        return this.coursesService.update(createCoursesDto);
    }
    */

  @Get()
  async findAll() {
    return this.coursesService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    return this.coursesService.findByCourseName(name);
  }
}
