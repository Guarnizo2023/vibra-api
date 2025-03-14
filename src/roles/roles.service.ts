import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppLoggerService } from 'src/helpers/logger/logger.service';
import { Role } from 'src/roles/schemas/role.schema';

@Injectable()
export class RolesService {
    constructor(
        @InjectModel(Role.name) private roleModel: Model<Role>,
        private readonly logger: AppLoggerService,
    ) {
        this.logger.log('RolesService initialized');
    }

    getHello(): string {
        //cualquier logica que se requiera
        return 'Hello World!';
    }

    async create(createRoleDto: Role): Promise<Role> {
        this.logger.log('Creating a new role...');
        const createdRole = new this.roleModel({ ...createRoleDto });
        return createdRole.save();
    }

    async updateKeepSessionActive(createRoleDto: Role): Promise<Role> {
        this.logger.log('Updating a role...');
        const createdRole = new this.roleModel({ ...createRoleDto });
        return createdRole.save();
    }

    async findAll(): Promise<Role[]> {
        this.logger.log('Fetching all roles...');
        return this.roleModel.find().exec();
    }

    async findByName(name: string): Promise<Role | undefined> {
        this.logger.log(`Finding role by name: ${name}`);
        return this.roleModel.findOne({ name }).exec();
    }
}
