import { IsString, MaxLength, MinLength } from 'class-validator';
import { PostCreateWithoutAuthorInput } from '../../graphql.schema.generated';

export class PostInputDto extends PostCreateWithoutAuthorInput {
  @IsString()
  @MinLength(10)
  @MaxLength(60)
  readonly title: string;
}
