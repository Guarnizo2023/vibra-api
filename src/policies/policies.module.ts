import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PoliciesController } from './policies.controller';
import { PoliciesService } from './policies.service';
import { Policy, PolicySchema } from './policy.schema';
import { UserPolicy, UserPolicySchema } from './userPolicy.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Policy.name, schema: PolicySchema },
            { name: UserPolicy.name, schema: UserPolicySchema },
        ]),
    ],
    controllers: [PoliciesController],
    providers: [PoliciesService],
    exports: [PoliciesService],
})
export class PoliciesModule { }