
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum CommentOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    text_ASC = "text_ASC",
    text_DESC = "text_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum PostOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    title_ASC = "title_ASC",
    title_DESC = "title_DESC",
    body_ASC = "body_ASC",
    body_DESC = "body_DESC",
    published_ASC = "published_ASC",
    published_DESC = "published_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export enum Role {
    ADMIN = "ADMIN",
    EDITOR = "EDITOR",
    USER = "USER",
    GUEST = "GUEST"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC",
    password_ASC = "password_ASC",
    password_DESC = "password_DESC",
    role_ASC = "role_ASC",
    role_DESC = "role_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export class CommentArgs {
    where?: CommentWhereInput;
    orderBy?: CommentOrderByInput;
    skip?: number;
    after?: string;
    before?: string;
    first?: number;
    last?: number;
}

export class CommentCreateInput {
    id?: string;
    text: string;
    author: UserCreateOneWithoutCommentsInput;
    post: PostCreateOneWithoutCommentsInput;
    updatedAt?: DateTime;
    createdAt?: DateTime;
}

export class CommentCreateManyWithoutAuthorInput {
    create?: CommentCreateWithoutAuthorInput[];
    connect?: CommentWhereUniqueInput[];
}

export class CommentCreateManyWithoutPostInput {
    create?: CommentCreateWithoutPostInput[];
    connect?: CommentWhereUniqueInput[];
}

export class CommentCreateWithoutAuthorInput {
    id?: string;
    text: string;
    post: PostCreateOneWithoutCommentsInput;
}

export class CommentCreateWithoutPostInput {
    id?: string;
    text: string;
    author: UserCreateOneWithoutCommentsInput;
}

export class CommentScalarWhereInput {
    AND?: CommentScalarWhereInput[];
    OR?: CommentScalarWhereInput[];
    NOT?: CommentScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    text?: string;
    text_not?: string;
    text_in?: string[];
    text_not_in?: string[];
    text_lt?: string;
    text_lte?: string;
    text_gt?: string;
    text_gte?: string;
    text_contains?: string;
    text_not_contains?: string;
    text_starts_with?: string;
    text_not_starts_with?: string;
    text_ends_with?: string;
    text_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
}

export class CommentSubscriptionWhereInput {
    AND?: CommentSubscriptionWhereInput[];
    OR?: CommentSubscriptionWhereInput[];
    NOT?: CommentSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: CommentWhereInput;
}

export class CommentUpdateInput {
    text?: string;
    author?: UserUpdateOneRequiredWithoutCommentsInput;
    post?: PostUpdateOneRequiredWithoutCommentsInput;
}

export class CommentUpdateManyDataInput {
    text?: string;
}

export class CommentUpdateManyMutationInput {
    text?: string;
}

export class CommentUpdateManyWithoutAuthorInput {
    create?: CommentCreateWithoutAuthorInput[];
    connect?: CommentWhereUniqueInput[];
    set?: CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput[];
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: CommentUpdateManyWithWhereNestedInput[];
    deleteMany?: CommentScalarWhereInput[];
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput[];
}

export class CommentUpdateManyWithoutPostInput {
    create?: CommentCreateWithoutPostInput[];
    connect?: CommentWhereUniqueInput[];
    set?: CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput[];
    update?: CommentUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: CommentUpdateManyWithWhereNestedInput[];
    deleteMany?: CommentScalarWhereInput[];
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[];
}

export class CommentUpdateManyWithWhereNestedInput {
    where: CommentScalarWhereInput;
    data: CommentUpdateManyDataInput;
}

export class CommentUpdateWithoutAuthorDataInput {
    text?: string;
    post?: PostUpdateOneRequiredWithoutCommentsInput;
}

export class CommentUpdateWithoutPostDataInput {
    text?: string;
    author?: UserUpdateOneRequiredWithoutCommentsInput;
}

export class CommentUpdateWithWhereUniqueWithoutAuthorInput {
    where: CommentWhereUniqueInput;
    data: CommentUpdateWithoutAuthorDataInput;
}

export class CommentUpdateWithWhereUniqueWithoutPostInput {
    where: CommentWhereUniqueInput;
    data: CommentUpdateWithoutPostDataInput;
}

export class CommentUpsertWithWhereUniqueWithoutAuthorInput {
    where: CommentWhereUniqueInput;
    update: CommentUpdateWithoutAuthorDataInput;
    create: CommentCreateWithoutAuthorInput;
}

export class CommentUpsertWithWhereUniqueWithoutPostInput {
    where: CommentWhereUniqueInput;
    update: CommentUpdateWithoutPostDataInput;
    create: CommentCreateWithoutPostInput;
}

export class CommentWhereInput {
    AND?: CommentWhereInput[];
    OR?: CommentWhereInput[];
    NOT?: CommentWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    text?: string;
    text_not?: string;
    text_in?: string[];
    text_not_in?: string[];
    text_lt?: string;
    text_lte?: string;
    text_gt?: string;
    text_gte?: string;
    text_contains?: string;
    text_not_contains?: string;
    text_starts_with?: string;
    text_not_starts_with?: string;
    text_ends_with?: string;
    text_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    author?: UserWhereInput;
    post?: PostWhereInput;
}

export class CommentWhereUniqueInput {
    id?: string;
}

export class LoginInput {
    email: string;
    password: string;
}

export class PostArgs {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: number;
    after?: string;
    before?: string;
    first?: number;
    last?: number;
}

export class PostCreateInput {
    id?: string;
    title: string;
    body: string;
    published: boolean;
    author: UserCreateOneWithoutPostsInput;
    comments?: CommentCreateManyWithoutPostInput;
}

export class PostCreateManyWithoutAuthorInput {
    create?: PostCreateWithoutAuthorInput[];
    connect?: PostWhereUniqueInput[];
}

export class PostCreateOneWithoutCommentsInput {
    create?: PostCreateWithoutCommentsInput;
    connect?: PostWhereUniqueInput;
}

export class PostCreateWithoutAuthorInput {
    id?: string;
    title: string;
    body: string;
    published: boolean;
    comments?: CommentCreateManyWithoutPostInput;
}

export class PostCreateWithoutCommentsInput {
    id?: string;
    title: string;
    body: string;
    published: boolean;
    author: UserCreateOneWithoutPostsInput;
}

export class PostScalarWhereInput {
    AND?: PostScalarWhereInput[];
    OR?: PostScalarWhereInput[];
    NOT?: PostScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    title?: string;
    title_not?: string;
    title_in?: string[];
    title_not_in?: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    body?: string;
    body_not?: string;
    body_in?: string[];
    body_not_in?: string[];
    body_lt?: string;
    body_lte?: string;
    body_gt?: string;
    body_gte?: string;
    body_contains?: string;
    body_not_contains?: string;
    body_starts_with?: string;
    body_not_starts_with?: string;
    body_ends_with?: string;
    body_not_ends_with?: string;
    published?: boolean;
    published_not?: boolean;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
}

export class PostSubscriptionWhereInput {
    AND?: PostSubscriptionWhereInput[];
    OR?: PostSubscriptionWhereInput[];
    NOT?: PostSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: PostWhereInput;
}

export class PostUpdateInput {
    title?: string;
    body?: string;
    published?: boolean;
    author?: UserUpdateOneRequiredWithoutPostsInput;
    comments?: CommentUpdateManyWithoutPostInput;
}

export class PostUpdateManyDataInput {
    title?: string;
    body?: string;
    published?: boolean;
}

export class PostUpdateManyMutationInput {
    title?: string;
    body?: string;
    published?: boolean;
}

export class PostUpdateManyWithoutAuthorInput {
    create?: PostCreateWithoutAuthorInput[];
    connect?: PostWhereUniqueInput[];
    set?: PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput[];
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: PostUpdateManyWithWhereNestedInput[];
    deleteMany?: PostScalarWhereInput[];
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[];
}

export class PostUpdateManyWithWhereNestedInput {
    where: PostScalarWhereInput;
    data: PostUpdateManyDataInput;
}

export class PostUpdateOneRequiredWithoutCommentsInput {
    create?: PostCreateWithoutCommentsInput;
    connect?: PostWhereUniqueInput;
    update?: PostUpdateWithoutCommentsDataInput;
    upsert?: PostUpsertWithoutCommentsInput;
}

export class PostUpdateWithoutAuthorDataInput {
    title?: string;
    body?: string;
    published?: boolean;
    comments?: CommentUpdateManyWithoutPostInput;
}

export class PostUpdateWithoutCommentsDataInput {
    title?: string;
    body?: string;
    published?: boolean;
    author?: UserUpdateOneRequiredWithoutPostsInput;
}

export class PostUpdateWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput;
    data: PostUpdateWithoutAuthorDataInput;
}

export class PostUpsertWithoutCommentsInput {
    update: PostUpdateWithoutCommentsDataInput;
    create: PostCreateWithoutCommentsInput;
}

export class PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput;
    update: PostUpdateWithoutAuthorDataInput;
    create: PostCreateWithoutAuthorInput;
}

export class PostWhereInput {
    AND?: PostWhereInput[];
    OR?: PostWhereInput[];
    NOT?: PostWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    title?: string;
    title_not?: string;
    title_in?: string[];
    title_not_in?: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    body?: string;
    body_not?: string;
    body_in?: string[];
    body_not_in?: string[];
    body_lt?: string;
    body_lte?: string;
    body_gt?: string;
    body_gte?: string;
    body_contains?: string;
    body_not_contains?: string;
    body_starts_with?: string;
    body_not_starts_with?: string;
    body_ends_with?: string;
    body_not_ends_with?: string;
    published?: boolean;
    published_not?: boolean;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    author?: UserWhereInput;
    comments_every?: CommentWhereInput;
    comments_some?: CommentWhereInput;
    comments_none?: CommentWhereInput;
}

export class PostWhereUniqueInput {
    id?: string;
}

export class PostWhereUniqueWithAuthorInput {
    id: string;
    author?: UserCreateOneWithoutCommentsInput;
}

export class SignUpInput {
    email: string;
    name: string;
    password: string;
}

export class UserArgs {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: number;
    after?: string;
    before?: string;
    first?: number;
    last?: number;
}

export class UserCreateInput {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: Role;
    posts?: PostCreateManyWithoutAuthorInput;
    comments?: CommentCreateManyWithoutAuthorInput;
}

export class UserCreateOneWithoutCommentsInput {
    create?: UserCreateWithoutCommentsInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateOneWithoutPostsInput {
    create?: UserCreateWithoutPostsInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateWithoutCommentsInput {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: Role;
    posts?: PostCreateManyWithoutAuthorInput;
}

export class UserCreateWithoutPostsInput {
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: Role;
    comments?: CommentCreateManyWithoutAuthorInput;
}

export class UserDeleteWhereInput {
    id: string;
}

export class UserSubscriptionWhereInput {
    AND?: UserSubscriptionWhereInput[];
    OR?: UserSubscriptionWhereInput[];
    NOT?: UserSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: UserWhereInput;
}

export class UserUpdateInput {
    name?: string;
    email?: string;
    password?: string;
    role?: Role;
    posts?: PostUpdateManyWithoutAuthorInput;
    comments?: CommentUpdateManyWithoutAuthorInput;
}

export class UserUpdateManyMutationInput {
    name?: string;
    email?: string;
    password?: string;
    role?: Role;
}

export class UserUpdateOneRequiredWithoutCommentsInput {
    create?: UserCreateWithoutCommentsInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutCommentsDataInput;
    upsert?: UserUpsertWithoutCommentsInput;
}

export class UserUpdateOneRequiredWithoutPostsInput {
    create?: UserCreateWithoutPostsInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutPostsDataInput;
    upsert?: UserUpsertWithoutPostsInput;
}

export class UserUpdateWithoutCommentsDataInput {
    name?: string;
    email?: string;
    password?: string;
    role?: Role;
    posts?: PostUpdateManyWithoutAuthorInput;
}

export class UserUpdateWithoutPostsDataInput {
    name?: string;
    email?: string;
    password?: string;
    role?: Role;
    comments?: CommentUpdateManyWithoutAuthorInput;
}

export class UserUpsertWithoutCommentsInput {
    update: UserUpdateWithoutCommentsDataInput;
    create: UserCreateWithoutCommentsInput;
}

export class UserUpsertWithoutPostsInput {
    update: UserUpdateWithoutPostsDataInput;
    create: UserCreateWithoutPostsInput;
}

export class UserWhereInput {
    AND?: UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    email?: string;
    email_not?: string;
    email_in?: string[];
    email_not_in?: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    password?: string;
    password_not?: string;
    password_in?: string[];
    password_not_in?: string[];
    password_lt?: string;
    password_lte?: string;
    password_gt?: string;
    password_gte?: string;
    password_contains?: string;
    password_not_contains?: string;
    password_starts_with?: string;
    password_not_starts_with?: string;
    password_ends_with?: string;
    password_not_ends_with?: string;
    role?: Role;
    role_not?: Role;
    role_in?: Role[];
    role_not_in?: Role[];
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    posts_every?: PostWhereInput;
    posts_some?: PostWhereInput;
    posts_none?: PostWhereInput;
    comments_every?: CommentWhereInput;
    comments_some?: CommentWhereInput;
    comments_none?: CommentWhereInput;
}

export class UserWhereUniqueInput {
    id?: string;
    email?: string;
}

export interface Node {
    id: string;
}

export class AggregateComment {
    count: number;
}

export class AggregatePost {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export class Comment implements Node {
    id: string;
    text: string;
    author: User;
    post: Post;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class CommentConnection {
    pageInfo: PageInfo;
    edges: CommentEdge[];
    aggregate: AggregateComment;
}

export class CommentEdge {
    node: Comment;
    cursor: string;
}

export class CommentPreviousValues {
    id: string;
    text: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class CommentSubscriptionPayload {
    mutation: MutationType;
    node?: Comment;
    updatedFields?: string[];
    previousValues?: CommentPreviousValues;
}

export abstract class IMutation {
    abstract createComment(data: CommentCreateWithoutAuthorInput): Comment | Promise<Comment>;

    abstract updateComment(data: CommentUpdateWithoutAuthorDataInput, where: CommentWhereUniqueInput): Comment | Promise<Comment>;

    abstract deleteComment(where: CommentWhereUniqueInput): Comment | Promise<Comment>;

    abstract createPost(data: PostCreateWithoutAuthorInput): Post | Promise<Post>;

    abstract updatePost(data: PostUpdateInput, where: PostWhereUniqueInput): Post | Promise<Post>;

    abstract deletePost(where: PostWhereUniqueInput): Post | Promise<Post>;

    abstract signup(data?: SignUpInput): User | Promise<User>;

    abstract login(data?: LoginInput): User | Promise<User>;

    abstract createUser(data?: UserCreateInput): User | Promise<User>;

    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;

    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export class Post implements Node {
    id: string;
    title: string;
    body: string;
    published: boolean;
    author: User;
    comments?: Comment[];
    createdAt: DateTime;
    updatedAt: DateTime;
    commentsConnection: CommentConnection;
}

export class PostConnection {
    pageInfo: PageInfo;
    edges: PostEdge[];
    aggregate: AggregatePost;
}

export class PostEdge {
    node: Post;
    cursor: string;
}

export class PostPreviousValues {
    id: string;
    title: string;
    body: string;
    published: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class PostSubscriptionPayload {
    mutation: MutationType;
    node?: Post;
    updatedFields?: string[];
    previousValues?: PostPreviousValues;
}

export abstract class IQuery {
    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;

    abstract posts(where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Post[] | Promise<Post[]>;

    abstract comments(where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Comment[] | Promise<Comment[]>;

    abstract user(where: UserWhereUniqueInput): User | Promise<User>;

    abstract post(where: PostWhereUniqueInput): Post | Promise<Post>;

    abstract comment(where: CommentWhereUniqueInput): Comment | Promise<Comment>;

    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;

    abstract postsConnection(where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): PostConnection | Promise<PostConnection>;

    abstract commentsConnection(where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): CommentConnection | Promise<CommentConnection>;

    abstract node(id: string): Node | Promise<Node>;

    abstract me(): User | Promise<User>;
}

export abstract class ISubscription {
    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;

    abstract post(where?: PostSubscriptionWhereInput): PostSubscriptionPayload | Promise<PostSubscriptionPayload>;

    abstract comment(where?: CommentSubscriptionWhereInput): CommentSubscriptionPayload | Promise<CommentSubscriptionPayload>;
}

export class User implements Node {
    id: string;
    name: string;
    email: string;
    password: string;
    role: Role;
    posts?: Post[];
    comments?: Comment[];
    createdAt: DateTime;
    updatedAt: DateTime;
    postsConnection: PostConnection;
    jwt?: string;
}

export class UserBasic {
    id: string;
    name: string;
    email: string;
    role: Role;
}

export class UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserPreviousValues {
    id: string;
    name: string;
    email: string;
    password: string;
    role: Role;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields?: string[];
    previousValues?: UserPreviousValues;
}

export type DateTime = any;
export type Long = any;
