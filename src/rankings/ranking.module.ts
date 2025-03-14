import { Module } from '@nestjs/common';
import { RankingService } from './ranking.service';
import { RankingGateway } from './socket/ranking.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResponse, UserResponseSchema } from '../userResponses/schemas/userResponse.schema';
import { User, UserSchema } from '../users/schemas/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: UserResponse.name, schema: UserResponseSchema },
            { name: User.name, schema: UserSchema }
        ])
    ],
    providers: [RankingService, RankingGateway],
    exports: [RankingService]
})
export class RankingModule { }