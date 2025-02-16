import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ExecutionContext, INestApplication } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as request from 'supertest';

describe('AuthController', () => {
    let app: INestApplication;
    let authService = { login: jest.fn(), getProfile: jest.fn() };

    beforeAll(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [
                {
                    provide: AuthService,
                    useValue: authService,
                },
            ],
        })
            .overrideGuard(AuthGuard('jwt'))
            .useValue({
                canActivate: (context: ExecutionContext) => {
                    const request = context.switchToHttp().getRequest();
                    request.user = { userId: 1, username: 'testuser' };
                    return true;
                },
            })
            .compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it(`/POST login`, () => {
        const loginDto = { username: 'testuser', password: 'testpass' };
        authService.login.mockReturnValue({ accessToken: 'testtoken' });

        return request(app.getHttpServer())
            .post('/auth/login')
            .send(loginDto)
            .expect(201)
            .expect({
                accessToken: 'testtoken',
            });
    });

    /*it(`/POST profile`, () => {
        authService.getProfile.mockReturnValue({ _id: 1, username: 'testuser' });

        return request(app.getHttpServer())
            .post('/auth/profile')
            .expect(200)
            .expect({
                _id: 1,
                username: 'testuser',
            });
    });*/

    afterAll(async () => {
        await app.close();
    });
});