
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
    address_ASC = "address_ASC",
    address_DESC = "address_DESC",
    city_ASC = "city_ASC",
    city_DESC = "city_DESC",
    company_ASC = "company_ASC",
    company_DESC = "company_DESC",
    country_ASC = "country_ASC",
    country_DESC = "country_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC",
    firstName_ASC = "firstName_ASC",
    firstName_DESC = "firstName_DESC",
    image_ASC = "image_ASC",
    image_DESC = "image_DESC",
    lastName_ASC = "lastName_ASC",
    lastName_DESC = "lastName_DESC",
    password_ASC = "password_ASC",
    password_DESC = "password_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC",
    postalCode_ASC = "postalCode_ASC",
    postalCode_DESC = "postalCode_DESC",
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
    text: string;
    author: UserCreateOneWithoutCommentsInput;
    post: PostCreateOneWithoutCommentsInput;
    id?: number;
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
    text: string;
    post: PostCreateOneWithoutCommentsInput;
}

export class CommentCreateWithoutPostInput {
    text: string;
    author: UserCreateOneWithoutCommentsInput;
}

export class CommentScalarWhereInput {
    AND?: CommentScalarWhereInput[];
    OR?: CommentScalarWhereInput[];
    NOT?: CommentScalarWhereInput[];
    id?: number;
    id_not?: number;
    id_in?: number[];
    id_not_in?: number[];
    id_lt?: number;
    id_lte?: number;
    id_gt?: number;
    id_gte?: number;
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
    id?: number;
    id_not?: number;
    id_in?: number[];
    id_not_in?: number[];
    id_lt?: number;
    id_lte?: number;
    id_gt?: number;
    id_gte?: number;
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
    id?: number;
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
    title: string;
    body: string;
    published: boolean;
    comments?: CommentCreateManyWithoutPostInput;
}

export class PostCreateWithoutCommentsInput {
    title: string;
    body: string;
    published: boolean;
    author: UserCreateOneWithoutPostsInput;
}

export class PostScalarWhereInput {
    AND?: PostScalarWhereInput[];
    OR?: PostScalarWhereInput[];
    NOT?: PostScalarWhereInput[];
    id?: number;
    id_not?: number;
    id_in?: number[];
    id_not_in?: number[];
    id_lt?: number;
    id_lte?: number;
    id_gt?: number;
    id_gte?: number;
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
    id?: number;
    id_not?: number;
    id_in?: number[];
    id_not_in?: number[];
    id_lt?: number;
    id_lte?: number;
    id_gt?: number;
    id_gte?: number;
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
    id?: number;
}

export class PostWhereUniqueWithAuthorInput {
    id: number;
    author?: UserCreateOneWithoutCommentsInput;
}

export class SignUpInput {
    address?: string;
    city?: string;
    company?: string;
    country?: string;
    email: string;
    firstName: string;
    image?: string;
    lastName: string;
    password: string;
    postalCode?: string;
    description?: string;
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
    address?: string;
    city?: string;
    company?: string;
    country?: string;
    email: string;
    firstName: string;
    image?: string;
    lastName: string;
    password: string;
    description?: string;
    postalCode?: string;
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
    address?: string;
    city?: string;
    company?: string;
    country?: string;
    email: string;
    firstName: string;
    image?: string;
    lastName: string;
    password: string;
    description?: string;
    postalCode?: string;
    role?: Role;
    posts?: PostCreateManyWithoutAuthorInput;
}

export class UserCreateWithoutPostsInput {
    address?: string;
    city?: string;
    company?: string;
    country?: string;
    email: string;
    firstName: string;
    image?: string;
    lastName: string;
    password: string;
    description?: string;
    postalCode?: string;
    role?: Role;
    comments?: CommentCreateManyWithoutAuthorInput;
}

export class UserDeleteWhereInput {
    id: number;
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
    address?: string;
    city?: string;
    company?: string;
    country?: string;
    email?: string;
    firstName?: string;
    image?: string;
    lastName?: string;
    password?: string;
    description?: string;
    postalCode?: string;
    role?: Role;
    posts?: PostUpdateManyWithoutAuthorInput;
    comments?: CommentUpdateManyWithoutAuthorInput;
}

export class UserUpdateManyMutationInput {
    address?: string;
    city?: string;
    company?: string;
    country?: string;
    email?: string;
    firstName?: string;
    image?: string;
    lastName?: string;
    password?: string;
    description?: string;
    postalCode?: string;
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
    address?: string;
    city?: string;
    company?: string;
    country?: string;
    email?: string;
    firstName?: string;
    image?: string;
    lastName?: string;
    password?: string;
    description?: string;
    postalCode?: string;
    role?: Role;
    posts?: PostUpdateManyWithoutAuthorInput;
}

export class UserUpdateWithoutPostsDataInput {
    address?: string;
    city?: string;
    company?: string;
    country?: string;
    email?: string;
    firstName?: string;
    image?: string;
    lastName?: string;
    password?: string;
    description?: string;
    postalCode?: string;
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
    id?: number;
    id_not?: number;
    id_in?: number[];
    id_not_in?: number[];
    id_lt?: number;
    id_lte?: number;
    id_gt?: number;
    id_gte?: number;
    address?: string;
    address_not?: string;
    address_in?: string[];
    address_not_in?: string[];
    address_lt?: string;
    address_lte?: string;
    address_gt?: string;
    address_gte?: string;
    address_contains?: string;
    address_not_contains?: string;
    address_starts_with?: string;
    address_not_starts_with?: string;
    address_ends_with?: string;
    address_not_ends_with?: string;
    city?: string;
    city_not?: string;
    city_in?: string[];
    city_not_in?: string[];
    city_lt?: string;
    city_lte?: string;
    city_gt?: string;
    city_gte?: string;
    city_contains?: string;
    city_not_contains?: string;
    city_starts_with?: string;
    city_not_starts_with?: string;
    city_ends_with?: string;
    city_not_ends_with?: string;
    company?: string;
    company_not?: string;
    company_in?: string[];
    company_not_in?: string[];
    company_lt?: string;
    company_lte?: string;
    company_gt?: string;
    company_gte?: string;
    company_contains?: string;
    company_not_contains?: string;
    company_starts_with?: string;
    company_not_starts_with?: string;
    company_ends_with?: string;
    company_not_ends_with?: string;
    country?: string;
    country_not?: string;
    country_in?: string[];
    country_not_in?: string[];
    country_lt?: string;
    country_lte?: string;
    country_gt?: string;
    country_gte?: string;
    country_contains?: string;
    country_not_contains?: string;
    country_starts_with?: string;
    country_not_starts_with?: string;
    country_ends_with?: string;
    country_not_ends_with?: string;
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
    firstName?: string;
    firstName_not?: string;
    firstName_in?: string[];
    firstName_not_in?: string[];
    firstName_lt?: string;
    firstName_lte?: string;
    firstName_gt?: string;
    firstName_gte?: string;
    firstName_contains?: string;
    firstName_not_contains?: string;
    firstName_starts_with?: string;
    firstName_not_starts_with?: string;
    firstName_ends_with?: string;
    firstName_not_ends_with?: string;
    image?: string;
    image_not?: string;
    image_in?: string[];
    image_not_in?: string[];
    image_lt?: string;
    image_lte?: string;
    image_gt?: string;
    image_gte?: string;
    image_contains?: string;
    image_not_contains?: string;
    image_starts_with?: string;
    image_not_starts_with?: string;
    image_ends_with?: string;
    image_not_ends_with?: string;
    lastName?: string;
    lastName_not?: string;
    lastName_in?: string[];
    lastName_not_in?: string[];
    lastName_lt?: string;
    lastName_lte?: string;
    lastName_gt?: string;
    lastName_gte?: string;
    lastName_contains?: string;
    lastName_not_contains?: string;
    lastName_starts_with?: string;
    lastName_not_starts_with?: string;
    lastName_ends_with?: string;
    lastName_not_ends_with?: string;
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
    description?: string;
    description_not?: string;
    description_in?: string[];
    description_not_in?: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
    postalCode?: string;
    postalCode_not?: string;
    postalCode_in?: string[];
    postalCode_not_in?: string[];
    postalCode_lt?: string;
    postalCode_lte?: string;
    postalCode_gt?: string;
    postalCode_gte?: string;
    postalCode_contains?: string;
    postalCode_not_contains?: string;
    postalCode_starts_with?: string;
    postalCode_not_starts_with?: string;
    postalCode_ends_with?: string;
    postalCode_not_ends_with?: string;
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
    id?: number;
    email?: string;
}

export interface Node {
    id: number;
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
    id: number;
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
    totalCount?: number;
}

export class CommentEdge {
    node: Comment;
    cursor: string;
}

export class CommentPreviousValues {
    id: number;
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
    id: number;
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
    totalCount?: number;
}

export class PostEdge {
    node: Post;
    cursor: string;
}

export class PostPreviousValues {
    id: number;
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

export class User {
    id: number;
    address?: string;
    city?: string;
    company?: string;
    country?: string;
    email: string;
    firstName: string;
    image?: string;
    lastName: string;
    password: string;
    description?: string;
    postalCode?: string;
    role: Role;
    posts?: Post[];
    comments?: Comment[];
    createdAt: DateTime;
    updatedAt: DateTime;
    postsConnection: PostConnection;
    commentsConnection: CommentConnection;
    jwt?: string;
}

export class UserBasic {
    id: number;
    address?: string;
    city?: string;
    company?: string;
    country?: string;
    email: string;
    firstName: string;
    image?: string;
    lastName: string;
    password: string;
    postalCode?: string;
    description?: string;
    role: Role;
}

export class UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
    aggregate: AggregateUser;
    totalCount?: number;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserPreviousValues {
    id: number;
    address?: string;
    city?: string;
    company?: string;
    country?: string;
    email: string;
    firstName: string;
    image?: string;
    lastName: string;
    password: string;
    description?: string;
    postalCode?: string;
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
