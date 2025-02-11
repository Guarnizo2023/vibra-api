import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'src/helpers/logger/logger.module';
import { Role, RoleSchema } from './role.schema';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
        LoggerModule, // Import logger module
    ],
    controllers: [RolesController],
    providers: [RolesService],
    exports: [RolesService],
})
export class RolesModule { }
