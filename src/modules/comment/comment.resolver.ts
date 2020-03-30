import { Args, Query, Resolver, Mutation, Info } from '@nestjs/graphql';
import { UseGuards, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';
import { CommentInputDto } from './comment-input.dto';
import { GetUser } from 'src/shared/decorators/decorators';
import { CommentArgs, User, CommentUpdateInput, CommentWhereUniqueInput, Role } from '../../graphql.schema.generated';
import { RolesGuard } from '../auth/roles.guard';

@Resolver('Comment')
@UseGuards(GqlAuthGuard, RolesGuard('GUEST'))
export class CommentResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query()
  async comment(@Args() args: CommentArgs, @Info() info) {
    const comment = await this.prisma.query.comment({ where: { id: args.where.id } }, info);
    if (!comment) {
      throw new NotFoundException(`Comment with id "${args.where.id}" not found`);
    }
    return comment;
  }

  @Query()
  comments(@Args() args: CommentArgs, @Info() info) {
    return this.prisma.query.comments(args, info);
  }

  @Query()
  commentsConnection(@Args() args: CommentArgs, @Info() info) {
    return this.prisma.query.commentsConnection(args, info);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard, RolesGuard('USER'))
  async createComment(@Args('data') { text, post }: CommentInputDto, @GetUser() user: User, @Info() info) {
    const postFound = await this.prisma.query.post({ where: { id: post.connect.id } });
    if (!postFound) {
      throw new Error(`Post with id "${post.connect.id}" not found`);
    }
    return this.prisma.mutation.createComment(
      {
        data: {
          text,
          post: { connect: { id: postFound.id } },
          author: { connect: { id: user.id } },
        },
      },
      info,
    );
  }

  @Mutation()
  @UseGuards(GqlAuthGuard, RolesGuard('USER'))
  async updateComment(
    @Args('data') { text }: CommentUpdateInput,
    @Args('where') { id }: CommentWhereUniqueInput,
    @GetUser() user: User,
    @Info() info,
  ) {
    let query = {};
    if (user.role !== Role.ADMIN) {
      query = { author: { id: user.id } };
    }
    const found = await this.prisma.query.comments({ where: { id, ...query } }, info);
    if (found && found[0]) {
      return this.prisma.mutation.updateComment(
        {
          data: { text: text || found[0].text },
          where: { id },
        },
        info,
      );
    }
    throw new Error(`Comment with id "${id}" not found for user`);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard, RolesGuard('USER'))
  async deleteComment(@Args('where') { id }: CommentWhereUniqueInput, @GetUser() user: User) {
    let query = {};
    if (user.role !== Role.ADMIN) {
      query = { author: { id: user.id } };
    }
    const found = await this.prisma.exists.Comment({ id, ...query });
    if (!found) {
      throw new Error(`Comment with id "${id}" not found for user`);
    }
    let result;
    try {
      result = await this.prisma.mutation.deleteComment({ where: { id } });
    } catch (e) {
      if (e.result && e.result.data && !e.result.data.deleteComment) {
        throw new NotFoundException('Comment not found');
      }
      throw new Error(e);
    }
    return result;
  }
}
