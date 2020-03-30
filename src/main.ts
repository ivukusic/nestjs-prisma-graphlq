import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import * as config from 'config';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const serverConfig = config.get('server');
  const port = process.env.PORT || serverConfig.port;

  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors({ origin: [serverConfig.origin] });
    logger.log(`Accepting from origin "${serverConfig.origin}"`);
  }

  await app.listen(port);

  logger.verbose(`Application listening on port ${port}`);
}
bootstrap();
