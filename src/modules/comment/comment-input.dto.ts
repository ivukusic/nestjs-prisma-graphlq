import { IsString, MaxLength } from 'class-validator';
import { CommentCreateWithoutAuthorInput } from '../../graphql.schema.generated';

export class CommentInputDto extends CommentCreateWithoutAuthorInput {
  @IsString()
  @MaxLength(200)
  readonly text: string;
}
