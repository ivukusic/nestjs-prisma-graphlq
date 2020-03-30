import * as bcryptjs from 'bcryptjs';
import { UseGuards, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Parent, ResolveField, Resolver, Mutation, Args, Query, Info } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '../../prisma/prisma.service';
import {
  User,
  UserUpdateInput,
  UserDeleteWhereInput,
  UserWhereUniqueInput,
  UserArgs,
  Role,
  UserCreateInput,
} from '../../graphql.schema.generated';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';
import { GetUser, ResGql } from '../../shared/decorators/decorators';
import { RolesGuard } from '../auth/roles.guard';

@Resolver('User')
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * USER PROPERTIES RESOLVER
   */
  @ResolveField()
  async posts(@Parent() { id }: User, @Info() info) {
    return this.prisma.query.posts({ where: { author: { id } } }, info);
  }

  @ResolveField()
  async postsConnection(@Parent() { id }, @Info() info) {
    return await this.prisma.query.postsConnection({ where: { author: { id } } }, info);
  }

  /**
   * USER QUERIES RESOLVER
   */
  @Query()
  me(@GetUser() user: User, @Info() info) {
    return this.prisma.query.user({ where: { id: user.id } }, info);
  }

  @Query()
  @UseGuards(GqlAuthGuard, RolesGuard('USER'))
  async user(@Args() args: UserArgs, @Info() info, @GetUser() user: User) {
    if (user.role !== Role.ADMIN && user.id !== args.where.id) {
      throw new UnauthorizedException('Forbidden');
    }
    const found = await this.prisma.query.user({ where: { id: args.where.id } }, info);
    if (!found) {
      throw new NotFoundException(`User with id "${args.where.id}" not found`);
    }
    return found;
  }

  @Query()
  @UseGuards(GqlAuthGuard, RolesGuard('ADMIN'))
  users(@Args() args: UserArgs, @Info() info) {
    return this.prisma.query.users(args, info);
  }

  @Query()
  @UseGuards(GqlAuthGuard, RolesGuard('ADMIN'))
  usersConnection(@Args() args: UserArgs, @Info() info) {
    return this.prisma.query.usersConnection(args, info);
  }

  /**
   * USER MUTATIONS RESOLVER
   */
  @UseGuards(GqlAuthGuard, RolesGuard('ADMIN'))
  @Mutation()
  async createUser(@Args('data') { email, name, password, role }: UserCreateInput) {
    const emailExists = await this.prisma.exists.User({ email });
    if (emailExists) {
      throw Error('Email is already in use');
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = await this.prisma.mutation.createUser({
      data: { email, name, password: hashedPassword, role: role || Role.USER },
    });
    return user;
  }

  @Mutation()
  @UseGuards(GqlAuthGuard, RolesGuard('USER'))
  async updateUser(
    @Args('data') { name }: UserUpdateInput,
    @Args('where') { id }: UserWhereUniqueInput,
    @GetUser() user: User,
    @Info() info: any,
  ) {
    if (user.role !== Role.ADMIN && user.id !== id) {
      throw new UnauthorizedException('Forbidden');
    }
    const found = await this.prisma.query.user({ where: { id } }, info);
    if (found) {
      return this.prisma.mutation.updateUser(
        {
          data: {
            email: found.email,
            name: name || found.name,
            password: found.password,
          },
          where: { id },
        },
        info,
      );
    }
    throw new NotFoundException('User not found');
  }

  @Mutation()
  @UseGuards(GqlAuthGuard, RolesGuard('USER'))
  async deleteUser(@Args('where') { id }: UserDeleteWhereInput, @GetUser() user: User) {
    let query = {};
    if (user.role !== Role.ADMIN) {
      query = { author: { id: user.id } };
    }
    const found = await this.prisma.exists.User({ id, ...query });
    if (!found) {
      throw new Error(`User with id "${id}" not found`);
    }
    let result;
    try {
      result = await this.prisma.mutation.deleteUser({ where: { id } });
    } catch (e) {
      if (e.result && e.result.data && !e.result.data.deleteUser) {
        throw new NotFoundException('User not found');
      }
      throw new Error(e);
    }
    return result;
  }
}
