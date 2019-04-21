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

export type Category = {
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["Int"]>;
  image?: Maybe<Scalars["String"]>;
};

export type CategoryDeleteInput = {
  id?: Maybe<Scalars["ID"]>;
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
  list?: Maybe<Array<Category>>;
};

export type CategoryUpsertInput = {
  id?: Maybe<Scalars["ID"]>;
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["Int"]>;
  image?: Maybe<Scalars["String"]>;
};

export type File = {
  uri: Scalars["String"];
};

export type FileMutation = {
  upload: File;
};

export type FileMutationUploadArgs = {
  file: Scalars["Upload"];
};

export type Mutation = {
  auth?: Maybe<AuthMutation>;
  category?: Maybe<CategoryMutation>;
  file?: Maybe<FileMutation>;
};

export type Query = {
  auth?: Maybe<AuthQuery>;
  category?: Maybe<CategoryQuery>;
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
  Mutation: {};
  AuthMutation: AuthMutation;
  AuthLoginInput: AuthLoginInput;
  Boolean: Scalars["Boolean"];
  CategoryMutation: CategoryMutation;
  CategoryUpsertInput: CategoryUpsertInput;
  CategoryDeleteInput: CategoryDeleteInput;
  FileMutation: FileMutation;
  Upload: Scalars["Upload"];
  File: File;
};

export type AuthDirectiveResolver<
  Result,
  Parent,
  ContextType = ContextGraphql,
  Args = { roles?: Maybe<Maybe<Array<Maybe<Scalars["String"]>>>> }
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
  slug?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sort?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
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
  list?: Resolver<
    Maybe<Array<ResolversTypes["Category"]>>,
    ParentType,
    ContextType
  >;
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
    ResolversTypes["File"],
    ParentType,
    ContextType,
    FileMutationUploadArgs
  >;
};

export type MutationResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["Mutation"]
> = {
  auth?: Resolver<
    Maybe<ResolversTypes["AuthMutation"]>,
    ParentType,
    ContextType
  >;
  category?: Resolver<
    Maybe<ResolversTypes["CategoryMutation"]>,
    ParentType,
    ContextType
  >;
  file?: Resolver<
    Maybe<ResolversTypes["FileMutation"]>,
    ParentType,
    ContextType
  >;
};

export type QueryResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["Query"]
> = {
  auth?: Resolver<Maybe<ResolversTypes["AuthQuery"]>, ParentType, ContextType>;
  category?: Resolver<
    Maybe<ResolversTypes["CategoryQuery"]>,
    ParentType,
    ContextType
  >;
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
  Category?: CategoryResolvers<ContextType>;
  CategoryMutation?: CategoryMutationResolvers<ContextType>;
  CategoryQuery?: CategoryQueryResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  FileMutation?: FileMutationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
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
