export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
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

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

export type Category = {
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["Int"]>;
  image?: Maybe<Scalars["String"]>;
};

export type CategoryMutation = {
  upsert?: Maybe<Category>;
};

export type CategoryMutationUpsertArgs = {
  input: CategoryUpsertInput;
};

export type CategoryUpsertInput = {
  id?: Maybe<Scalars["ID"]>;
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["Int"]>;
  image?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  auth: AuthMutation;
  category: CategoryMutation;
};

export type Query = {
  auth: AuthQuery;
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
  Mutation: {};
  AuthMutation: AuthMutation;
  AuthLoginInput: AuthLoginInput;
  Boolean: Scalars["Boolean"];
  CategoryMutation: CategoryMutation;
  CategoryUpsertInput: CategoryUpsertInput;
  ID: Scalars["ID"];
  Int: Scalars["Int"];
  Category: Category;
  CacheControlScope: CacheControlScope;
  Upload: Scalars["Upload"];
};

export type AuthDirectiveResolver<
  Result,
  Parent,
  ContextType = ContextGraphql,
  Args = { roles?: Maybe<Maybe<Array<Maybe<Scalars["String"]>>>> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  ContextType = ContextGraphql,
  Args = {
    maxAge?: Maybe<Maybe<Scalars["Int"]>>;
    scope?: Maybe<Maybe<CacheControlScope>>;
  }
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
};

export type QueryResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["Query"]
> = {
  auth?: Resolver<ResolversTypes["AuthQuery"], ParentType, ContextType>;
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
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<
  ContextType = ContextGraphql
> = DirectiveResolvers<ContextType>;
