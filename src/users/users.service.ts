import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { AppLoggerService } from '../helpers/logger/logger.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private readonly logger: AppLoggerService,
    ) {
        this.logger.log('UsersService initialized');
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        this.logger.log('Creating a new user...');
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const createdUser = new this.userModel({ ...createUserDto, password: hashedPassword });
        return createdUser.save();
    }

    /**
     * Update user is session active
     * 
     * @param createUserDto
     * @returns User
     */
    async updateKeepSessionActive(createUserDto: User): Promise<User> {
        this.logger.log('Updating a user...');
        const createdUser = new this.userModel({ ...createUserDto, keepSessionActive: createUserDto.keepSessionActive });
        return createdUser.save();
    }

    /**
     * @returns User[]
     */
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

    /**
     * @param username
     * @returns User | undefined
     */
    async findByUsername(username: string): Promise<User | undefined> {
        this.logger.log(`Finding user by username: ${username}`);
        return this.userModel.findOne({ username }).exec();
    }

    /**
     * @param email
     * @param password
     * @returns User | undefined
     */
    async findByEmailAndPassword(email: string, password: string): Promise<User | undefined> {
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            return undefined;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return undefined;
        }
        return user;
    }

}
