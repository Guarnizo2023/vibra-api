import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { AppLoggerService } from './helpers/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.colorize(),
            winston.format.simple(),
          ),
        }),
      ],
    }),
  });

  app.enableCors({
    origin: ['http://localhost:8081', 'exp://192.168.101.72:8081'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });



  const logger = new AppLoggerService();
  app.useLogger(logger);

  await app.listen(process.env.PORT || 3000);
  console.log(`Application is running on: http://${process.env.HOST}:${process.env.PORT}`);
}
bootstrap();
