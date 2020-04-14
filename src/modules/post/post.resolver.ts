import { Args, Mutation, Parent, Query, ResolveField, Resolver, Info } from '@nestjs/graphql';
import { UseGuards, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import {
  Post,
  PostArgs,
  User,
  Role,
  PostUpdateInput,
  PostWhereUniqueInput,
  PostCreateWithoutAuthorInput,
} from '../../graphql.schema.generated';
import { GetUser } from '../../shared/decorators/decorators';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';
import { PostInputDto } from './post-input.dto';
import { RolesGuard } from '../auth/roles.guard';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * POST PROPERTIES RESOLVER
   */
  @ResolveField()
  async commentsConnection(@Parent() { id }: Post, @Info() info) {
    const { count: totalCount } = await this.prisma.client.commentsConnection({ where: { post: { id } } }).aggregate();
    const data = await this.prisma.query.commentsConnection({ where: { post: { id } } }, info);
    return { ...data, totalCount };
  }

  @ResolveField()
  comments(@Parent() { id }: Post, @Info() info) {
    return this.prisma.query.comments({ where: { post: { id } } }, info);
  }

  /**
   * POST QUERIES RESOLVER
   */
  @Query()
  async post(@Args() args: PostArgs, @Info() info) {
    const post = await this.prisma.query.post({ where: { id: args.where.id } }, info);
    if (!post) {
      throw new NotFoundException(`Post with id "${args.where.id}" not found`);
    }
    return post;
  }

  @Query()
  posts(@Args() args: PostArgs, @Info() info) {
    return this.prisma.query.posts(args, info);
  }

  @Query()
  async postsConnection(@Args() args: PostArgs, @Info() info) {
    const { count: totalCount } = await this.prisma.client.postsConnection({ where: args.where }).aggregate();
    const data = await this.prisma.query.postsConnection(args, info);
    return { ...data, totalCount };
  }

  /**
   * POST MUTATIONS RESOLVER
   */
  @UseGuards(GqlAuthGuard, RolesGuard('EDITOR'))
  @Mutation()
  createPost(@Args('data') { title, body, published }: PostInputDto, @GetUser() user: User, @Info() info) {
    return this.prisma.mutation.createPost(
      {
        data: {
          title,
          body,
          published,
          author: { connect: { id: user.id } },
        },
      },
      info,
    );
  }

  @Mutation()
  @UseGuards(GqlAuthGuard, RolesGuard('EDITOR'))
  async updatePost(
    @Args('data') data: PostUpdateInput,
    @Args('where') { id }: PostWhereUniqueInput,
    @GetUser() user: User,
    @Info() info,
  ) {
    let query = {};
    if (user.role !== Role.ADMIN) {
      query = { author: { id: user.id } };
    }
    const found = await this.prisma.query.posts({ where: { id, ...query } }, info);
    if (found && found[0]) {
      return this.prisma.mutation.updatePost(
        {
          data: {
            title: data.title || found[0].title,
            body: data.body || found[0].body,
            published: data.hasOwnProperty('published') ? data.published : found[0].published,
          },
          where: { id },
        },
        info,
      );
    } else {
      throw new Error(`Post with id "${id}" not found for user`);
    }
  }

  @Mutation()
  @UseGuards(GqlAuthGuard, RolesGuard('EDITOR'))
  async deletePost(@Args('where') { id }: PostWhereUniqueInput, @GetUser() user: User) {
    let query = {};
    if (user.role !== Role.ADMIN) {
      query = { author: { id: user.id } };
    }
    const found = await this.prisma.exists.Post({ id, ...query });
    if (!found) {
      throw new Error(`Post with id "${id}" not found for user`);
    }
    let result;
    try {
      result = await this.prisma.mutation.deletePost({ where: { id } });
    } catch (e) {
      if (e.result && e.result.data && !e.result.data.deletePost) {
        throw new NotFoundException('Post not found');
      }
      throw new Error(e);
    }
    return result;
  }
}
