import { Module } from '@nestjs/common';
import { CommentResolver } from './comment.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  providers: [CommentResolver],
  imports: [PrismaModule],
})
export class CommentModule {}
