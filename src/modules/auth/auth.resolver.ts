import * as bcryptjs from 'bcryptjs';
import { Response } from 'express';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput, Role } from '../../graphql.schema.generated';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import { SignUpInputDto } from './sign-up-input.dto';
import { ResGql } from '../../shared/decorators/decorators';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly jwt: JwtService, private readonly prisma: PrismaService) {}

  @Mutation()
  async login(@Args('data') { email, password }: LoginInput, @ResGql() res: Response) {
    const user = await this.prisma.query.user({ where: { email } });
    if (!user) {
      throw Error('Email or password incorrect');
    }
    const valid = await bcryptjs.compare(password, user.password);
    if (!valid) {
      throw Error('Email or password incorrect');
    }
    const jwt = this.jwt.sign({ id: user.id });
    res.cookie('token', jwt, { httpOnly: true });
    return { ...user, jwt };
  }

  @Mutation()
  async signup(@Args('data') { email, name, password }: SignUpInputDto, @ResGql() res: Response) {
    const emailExists = await this.prisma.exists.User({ email });
    if (emailExists) {
      throw Error('Email is already in use');
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = await this.prisma.mutation.createUser({
      data: { email, name, password: hashedPassword, role: Role.USER },
    });
    const jwt = this.jwt.sign({ id: user.id });
    res.cookie('token', jwt, { httpOnly: true });
    return { ...user, jwt };
  }
}
