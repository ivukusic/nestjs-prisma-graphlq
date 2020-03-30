import { IsString, MaxLength, MinLength } from 'class-validator';
import { PostCreateInput } from '../../graphql.schema.generated';

export class PostInputDto extends PostCreateInput {
  @IsString()
  @MinLength(10)
  @MaxLength(60)
  readonly title: string;
}
