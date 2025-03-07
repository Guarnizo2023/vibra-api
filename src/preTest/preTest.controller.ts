import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PreTestService } from './preTest.service';
import { CreatePreTestDto } from './dto/create-pretest.dto';
import { UpdatePreTestDto } from './dto/update-pretest.dto';

@Controller('pretest')
export class PreTestController {
  constructor(private readonly preTestService: PreTestService) { }

  @Post()
  create(@Body() createTestDto: CreatePreTestDto) {
    return this.preTestService.create(createTestDto);
  }

  @Get()
  findAll() {
    return this.preTestService.findAll();
  }

  /* @Get(':id')
   findOne(@Param('id') id: string) {
     return this.preTestService.findOne(+id);
   }*/

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdatePreTestDto) {
    return this.preTestService.update(+id, updateTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.preTestService.remove(+id);
  }

  /*@Get(":userId")
  async getUserPreTests(@Param("userId") userId: string) {
    return this.preTestService.getPreTestResponses(userId);
  }*/

  @Post("save")
  async saveTest(@Body() testData: any) {
    return this.preTestService.savePreTestResponse(testData);
  }

  @Post("search/userAndTest")
  async getUserAndTestResponses(@Body() userId: string, @Body() testId: string) {
    return this.preTestService.getUserAndTestResponses(userId, testId);
  }

  @Get("search/user/:userId")
  async getUserTests(@Param("userId") userId: string) {
    return this.preTestService.getAlByUserId(userId);
  }

  @Get("resultAll")
  async getAllResults() {
    return this.preTestService.getAllPreTestResults();
  }

  @Get("result/:id")
  async getResultById(@Param("id") id: string) {
    return this.preTestService.getPreTestResultById(id);
  }
}
