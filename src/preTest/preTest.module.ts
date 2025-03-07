import { Module } from '@nestjs/common';
import { PreTestService } from './preTest.service';
import { PreTestController } from './preTest.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PreTest, PreTestSchema } from './entities/preTest.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: PreTest.name, schema: PreTestSchema }])],
  controllers: [PreTestController],
  providers: [PreTestService],
})
export class PreTestModule { }
