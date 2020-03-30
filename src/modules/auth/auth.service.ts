import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UserBasic, Role } from '../../graphql.schema.generated';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validate({ id }): Promise<UserBasic> {
    const user = await this.prisma.query.user({ where: { id } });
    if (!user) {
      throw Error('Unauthorized');
    }
    return { ...user, role: Role[user.role] };
  }
}
