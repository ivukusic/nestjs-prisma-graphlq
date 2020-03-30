import { createParamDecorator } from '@nestjs/common';
import { Response } from 'express';
import { User } from '../../../prisma/generated/prisma-client';

export const ResGql = createParamDecorator((_: unknown, ctx: any): Response => ctx.args[2].res);

export const GetUser = createParamDecorator((_: unknown, ctx: any): User => ctx.args[2].req.user);
