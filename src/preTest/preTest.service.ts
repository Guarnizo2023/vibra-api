import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePreTestDto } from './dto/create-pretest.dto';
import { UpdatePreTestDto } from './dto/update-pretest.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PreTest, TestDocument } from './entities/preTest.entity';

@Injectable()
export class PreTestService {
  constructor(@InjectModel(PreTest.name) private preTestModel: Model<TestDocument>) { }

  create(createTestDto: CreatePreTestDto) {
    return 'This action adds a new test';
  }

  findAll() {
    return `This action returns all test`;
  }

  /*
    findOne(id: number) {
      return `This action returns a #${id} test`;
    }*/

  update(id: number, updateTestDto: UpdatePreTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }

  /**
   *
   * @param testData
   * @returns
   */
  async savePreTestResponse(testData: any): Promise<PreTest> {
    const parsedBody = JSON.parse(testData.body);
    const responses = parsedBody.responses || [];
    const totalScore = responses.reduce((sum: number, response: any) => sum + (response.points || 0), 0);
    testData.totalScore = totalScore;
    const test = new this.preTestModel(parsedBody);
    return test.save();
  }

  /**
   * 
   * @param userId 
   * @param testId
   * @returns 
   */
  async getUserAndTestResponses(userId: string, testId: string): Promise<PreTest[]> {
    return this.preTestModel.find({ userId, testId }).exec();
  }

  /**
   * 
   * @param userId 
   * @returns 
   */
  async getAlByUserId(userId: string): Promise<PreTest[]> {
    return this.preTestModel.find({ userId }).exec();
  }

  /**
   *
   * @returns
   */
  async getAllPreTestResults(): Promise<PreTest[]> {
    console.log('Entro....');
    return this.preTestModel.find().exec();
  }

  /**
   *
   * @param id
   * @returns
   */
  async getPreTestResultById(id: string): Promise<PreTest> {
    const testResult = await this.preTestModel.findById(id)
      .populate({
        path: 'userId',
        model: 'User'
      })
      .exec();
    if (!testResult) {
      throw new NotFoundException("Test result not found");
    }
    return testResult;
  }
}
