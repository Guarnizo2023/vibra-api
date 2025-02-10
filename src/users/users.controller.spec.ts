import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
    let usersController: UsersController;
    let usersService: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                {
                    provide: UsersService,
                    useValue: {
                        create: jest.fn(),
                        findAll: jest.fn(),
                        findByUsername: jest.fn(),
                    },
                },
            ],
        }).compile();

        usersController = module.get<UsersController>(UsersController);
        usersService = module.get<UsersService>(UsersService);
    });

    it('should be defined', () => {
        expect(usersController).toBeDefined();
    });

    describe('create', () => {
        it('should call usersService.create with the correct parameters', async () => {
            const createUserDto = { username: 'testuser', password: 'testpass' };
            await usersController.create(createUserDto);
            expect(usersService.create).toHaveBeenCalledWith(createUserDto);
        });
    });

    describe('findAll', () => {
        it('should call usersService.findAll', async () => {
            await usersController.findAll();
            expect(usersService.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should call usersService.findByUsername with the correct parameter', async () => {
            const username = 'testuser';
            await usersController.findOne(username);
            expect(usersService.findByUsername).toHaveBeenCalledWith(username);
        });
    });
});