// Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateComment {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Comment {
  id: Int!
  text: String!
  author: User!
  post: Post!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  id: Int
  text: String!
  author: UserCreateOneWithoutCommentsInput!
  post: PostCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutAuthorInput {
  id: Int
  text: String!
  post: PostCreateOneWithoutCommentsInput!
}

input CommentCreateWithoutPostInput {
  id: Int
  text: String!
  author: UserCreateOneWithoutCommentsInput!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommentPreviousValues {
  id: Int!
  text: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CommentScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  text: String
  author: UserUpdateOneRequiredWithoutCommentsInput
  post: PostUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateManyDataInput {
  text: String
}

input CommentUpdateManyMutationInput {
  text: String
}

input CommentUpdateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutPostInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateWithoutAuthorDataInput {
  text: String
  post: PostUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateWithoutPostDataInput {
  text: String
  author: UserUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutAuthorDataInput!
}

input CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutPostDataInput!
}

input CommentUpsertWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutAuthorDataInput!
  create: CommentCreateWithoutAuthorInput!
}

input CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutPostDataInput!
  create: CommentCreateWithoutPostInput!
}

input CommentWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  author: UserWhereInput
  post: PostWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: Int
}

scalar DateTime

scalar Long

type Mutation {
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: Int!
  title: String!
  body: String!
  published: Boolean!
  author: User!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: Int
  title: String!
  body: String!
  published: Boolean!
  author: UserCreateOneWithoutPostsInput!
  comments: CommentCreateManyWithoutPostInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutAuthorInput {
  id: Int
  title: String!
  body: String!
  published: Boolean!
  comments: CommentCreateManyWithoutPostInput
}

input PostCreateWithoutCommentsInput {
  id: Int
  title: String!
  body: String!
  published: Boolean!
  author: UserCreateOneWithoutPostsInput!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  body_ASC
  body_DESC
  published_ASC
  published_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: Int!
  title: String!
  body: String!
  published: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input PostScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  published: Boolean
  published_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  body: String
  published: Boolean
  author: UserUpdateOneRequiredWithoutPostsInput
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateManyDataInput {
  title: String
  body: String
  published: Boolean
}

input PostUpdateManyMutationInput {
  title: String
  body: String
  published: Boolean
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneRequiredWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  update: PostUpdateWithoutCommentsDataInput
  upsert: PostUpsertWithoutCommentsInput
  connect: PostWhereUniqueInput
}

input PostUpdateWithoutAuthorDataInput {
  title: String
  body: String
  published: Boolean
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateWithoutCommentsDataInput {
  title: String
  body: String
  published: Boolean
  author: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput!
  create: PostCreateWithoutCommentsInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  published: Boolean
  published_not: Boolean
  author: UserWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: Int
}

type Query {
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Role {
  ADMIN
  EDITOR
  USER
  GUEST
}

type Subscription {
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: Int!
  address: String
  city: String
  company: String
  country: String
  email: String!
  firstName: String!
  image: String
  lastName: String!
  password: String!
  description: String
  postalCode: String
  role: Role!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  address: String
  city: String
  company: String
  country: String
  email: String!
  firstName: String!
  image: String
  lastName: String!
  password: String!
  description: String
  postalCode: String
  role: Role
  posts: PostCreateManyWithoutAuthorInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCommentsInput {
  address: String
  city: String
  company: String
  country: String
  email: String!
  firstName: String!
  image: String
  lastName: String!
  password: String!
  description: String
  postalCode: String
  role: Role
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateWithoutPostsInput {
  address: String
  city: String
  company: String
  country: String
  email: String!
  firstName: String!
  image: String
  lastName: String!
  password: String!
  description: String
  postalCode: String
  role: Role
  comments: CommentCreateManyWithoutAuthorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  address_ASC
  address_DESC
  city_ASC
  city_DESC
  company_ASC
  company_DESC
  country_ASC
  country_DESC
  email_ASC
  email_DESC
  firstName_ASC
  firstName_DESC
  image_ASC
  image_DESC
  lastName_ASC
  lastName_DESC
  password_ASC
  password_DESC
  description_ASC
  description_DESC
  postalCode_ASC
  postalCode_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: Int!
  address: String
  city: String
  company: String
  country: String
  email: String!
  firstName: String!
  image: String
  lastName: String!
  password: String!
  description: String
  postalCode: String
  role: Role!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  address: String
  city: String
  company: String
  country: String
  email: String
  firstName: String
  image: String
  lastName: String
  password: String
  description: String
  postalCode: String
  role: Role
  posts: PostUpdateManyWithoutAuthorInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  address: String
  city: String
  company: String
  country: String
  email: String
  firstName: String
  image: String
  lastName: String
  password: String
  description: String
  postalCode: String
  role: Role
}

input UserUpdateOneRequiredWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  update: UserUpdateWithoutCommentsDataInput
  upsert: UserUpsertWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCommentsDataInput {
  address: String
  city: String
  company: String
  country: String
  email: String
  firstName: String
  image: String
  lastName: String
  password: String
  description: String
  postalCode: String
  role: Role
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutPostsDataInput {
  address: String
  city: String
  company: String
  country: String
  email: String
  firstName: String
  image: String
  lastName: String
  password: String
  description: String
  postalCode: String
  role: Role
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput!
  create: UserCreateWithoutCommentsInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  company: String
  company_not: String
  company_in: [String!]
  company_not_in: [String!]
  company_lt: String
  company_lte: String
  company_gt: String
  company_gte: String
  company_contains: String
  company_not_contains: String
  company_starts_with: String
  company_not_starts_with: String
  company_ends_with: String
  company_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  postalCode: String
  postalCode_not: String
  postalCode_in: [String!]
  postalCode_not_in: [String!]
  postalCode_lt: String
  postalCode_lte: String
  postalCode_gt: String
  postalCode_gte: String
  postalCode_contains: String
  postalCode_not_contains: String
  postalCode_starts_with: String
  postalCode_not_starts_with: String
  postalCode_ends_with: String
  postalCode_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: Int
  email: String
}
`