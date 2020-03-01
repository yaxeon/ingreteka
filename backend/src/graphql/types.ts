import { Types } from "mongoose";
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
import { ContextGraphql } from "./context";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Mongo ObjectId id scalar type */
  GraphQLObjectId: Types.ObjectId;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: String;
  Upload: any;
};

export type AuthLoginInput = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type AuthMutation = {
  __typename?: "AuthMutation";
  login?: Maybe<Scalars["Boolean"]>;
  logout?: Maybe<Scalars["Boolean"]>;
};

export type AuthMutationLoginArgs = {
  input: AuthLoginInput;
};

export type AuthQuery = {
  __typename?: "AuthQuery";
  profile?: Maybe<User>;
};

export type Brand = {
  __typename?: "Brand";
  id: Scalars["GraphQLObjectId"];
  title: Scalars["String"];
};

export type BrandDeleteInput = {
  id: Scalars["GraphQLObjectId"];
};

export type BrandMutation = {
  __typename?: "BrandMutation";
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
  __typename?: "BrandQuery";
  list: Array<Brand>;
  item?: Maybe<Brand>;
};

export type BrandQueryItemArgs = {
  id: Scalars["GraphQLObjectId"];
};

export type BrandUpsertInput = {
  id?: Maybe<Scalars["GraphQLObjectId"]>;
  title: Scalars["String"];
};

export type Category = {
  __typename?: "Category";
  id: Scalars["GraphQLObjectId"];
  title: Scalars["String"];
  slug: Scalars["String"];
  sort: Scalars["Int"];
  image: Scalars["String"];
};

export type CategoryDeleteInput = {
  id: Scalars["GraphQLObjectId"];
};

export type CategoryMutation = {
  __typename?: "CategoryMutation";
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
  __typename?: "CategoryQuery";
  list: Array<Category>;
  item?: Maybe<Category>;
};

export type CategoryQueryItemArgs = {
  id: Scalars["GraphQLObjectId"];
};

export type CategoryUpsertInput = {
  id?: Maybe<Scalars["GraphQLObjectId"]>;
  title: Scalars["String"];
  slug: Scalars["String"];
  sort?: Maybe<Scalars["Int"]>;
  image: Scalars["String"];
};

export type File = {
  __typename?: "File";
  uri: Scalars["String"];
};

export type FileMutation = {
  __typename?: "FileMutation";
  upload?: Maybe<File>;
};

export type FileMutationUploadArgs = {
  file: Scalars["Upload"];
};

export type Mutation = {
  __typename?: "Mutation";
  auth: AuthMutation;
  category: CategoryMutation;
  shop: ShopMutation;
  brand: BrandMutation;
  selection: SelectionMutation;
  file: FileMutation;
};

export type Query = {
  __typename?: "Query";
  auth: AuthQuery;
  category: CategoryQuery;
  shop: ShopQuery;
  brand: BrandQuery;
  selection: SelectionQuery;
};

export type Selection = {
  __typename?: "Selection";
  id: Scalars["GraphQLObjectId"];
  title: Scalars["String"];
  text: Scalars["String"];
  categories: Array<Category>;
  brands: Array<Brand>;
  shops: Array<Shop>;
  images: Array<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  relevanceDate?: Maybe<Scalars["DateTime"]>;
  updateTitle?: Maybe<Scalars["String"]>;
  isPublished: Scalars["Boolean"];
};

export type SelectionDeleteInput = {
  id: Scalars["GraphQLObjectId"];
};

export type SelectionFilterInput = {
  categoryId?: Maybe<Array<Scalars["GraphQLObjectId"]>>;
  categorySlug?: Maybe<Array<Scalars["String"]>>;
  brandId?: Maybe<Array<Scalars["GraphQLObjectId"]>>;
  shopId?: Maybe<Array<Scalars["GraphQLObjectId"]>>;
  id?: Maybe<Array<Scalars["GraphQLObjectId"]>>;
};

export type SelectionMutation = {
  __typename?: "SelectionMutation";
  upsert?: Maybe<Selection>;
  delete?: Maybe<Scalars["Boolean"]>;
};

export type SelectionMutationUpsertArgs = {
  input: SelectionUpsertInput;
};

export type SelectionMutationDeleteArgs = {
  input: SelectionDeleteInput;
};

export type SelectionQuery = {
  __typename?: "SelectionQuery";
  list: Array<Selection>;
  search: Array<Selection>;
  item?: Maybe<Selection>;
  news: Array<Selection>;
};

export type SelectionQueryListArgs = {
  filter?: Maybe<SelectionFilterInput>;
};

export type SelectionQuerySearchArgs = {
  filter: SelectionSearchInput;
};

export type SelectionQueryItemArgs = {
  id: Scalars["GraphQLObjectId"];
};

export type SelectionQueryNewsArgs = {
  limit: Scalars["Int"];
};

export type SelectionSearchInput = {
  query: Scalars["String"];
};

export type SelectionUpsertInput = {
  id?: Maybe<Scalars["GraphQLObjectId"]>;
  title: Scalars["String"];
  text: Scalars["String"];
  categories: Array<Scalars["GraphQLObjectId"]>;
  brands: Array<Scalars["GraphQLObjectId"]>;
  shops: Array<Scalars["GraphQLObjectId"]>;
  images: Array<Scalars["String"]>;
  isPublished: Scalars["Boolean"];
  relevanceDate?: Maybe<Scalars["DateTime"]>;
  updateTitle?: Maybe<Scalars["String"]>;
};

export type Shop = {
  __typename?: "Shop";
  id: Scalars["GraphQLObjectId"];
  title: Scalars["String"];
  link: Scalars["String"];
  image: Scalars["String"];
};

export type ShopDeleteInput = {
  id: Scalars["GraphQLObjectId"];
};

export type ShopMutation = {
  __typename?: "ShopMutation";
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
  __typename?: "ShopQuery";
  list: Array<Shop>;
  item?: Maybe<Shop>;
};

export type ShopQueryItemArgs = {
  id: Scalars["GraphQLObjectId"];
};

export type ShopUpsertInput = {
  id?: Maybe<Scalars["GraphQLObjectId"]>;
  title: Scalars["String"];
  link: Scalars["String"];
  image: Scalars["String"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  username?: Maybe<Scalars["String"]>;
  roles: Array<Maybe<UserRole>>;
};

export enum UserRole {
  Admin = "ADMIN",
  User = "USER"
}

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
  GraphQLObjectId: Scalars["GraphQLObjectId"];
  Int: Scalars["Int"];
  ShopQuery: ShopQuery;
  Shop: Shop;
  BrandQuery: BrandQuery;
  Brand: Brand;
  SelectionQuery: SelectionQuery;
  SelectionFilterInput: SelectionFilterInput;
  Selection: Selection;
  DateTime: Scalars["DateTime"];
  Boolean: Scalars["Boolean"];
  SelectionSearchInput: SelectionSearchInput;
  Mutation: {};
  AuthMutation: AuthMutation;
  AuthLoginInput: AuthLoginInput;
  CategoryMutation: CategoryMutation;
  CategoryUpsertInput: CategoryUpsertInput;
  CategoryDeleteInput: CategoryDeleteInput;
  ShopMutation: ShopMutation;
  ShopUpsertInput: ShopUpsertInput;
  ShopDeleteInput: ShopDeleteInput;
  BrandMutation: BrandMutation;
  BrandUpsertInput: BrandUpsertInput;
  BrandDeleteInput: BrandDeleteInput;
  SelectionMutation: SelectionMutation;
  SelectionUpsertInput: SelectionUpsertInput;
  SelectionDeleteInput: SelectionDeleteInput;
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
  id?: Resolver<ResolversTypes["GraphQLObjectId"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
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
  item?: Resolver<
    Maybe<ResolversTypes["Brand"]>,
    ParentType,
    ContextType,
    BrandQueryItemArgs
  >;
};

export type CategoryResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["Category"]
> = {
  id?: Resolver<ResolversTypes["GraphQLObjectId"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
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
  item?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    CategoryQueryItemArgs
  >;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

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

export interface GraphQlObjectIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["GraphQLObjectId"], any> {
  name: "GraphQLObjectId";
}

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
  selection?: Resolver<
    ResolversTypes["SelectionMutation"],
    ParentType,
    ContextType
  >;
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
  selection?: Resolver<
    ResolversTypes["SelectionQuery"],
    ParentType,
    ContextType
  >;
};

export type SelectionResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["Selection"]
> = {
  id?: Resolver<ResolversTypes["GraphQLObjectId"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  text?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  categories?: Resolver<
    Array<ResolversTypes["Category"]>,
    ParentType,
    ContextType
  >;
  brands?: Resolver<Array<ResolversTypes["Brand"]>, ParentType, ContextType>;
  shops?: Resolver<Array<ResolversTypes["Shop"]>, ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  relevanceDate?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updateTitle?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isPublished?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
};

export type SelectionMutationResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["SelectionMutation"]
> = {
  upsert?: Resolver<
    Maybe<ResolversTypes["Selection"]>,
    ParentType,
    ContextType,
    SelectionMutationUpsertArgs
  >;
  delete?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    SelectionMutationDeleteArgs
  >;
};

export type SelectionQueryResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["SelectionQuery"]
> = {
  list?: Resolver<
    Array<ResolversTypes["Selection"]>,
    ParentType,
    ContextType,
    SelectionQueryListArgs
  >;
  search?: Resolver<
    Array<ResolversTypes["Selection"]>,
    ParentType,
    ContextType,
    SelectionQuerySearchArgs
  >;
  item?: Resolver<
    Maybe<ResolversTypes["Selection"]>,
    ParentType,
    ContextType,
    SelectionQueryItemArgs
  >;
  news?: Resolver<
    Array<ResolversTypes["Selection"]>,
    ParentType,
    ContextType,
    SelectionQueryNewsArgs
  >;
};

export type ShopResolvers<
  ContextType = ContextGraphql,
  ParentType = ResolversTypes["Shop"]
> = {
  id?: Resolver<ResolversTypes["GraphQLObjectId"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  link?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
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
  item?: Resolver<
    Maybe<ResolversTypes["Shop"]>,
    ParentType,
    ContextType,
    ShopQueryItemArgs
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
  Brand?: BrandResolvers<ContextType>;
  BrandMutation?: BrandMutationResolvers<ContextType>;
  BrandQuery?: BrandQueryResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryMutation?: CategoryMutationResolvers<ContextType>;
  CategoryQuery?: CategoryQueryResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  File?: FileResolvers<ContextType>;
  FileMutation?: FileMutationResolvers<ContextType>;
  GraphQLObjectId?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Selection?: SelectionResolvers<ContextType>;
  SelectionMutation?: SelectionMutationResolvers<ContextType>;
  SelectionQuery?: SelectionQueryResolvers<ContextType>;
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
