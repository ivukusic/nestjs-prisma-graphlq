import * as bcryptjs from 'bcryptjs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput, Role } from '../../graphql.schema.generated';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import { SignUpInputDto } from './sign-up-input.dto';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly jwt: JwtService, private readonly prisma: PrismaService) {}

  @Mutation()
  async login(@Args('data') { email, password }: LoginInput) {
    const user = await this.prisma.query.user({ where: { email } });
    if (!user) {
      throw Error('Email or password incorrect');
    }
    const valid = await bcryptjs.compare(password, user.password);
    if (!valid) {
      throw Error('Email or password incorrect');
    }
    const jwt = this.jwt.sign({ id: user.id });
    return { ...user, jwt };
  }

  @Mutation()
  async signup(@Args('data') user: SignUpInputDto) {
    const emailExists = await this.prisma.exists.User({ email: user.email });
    if (emailExists) {
      throw Error('Email is already in use');
    }
    const hashedPassword = await bcryptjs.hash(user.password, 10);
    const newUser = await this.prisma.mutation.createUser({
      data: { ...user, password: hashedPassword, role: Role.USER },
    });
    const jwt = this.jwt.sign({ id: newUser.id });
    return { ...newUser, jwt };
  }
}
