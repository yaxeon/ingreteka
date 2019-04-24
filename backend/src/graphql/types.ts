export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type AuthLoginInput = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type AuthMutation = {
  login?: Maybe<Scalars["Boolean"]>;
  logout?: Maybe<Scalars["Boolean"]>;
};

export type AuthMutationLoginArgs = {
  input: AuthLoginInput;
};

export type AuthQuery = {
  profile?: Maybe<User>;
};

export type Brand = {
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  image: Scalars["String"];
};

export type BrandDeleteInput = {
  id: Scalars["ID"];
};

export type BrandMutation = {
  upsert?: Maybe<Brand>;
  delete?: Maybe<Scalars["Boolean"]>;
};

export type BrandMutationUpsertArgs = {
  input: BrandUpsertInput;
};

export type BrandMutationDeleteArgs = {
  input: BrandDeleteInput;
};

export type BrandQuery = {
  list: Array<Brand>;
};

export type BrandUpsertInput = {
  id?: Maybe<Scalars["ID"]>;
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  image: Scalars["String"];
};

export type Category = {
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  slug: Scalars["String"];
  sort: Scalars["Int"];
  image: Scalars["String"];
};

export type CategoryDeleteInput = {
  id: Scalars["ID"];
};

export type CategoryMutation = {
  upsert?: Maybe<Category>;
  delete?: Maybe<Scalars["Boolean"]>;
};

export type CategoryMutationUpsertArgs = {
  input: CategoryUpsertInput;
};

export type CategoryMutationDeleteArgs = {
  input: CategoryDeleteInput;
};

export type CategoryQuery = {
  list: Array<Category>;
};

export type CategoryUpsertInput = {
  id?: Maybe<Scalars["ID"]>;
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  slug: Scalars["String"];
  sort?: Maybe<Scalars["Int"]>;
  image: Scalars["String"];
};

export type File = {
  uri: Scalars["String"];
};

export type FileMutation = {
  upload?: Maybe<File>;
};

export type FileMutationUploadArgs = {
  file: Scalars["Upload"];
};

export type Mutation = {
  auth: AuthMutation;
  category: CategoryMutation;
  shop: ShopMutation;
  brand: BrandMutation;
  file: FileMutation;
};

export type Query = {
  auth: AuthQuery;
  category: CategoryQuery;
  shop: ShopQuery;
  brand: BrandQuery;
};

export type Shop = {
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  image: Scalars["String"];
};

export type ShopDeleteInput = {
  id: Scalars["ID"];
};

export type ShopMutation = {
  upsert?: Maybe<Shop>;
  delete?: Maybe<Scalars["Boolean"]>;
};

export type ShopMutationUpsertArgs = {
  input: ShopUpsertInput;
};

export type ShopMutationDeleteArgs = {
  input: ShopDeleteInput;
};

export type ShopQuery = {
  list: Array<Shop>;
};

export type ShopUpsertInput = {
  id?: Maybe<Scalars["ID"]>;
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  image: Scalars["String"];
};

export type User = {
  email: Scalars["String"];
  username?: Maybe<Scalars["String"]>;
  roles: Array<Maybe<UserRole>>;
};

export enum UserRole {
  Admin = "ADMIN",
  User = "USER"
}
import { ContextGraphql } from "./context";

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: {};
  AuthQuery: AuthQuery;
  User: User;
  String: Scalars["String"];
  UserRole: UserRole;
  CategoryQuery: CategoryQuery;
  Category: Category;
  ID: Scalars["ID"];
  Int: Scalars["Int"];
  ShopQuery: ShopQuery;
  Shop: Shop;
  BrandQuery: BrandQuery;
  Brand: Brand;
  Mutation: {};
  AuthMutation: AuthMutation;
  AuthLoginInput: AuthLoginInput;
  Boolean: Scalars["Boolean"];
  CategoryMutation: CategoryMutation;
  CategoryUpsertInput: CategoryUpsertInput;
  CategoryDeleteInput: CategoryDeleteInput;
  ShopMutation: ShopMutation;
  ShopUpsertInput: ShopUpsertInput;
  ShopDeleteInput: ShopDeleteInput;
  BrandMutation: BrandMutation;
  BrandUpsertInput: BrandUpsertInput;
  BrandDeleteInput: BrandDeleteInput;
  FileMutation: FileMutation;
  Upload: Scalars["Upload"];
  File: File;
};

export type AuthDirectiveResolver<
  Result,
  Parent,
  ContextType = ContextGraphql,
  Args = { roles?: Maybe<Array<Scalars["String"]>> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthMutationResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["AuthMutation"]
> = {
  login?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    AuthMutationLoginArgs
  >;
  logout?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
};

export type AuthQueryResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["AuthQuery"]
> = {
  profile?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type BrandResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["Brand"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type BrandMutationResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["BrandMutation"]
> = {
  upsert?: Resolver<
    Maybe<ResolversTypes["Brand"]>,
    ParentType,
    ContextType,
    BrandMutationUpsertArgs
  >;
  delete?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    BrandMutationDeleteArgs
  >;
};

export type BrandQueryResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["BrandQuery"]
> = {
  list?: Resolver<Array<ResolversTypes["Brand"]>, ParentType, ContextType>;
};

export type CategoryResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["Category"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sort?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type CategoryMutationResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["CategoryMutation"]
> = {
  upsert?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    CategoryMutationUpsertArgs
  >;
  delete?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    CategoryMutationDeleteArgs
  >;
};

export type CategoryQueryResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["CategoryQuery"]
> = {
  list?: Resolver<Array<ResolversTypes["Category"]>, ParentType, ContextType>;
};

export type FileResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["File"]
> = {
  uri?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type FileMutationResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["FileMutation"]
> = {
  upload?: Resolver<
    Maybe<ResolversTypes["File"]>,
    ParentType,
    ContextType,
    FileMutationUploadArgs
  >;
};

export type MutationResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["Mutation"]
> = {
  auth?: Resolver<ResolversTypes["AuthMutation"], ParentType, ContextType>;
  category?: Resolver<
    ResolversTypes["CategoryMutation"],
    ParentType,
    ContextType
  >;
  shop?: Resolver<ResolversTypes["ShopMutation"], ParentType, ContextType>;
  brand?: Resolver<ResolversTypes["BrandMutation"], ParentType, ContextType>;
  file?: Resolver<ResolversTypes["FileMutation"], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["Query"]
> = {
  auth?: Resolver<ResolversTypes["AuthQuery"], ParentType, ContextType>;
  category?: Resolver<ResolversTypes["CategoryQuery"], ParentType, ContextType>;
  shop?: Resolver<ResolversTypes["ShopQuery"], ParentType, ContextType>;
  brand?: Resolver<ResolversTypes["BrandQuery"], ParentType, ContextType>;
};

export type ShopResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["Shop"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  link?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type ShopMutationResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["ShopMutation"]
> = {
  upsert?: Resolver<
    Maybe<ResolversTypes["Shop"]>,
    ParentType,
    ContextType,
    ShopMutationUpsertArgs
  >;
  delete?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    ShopMutationDeleteArgs
  >;
};

export type ShopQueryResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["ShopQuery"]
> = {
  list?: Resolver<Array<ResolversTypes["Shop"]>, ParentType, ContextType>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Upload"], any> {
  name: "Upload";
}

export type UserResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["User"]
> = {
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  roles?: Resolver<
    Array<Maybe<ResolversTypes["UserRole"]>>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = ContextGraphql> = {
  AuthMutation?: AuthMutationResolvers<ContextType>;
  AuthQuery?: AuthQueryResolvers<ContextType>;
  Brand?: BrandResolvers<ContextType>;
  BrandMutation?: BrandMutationResolvers<ContextType>;
  BrandQuery?: BrandQueryResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryMutation?: CategoryMutationResolvers<ContextType>;
  CategoryQuery?: CategoryQueryResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  FileMutation?: FileMutationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Shop?: ShopResolvers<ContextType>;
  ShopMutation?: ShopMutationResolvers<ContextType>;
  ShopQuery?: ShopQueryResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ContextGraphql> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = ContextGraphql> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<
  ContextType = ContextGraphql
> = DirectiveResolvers<ContextType>;
