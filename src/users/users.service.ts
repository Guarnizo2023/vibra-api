import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import * as bcrypt from 'bcrypt';
import { AppLoggerService } from '../helpers/logger/logger.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private readonly logger: AppLoggerService,
    ) {
        this.logger.log('UsersService initialized');
    }

    async create(createUserDto: User): Promise<User> {
        this.logger.log('Creating a new user...');
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const createdUser = new this.userModel({ ...createUserDto, password: hashedPassword });
        return createdUser.save();
    }

    async updateKeepSessionActive(createUserDto: User): Promise<User> {
        this.logger.log('Updating a user...');
        const createdUser = new this.userModel({ ...createUserDto, keepSessionActive: createUserDto.keepSessionActive });
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        this.logger.log('Fetching all users...');
        return this.userModel.find()
            .populate('role')
            .populate({
                path: 'course',
                populate: {
                    path: 'hightSchool'
                }
            })
            .exec();
    }

    async findByUsername(username: string): Promise<User | undefined> {
        this.logger.log(`Finding user by username: ${username}`);
        return this.userModel.findOne({ username }).exec();

    }

    async findByUserAndPassword(username: string, password: string): Promise<User | undefined> {
        this.logger.log(`Finding user by user and password: ${username} ${password}`);
        return this.userModel.findOne({ username, password }).exec();
    }

}
