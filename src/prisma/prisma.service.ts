import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';
import { Prisma as PrismaClient } from '../../prisma/generated/prisma-client/index';

@Injectable()
export class PrismaService extends Prisma {
  client: PrismaClient;

  constructor() {
    super({
      endpoint: 'http://localhost:4466/',
      debug: false,
    });
    this.client = new PrismaClient();
  }
}
