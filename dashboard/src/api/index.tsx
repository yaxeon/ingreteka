/* eslint-disable */

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Mongo ObjectId id scalar type */
  GraphQLObjectId: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: string;
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
  id: Scalars["GraphQLObjectId"];
  title: Scalars["String"];
};

export type BrandDeleteInput = {
  id: Scalars["GraphQLObjectId"];
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
  selection: SelectionMutation;
  file: FileMutation;
};

export type Query = {
  auth: AuthQuery;
  category: CategoryQuery;
  shop: ShopQuery;
  brand: BrandQuery;
  selection: SelectionQuery;
};

export type Selection = {
  id: Scalars["GraphQLObjectId"];
  title: Scalars["String"];
  text: Scalars["String"];
  categories: Array<Category>;
  brands: Array<Brand>;
  shops: Array<Shop>;
  images: Array<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type SelectionDeleteInput = {
  id: Scalars["GraphQLObjectId"];
};

export type SelectionMutation = {
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
  list: Array<Selection>;
  item?: Maybe<Selection>;
};

export type SelectionQueryListArgs = {
  includeCategories: Array<Scalars["GraphQLObjectId"]>;
};

export type SelectionQueryItemArgs = {
  id: Scalars["GraphQLObjectId"];
};

export type SelectionUpsertInput = {
  id?: Maybe<Scalars["GraphQLObjectId"]>;
  title: Scalars["String"];
  text: Scalars["String"];
  categories: Array<Scalars["GraphQLObjectId"]>;
  brands: Array<Scalars["GraphQLObjectId"]>;
  shops: Array<Scalars["GraphQLObjectId"]>;
  images: Array<Scalars["String"]>;
};

export type Shop = {
  id: Scalars["GraphQLObjectId"];
  title: Scalars["String"];
  link: Scalars["String"];
  image: Scalars["String"];
};

export type ShopDeleteInput = {
  id: Scalars["GraphQLObjectId"];
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
  email: Scalars["String"];
  username?: Maybe<Scalars["String"]>;
  roles: Array<Maybe<UserRole>>;
};

export enum UserRole {
  Admin = "ADMIN",
  User = "USER"
}
export type AuthLoginMutationVariables = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type AuthLoginMutation = { __typename?: "Mutation" } & {
  auth: { __typename?: "AuthMutation" } & Pick<AuthMutation, "login">;
};

export type AuthLogoutMutationVariables = {};

export type AuthLogoutMutation = { __typename?: "Mutation" } & {
  auth: { __typename?: "AuthMutation" } & Pick<AuthMutation, "logout">;
};

export type AuthProfileQueryVariables = {};

export type AuthProfileQuery = { __typename?: "Query" } & {
  auth: { __typename?: "AuthQuery" } & {
    profile: Maybe<
      { __typename?: "User" } & Pick<User, "username" | "roles" | "email">
    >;
  };
};

export type BrandDeleteMutationVariables = {
  input: BrandDeleteInput;
};

export type BrandDeleteMutation = { __typename?: "Mutation" } & {
  brand: { __typename?: "BrandMutation" } & Pick<BrandMutation, "delete">;
};

export type BrandItemQueryVariables = {
  id: Scalars["GraphQLObjectId"];
};

export type BrandItemQuery = { __typename?: "Query" } & {
  brand: { __typename?: "BrandQuery" } & {
    item: Maybe<{ __typename?: "Brand" } & Pick<Brand, "id" | "title">>;
  };
};

export type BrandListQueryVariables = {};

export type BrandListQuery = { __typename?: "Query" } & {
  brand: { __typename?: "BrandQuery" } & {
    list: Array<{ __typename?: "Brand" } & Pick<Brand, "id" | "title">>;
  };
};

export type BrandUpsertMutationVariables = {
  input: BrandUpsertInput;
};

export type BrandUpsertMutation = { __typename?: "Mutation" } & {
  brand: { __typename?: "BrandMutation" } & {
    upsert: Maybe<{ __typename?: "Brand" } & Pick<Brand, "id">>;
  };
};

export type CategoryDeleteMutationVariables = {
  input: CategoryDeleteInput;
};

export type CategoryDeleteMutation = { __typename?: "Mutation" } & {
  category: { __typename?: "CategoryMutation" } & Pick<
    CategoryMutation,
    "delete"
  >;
};

export type CategoryItemQueryVariables = {
  id: Scalars["GraphQLObjectId"];
};

export type CategoryItemQuery = { __typename?: "Query" } & {
  category: { __typename?: "CategoryQuery" } & {
    item: Maybe<
      { __typename?: "Category" } & Pick<
        Category,
        "id" | "title" | "slug" | "sort" | "image"
      >
    >;
  };
};

export type CategoryListQueryVariables = {};

export type CategoryListQuery = { __typename?: "Query" } & {
  category: { __typename?: "CategoryQuery" } & {
    list: Array<
      { __typename?: "Category" } & Pick<
        Category,
        "id" | "title" | "slug" | "sort" | "image"
      >
    >;
  };
};

export type CategoryUpsertMutationVariables = {
  input: CategoryUpsertInput;
};

export type CategoryUpsertMutation = { __typename?: "Mutation" } & {
  category: { __typename?: "CategoryMutation" } & {
    upsert: Maybe<{ __typename?: "Category" } & Pick<Category, "id">>;
  };
};

export type FileUploadMutationVariables = {
  file: Scalars["Upload"];
};

export type FileUploadMutation = { __typename?: "Mutation" } & {
  file: { __typename?: "FileMutation" } & {
    upload: Maybe<{ __typename?: "File" } & Pick<File, "uri">>;
  };
};

export type SelectionDeleteMutationVariables = {
  input: SelectionDeleteInput;
};

export type SelectionDeleteMutation = { __typename?: "Mutation" } & {
  selection: { __typename?: "SelectionMutation" } & Pick<
    SelectionMutation,
    "delete"
  >;
};

export type SelectionItemQueryVariables = {
  id: Scalars["GraphQLObjectId"];
};

export type SelectionItemQuery = { __typename?: "Query" } & {
  selection: { __typename?: "SelectionQuery" } & {
    item: Maybe<
      { __typename?: "Selection" } & Pick<
        Selection,
        "id" | "title" | "text" | "images" | "createdAt"
      > & {
          brands: Array<{ __typename?: "Brand" } & Pick<Brand, "id" | "title">>;
          categories: Array<
            { __typename?: "Category" } & Pick<Category, "id" | "title">
          >;
          shops: Array<{ __typename?: "Shop" } & Pick<Shop, "id" | "title">>;
        }
    >;
  };
};

export type SelectionListQueryVariables = {
  includeCategories: Array<Scalars["GraphQLObjectId"]>;
};

export type SelectionListQuery = { __typename?: "Query" } & {
  selection: { __typename?: "SelectionQuery" } & {
    list: Array<
      { __typename?: "Selection" } & Pick<
        Selection,
        "id" | "title" | "text" | "images" | "createdAt"
      > & {
          brands: Array<{ __typename?: "Brand" } & Pick<Brand, "id" | "title">>;
          categories: Array<
            { __typename?: "Category" } & Pick<Category, "id" | "title">
          >;
          shops: Array<{ __typename?: "Shop" } & Pick<Shop, "id" | "title">>;
        }
    >;
  };
};

export type SelectionUpsertMutationVariables = {
  input: SelectionUpsertInput;
};

export type SelectionUpsertMutation = { __typename?: "Mutation" } & {
  selection: { __typename?: "SelectionMutation" } & {
    upsert: Maybe<{ __typename?: "Selection" } & Pick<Selection, "id">>;
  };
};

export type ShopDeleteMutationVariables = {
  input: ShopDeleteInput;
};

export type ShopDeleteMutation = { __typename?: "Mutation" } & {
  shop: { __typename?: "ShopMutation" } & Pick<ShopMutation, "delete">;
};

export type ShopItemQueryVariables = {
  id: Scalars["GraphQLObjectId"];
};

export type ShopItemQuery = { __typename?: "Query" } & {
  shop: { __typename?: "ShopQuery" } & {
    item: Maybe<
      { __typename?: "Shop" } & Pick<Shop, "id" | "title" | "link" | "image">
    >;
  };
};

export type ShopListQueryVariables = {};

export type ShopListQuery = { __typename?: "Query" } & {
  shop: { __typename?: "ShopQuery" } & {
    list: Array<
      { __typename?: "Shop" } & Pick<Shop, "id" | "title" | "link" | "image">
    >;
  };
};

export type ShopUpsertMutationVariables = {
  input: ShopUpsertInput;
};

export type ShopUpsertMutation = { __typename?: "Mutation" } & {
  shop: { __typename?: "ShopMutation" } & {
    upsert: Maybe<{ __typename?: "Shop" } & Pick<Shop, "id">>;
  };
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const AuthLoginDocument = gql`
  mutation authLogin($username: String!, $password: String!) {
    auth {
      login(input: { username: $username, password: $password })
    }
  }
`;
export type AuthLoginMutationFn = ReactApollo.MutationFn<
  AuthLoginMutation,
  AuthLoginMutationVariables
>;

export const AuthLoginComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<AuthLoginMutation, AuthLoginMutationVariables>,
      "mutation"
    >,
    "variables"
  > & { variables?: AuthLoginMutationVariables }
) => (
  <ReactApollo.Mutation<AuthLoginMutation, AuthLoginMutationVariables>
    mutation={AuthLoginDocument}
    {...props}
  />
);

export type AuthLoginProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<AuthLoginMutation, AuthLoginMutationVariables>
> &
  TChildProps;
export function withAuthLogin<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    AuthLoginMutation,
    AuthLoginMutationVariables,
    AuthLoginProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    AuthLoginMutation,
    AuthLoginMutationVariables,
    AuthLoginProps<TChildProps>
  >(AuthLoginDocument, {
    alias: "withAuthLogin",
    ...operationOptions
  });
}

export function useAuthLoginMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    AuthLoginMutation,
    AuthLoginMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    AuthLoginMutation,
    AuthLoginMutationVariables
  >(AuthLoginDocument, baseOptions);
}
export const AuthLogoutDocument = gql`
  mutation authLogout {
    auth {
      logout
    }
  }
`;
export type AuthLogoutMutationFn = ReactApollo.MutationFn<
  AuthLogoutMutation,
  AuthLogoutMutationVariables
>;

export const AuthLogoutComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        AuthLogoutMutation,
        AuthLogoutMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: AuthLogoutMutationVariables }
) => (
  <ReactApollo.Mutation<AuthLogoutMutation, AuthLogoutMutationVariables>
    mutation={AuthLogoutDocument}
    {...props}
  />
);

export type AuthLogoutProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<AuthLogoutMutation, AuthLogoutMutationVariables>
> &
  TChildProps;
export function withAuthLogout<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    AuthLogoutMutation,
    AuthLogoutMutationVariables,
    AuthLogoutProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    AuthLogoutMutation,
    AuthLogoutMutationVariables,
    AuthLogoutProps<TChildProps>
  >(AuthLogoutDocument, {
    alias: "withAuthLogout",
    ...operationOptions
  });
}

export function useAuthLogoutMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    AuthLogoutMutation,
    AuthLogoutMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    AuthLogoutMutation,
    AuthLogoutMutationVariables
  >(AuthLogoutDocument, baseOptions);
}
export const AuthProfileDocument = gql`
  query authProfile {
    auth {
      profile {
        username
        roles
        email
      }
    }
  }
`;

export const AuthProfileComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<AuthProfileQuery, AuthProfileQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables?: AuthProfileQueryVariables }
) => (
  <ReactApollo.Query<AuthProfileQuery, AuthProfileQueryVariables>
    query={AuthProfileDocument}
    {...props}
  />
);

export type AuthProfileProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<AuthProfileQuery, AuthProfileQueryVariables>
> &
  TChildProps;
export function withAuthProfile<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    AuthProfileQuery,
    AuthProfileQueryVariables,
    AuthProfileProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    AuthProfileQuery,
    AuthProfileQueryVariables,
    AuthProfileProps<TChildProps>
  >(AuthProfileDocument, {
    alias: "withAuthProfile",
    ...operationOptions
  });
}

export function useAuthProfileQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<AuthProfileQueryVariables>
) {
  return ReactApolloHooks.useQuery<AuthProfileQuery, AuthProfileQueryVariables>(
    AuthProfileDocument,
    baseOptions
  );
}
export const BrandDeleteDocument = gql`
  mutation brandDelete($input: BrandDeleteInput!) {
    brand {
      delete(input: $input)
    }
  }
`;
export type BrandDeleteMutationFn = ReactApollo.MutationFn<
  BrandDeleteMutation,
  BrandDeleteMutationVariables
>;

export const BrandDeleteComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        BrandDeleteMutation,
        BrandDeleteMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: BrandDeleteMutationVariables }
) => (
  <ReactApollo.Mutation<BrandDeleteMutation, BrandDeleteMutationVariables>
    mutation={BrandDeleteDocument}
    {...props}
  />
);

export type BrandDeleteProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<BrandDeleteMutation, BrandDeleteMutationVariables>
> &
  TChildProps;
export function withBrandDelete<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    BrandDeleteMutation,
    BrandDeleteMutationVariables,
    BrandDeleteProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    BrandDeleteMutation,
    BrandDeleteMutationVariables,
    BrandDeleteProps<TChildProps>
  >(BrandDeleteDocument, {
    alias: "withBrandDelete",
    ...operationOptions
  });
}

export function useBrandDeleteMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    BrandDeleteMutation,
    BrandDeleteMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    BrandDeleteMutation,
    BrandDeleteMutationVariables
  >(BrandDeleteDocument, baseOptions);
}
export const BrandItemDocument = gql`
  query brandItem($id: GraphQLObjectId!) {
    brand {
      item(id: $id) {
        id
        title
      }
    }
  }
`;

export const BrandItemComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<BrandItemQuery, BrandItemQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables: BrandItemQueryVariables }
) => (
  <ReactApollo.Query<BrandItemQuery, BrandItemQueryVariables>
    query={BrandItemDocument}
    {...props}
  />
);

export type BrandItemProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<BrandItemQuery, BrandItemQueryVariables>
> &
  TChildProps;
export function withBrandItem<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    BrandItemQuery,
    BrandItemQueryVariables,
    BrandItemProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    BrandItemQuery,
    BrandItemQueryVariables,
    BrandItemProps<TChildProps>
  >(BrandItemDocument, {
    alias: "withBrandItem",
    ...operationOptions
  });
}

export function useBrandItemQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<BrandItemQueryVariables>
) {
  return ReactApolloHooks.useQuery<BrandItemQuery, BrandItemQueryVariables>(
    BrandItemDocument,
    baseOptions
  );
}
export const BrandListDocument = gql`
  query brandList {
    brand {
      list {
        id
        title
      }
    }
  }
`;

export const BrandListComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<BrandListQuery, BrandListQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables?: BrandListQueryVariables }
) => (
  <ReactApollo.Query<BrandListQuery, BrandListQueryVariables>
    query={BrandListDocument}
    {...props}
  />
);

export type BrandListProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<BrandListQuery, BrandListQueryVariables>
> &
  TChildProps;
export function withBrandList<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    BrandListQuery,
    BrandListQueryVariables,
    BrandListProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    BrandListQuery,
    BrandListQueryVariables,
    BrandListProps<TChildProps>
  >(BrandListDocument, {
    alias: "withBrandList",
    ...operationOptions
  });
}

export function useBrandListQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<BrandListQueryVariables>
) {
  return ReactApolloHooks.useQuery<BrandListQuery, BrandListQueryVariables>(
    BrandListDocument,
    baseOptions
  );
}
export const BrandUpsertDocument = gql`
  mutation brandUpsert($input: BrandUpsertInput!) {
    brand {
      upsert(input: $input) {
        id
      }
    }
  }
`;
export type BrandUpsertMutationFn = ReactApollo.MutationFn<
  BrandUpsertMutation,
  BrandUpsertMutationVariables
>;

export const BrandUpsertComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        BrandUpsertMutation,
        BrandUpsertMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: BrandUpsertMutationVariables }
) => (
  <ReactApollo.Mutation<BrandUpsertMutation, BrandUpsertMutationVariables>
    mutation={BrandUpsertDocument}
    {...props}
  />
);

export type BrandUpsertProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<BrandUpsertMutation, BrandUpsertMutationVariables>
> &
  TChildProps;
export function withBrandUpsert<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    BrandUpsertMutation,
    BrandUpsertMutationVariables,
    BrandUpsertProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    BrandUpsertMutation,
    BrandUpsertMutationVariables,
    BrandUpsertProps<TChildProps>
  >(BrandUpsertDocument, {
    alias: "withBrandUpsert",
    ...operationOptions
  });
}

export function useBrandUpsertMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    BrandUpsertMutation,
    BrandUpsertMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    BrandUpsertMutation,
    BrandUpsertMutationVariables
  >(BrandUpsertDocument, baseOptions);
}
export const CategoryDeleteDocument = gql`
  mutation categoryDelete($input: CategoryDeleteInput!) {
    category {
      delete(input: $input)
    }
  }
`;
export type CategoryDeleteMutationFn = ReactApollo.MutationFn<
  CategoryDeleteMutation,
  CategoryDeleteMutationVariables
>;

export const CategoryDeleteComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        CategoryDeleteMutation,
        CategoryDeleteMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: CategoryDeleteMutationVariables }
) => (
  <ReactApollo.Mutation<CategoryDeleteMutation, CategoryDeleteMutationVariables>
    mutation={CategoryDeleteDocument}
    {...props}
  />
);

export type CategoryDeleteProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    CategoryDeleteMutation,
    CategoryDeleteMutationVariables
  >
> &
  TChildProps;
export function withCategoryDelete<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CategoryDeleteMutation,
    CategoryDeleteMutationVariables,
    CategoryDeleteProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CategoryDeleteMutation,
    CategoryDeleteMutationVariables,
    CategoryDeleteProps<TChildProps>
  >(CategoryDeleteDocument, {
    alias: "withCategoryDelete",
    ...operationOptions
  });
}

export function useCategoryDeleteMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    CategoryDeleteMutation,
    CategoryDeleteMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    CategoryDeleteMutation,
    CategoryDeleteMutationVariables
  >(CategoryDeleteDocument, baseOptions);
}
export const CategoryItemDocument = gql`
  query categoryItem($id: GraphQLObjectId!) {
    category {
      item(id: $id) {
        id
        title
        slug
        sort
        image
      }
    }
  }
`;

export const CategoryItemComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<CategoryItemQuery, CategoryItemQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables: CategoryItemQueryVariables }
) => (
  <ReactApollo.Query<CategoryItemQuery, CategoryItemQueryVariables>
    query={CategoryItemDocument}
    {...props}
  />
);

export type CategoryItemProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<CategoryItemQuery, CategoryItemQueryVariables>
> &
  TChildProps;
export function withCategoryItem<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CategoryItemQuery,
    CategoryItemQueryVariables,
    CategoryItemProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    CategoryItemQuery,
    CategoryItemQueryVariables,
    CategoryItemProps<TChildProps>
  >(CategoryItemDocument, {
    alias: "withCategoryItem",
    ...operationOptions
  });
}

export function useCategoryItemQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<CategoryItemQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    CategoryItemQuery,
    CategoryItemQueryVariables
  >(CategoryItemDocument, baseOptions);
}
export const CategoryListDocument = gql`
  query categoryList {
    category {
      list {
        id
        title
        slug
        sort
        image
      }
    }
  }
`;

export const CategoryListComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<CategoryListQuery, CategoryListQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables?: CategoryListQueryVariables }
) => (
  <ReactApollo.Query<CategoryListQuery, CategoryListQueryVariables>
    query={CategoryListDocument}
    {...props}
  />
);

export type CategoryListProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<CategoryListQuery, CategoryListQueryVariables>
> &
  TChildProps;
export function withCategoryList<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CategoryListQuery,
    CategoryListQueryVariables,
    CategoryListProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    CategoryListQuery,
    CategoryListQueryVariables,
    CategoryListProps<TChildProps>
  >(CategoryListDocument, {
    alias: "withCategoryList",
    ...operationOptions
  });
}

export function useCategoryListQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<CategoryListQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    CategoryListQuery,
    CategoryListQueryVariables
  >(CategoryListDocument, baseOptions);
}
export const CategoryUpsertDocument = gql`
  mutation categoryUpsert($input: CategoryUpsertInput!) {
    category {
      upsert(input: $input) {
        id
      }
    }
  }
`;
export type CategoryUpsertMutationFn = ReactApollo.MutationFn<
  CategoryUpsertMutation,
  CategoryUpsertMutationVariables
>;

export const CategoryUpsertComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        CategoryUpsertMutation,
        CategoryUpsertMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: CategoryUpsertMutationVariables }
) => (
  <ReactApollo.Mutation<CategoryUpsertMutation, CategoryUpsertMutationVariables>
    mutation={CategoryUpsertDocument}
    {...props}
  />
);

export type CategoryUpsertProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    CategoryUpsertMutation,
    CategoryUpsertMutationVariables
  >
> &
  TChildProps;
export function withCategoryUpsert<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CategoryUpsertMutation,
    CategoryUpsertMutationVariables,
    CategoryUpsertProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CategoryUpsertMutation,
    CategoryUpsertMutationVariables,
    CategoryUpsertProps<TChildProps>
  >(CategoryUpsertDocument, {
    alias: "withCategoryUpsert",
    ...operationOptions
  });
}

export function useCategoryUpsertMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    CategoryUpsertMutation,
    CategoryUpsertMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    CategoryUpsertMutation,
    CategoryUpsertMutationVariables
  >(CategoryUpsertDocument, baseOptions);
}
export const FileUploadDocument = gql`
  mutation fileUpload($file: Upload!) {
    file {
      upload(file: $file) {
        uri
      }
    }
  }
`;
export type FileUploadMutationFn = ReactApollo.MutationFn<
  FileUploadMutation,
  FileUploadMutationVariables
>;

export const FileUploadComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        FileUploadMutation,
        FileUploadMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: FileUploadMutationVariables }
) => (
  <ReactApollo.Mutation<FileUploadMutation, FileUploadMutationVariables>
    mutation={FileUploadDocument}
    {...props}
  />
);

export type FileUploadProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<FileUploadMutation, FileUploadMutationVariables>
> &
  TChildProps;
export function withFileUpload<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    FileUploadMutation,
    FileUploadMutationVariables,
    FileUploadProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    FileUploadMutation,
    FileUploadMutationVariables,
    FileUploadProps<TChildProps>
  >(FileUploadDocument, {
    alias: "withFileUpload",
    ...operationOptions
  });
}

export function useFileUploadMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    FileUploadMutation,
    FileUploadMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    FileUploadMutation,
    FileUploadMutationVariables
  >(FileUploadDocument, baseOptions);
}
export const SelectionDeleteDocument = gql`
  mutation selectionDelete($input: SelectionDeleteInput!) {
    selection {
      delete(input: $input)
    }
  }
`;
export type SelectionDeleteMutationFn = ReactApollo.MutationFn<
  SelectionDeleteMutation,
  SelectionDeleteMutationVariables
>;

export const SelectionDeleteComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        SelectionDeleteMutation,
        SelectionDeleteMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: SelectionDeleteMutationVariables }
) => (
  <ReactApollo.Mutation<
    SelectionDeleteMutation,
    SelectionDeleteMutationVariables
  >
    mutation={SelectionDeleteDocument}
    {...props}
  />
);

export type SelectionDeleteProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    SelectionDeleteMutation,
    SelectionDeleteMutationVariables
  >
> &
  TChildProps;
export function withSelectionDelete<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    SelectionDeleteMutation,
    SelectionDeleteMutationVariables,
    SelectionDeleteProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    SelectionDeleteMutation,
    SelectionDeleteMutationVariables,
    SelectionDeleteProps<TChildProps>
  >(SelectionDeleteDocument, {
    alias: "withSelectionDelete",
    ...operationOptions
  });
}

export function useSelectionDeleteMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    SelectionDeleteMutation,
    SelectionDeleteMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    SelectionDeleteMutation,
    SelectionDeleteMutationVariables
  >(SelectionDeleteDocument, baseOptions);
}
export const SelectionItemDocument = gql`
  query selectionItem($id: GraphQLObjectId!) {
    selection {
      item(id: $id) {
        id
        title
        text
        images
        createdAt
        brands {
          id
          title
        }
        categories {
          id
          title
        }
        shops {
          id
          title
        }
      }
    }
  }
`;

export const SelectionItemComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<SelectionItemQuery, SelectionItemQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables: SelectionItemQueryVariables }
) => (
  <ReactApollo.Query<SelectionItemQuery, SelectionItemQueryVariables>
    query={SelectionItemDocument}
    {...props}
  />
);

export type SelectionItemProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<SelectionItemQuery, SelectionItemQueryVariables>
> &
  TChildProps;
export function withSelectionItem<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    SelectionItemQuery,
    SelectionItemQueryVariables,
    SelectionItemProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    SelectionItemQuery,
    SelectionItemQueryVariables,
    SelectionItemProps<TChildProps>
  >(SelectionItemDocument, {
    alias: "withSelectionItem",
    ...operationOptions
  });
}

export function useSelectionItemQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<SelectionItemQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    SelectionItemQuery,
    SelectionItemQueryVariables
  >(SelectionItemDocument, baseOptions);
}
export const SelectionListDocument = gql`
  query selectionList($includeCategories: [GraphQLObjectId!]!) {
    selection {
      list(includeCategories: $includeCategories) {
        id
        title
        text
        images
        createdAt
        brands {
          id
          title
        }
        categories {
          id
          title
        }
        shops {
          id
          title
        }
      }
    }
  }
`;

export const SelectionListComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<SelectionListQuery, SelectionListQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables: SelectionListQueryVariables }
) => (
  <ReactApollo.Query<SelectionListQuery, SelectionListQueryVariables>
    query={SelectionListDocument}
    {...props}
  />
);

export type SelectionListProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<SelectionListQuery, SelectionListQueryVariables>
> &
  TChildProps;
export function withSelectionList<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    SelectionListQuery,
    SelectionListQueryVariables,
    SelectionListProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    SelectionListQuery,
    SelectionListQueryVariables,
    SelectionListProps<TChildProps>
  >(SelectionListDocument, {
    alias: "withSelectionList",
    ...operationOptions
  });
}

export function useSelectionListQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<SelectionListQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    SelectionListQuery,
    SelectionListQueryVariables
  >(SelectionListDocument, baseOptions);
}
export const SelectionUpsertDocument = gql`
  mutation selectionUpsert($input: SelectionUpsertInput!) {
    selection {
      upsert(input: $input) {
        id
      }
    }
  }
`;
export type SelectionUpsertMutationFn = ReactApollo.MutationFn<
  SelectionUpsertMutation,
  SelectionUpsertMutationVariables
>;

export const SelectionUpsertComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        SelectionUpsertMutation,
        SelectionUpsertMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: SelectionUpsertMutationVariables }
) => (
  <ReactApollo.Mutation<
    SelectionUpsertMutation,
    SelectionUpsertMutationVariables
  >
    mutation={SelectionUpsertDocument}
    {...props}
  />
);

export type SelectionUpsertProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    SelectionUpsertMutation,
    SelectionUpsertMutationVariables
  >
> &
  TChildProps;
export function withSelectionUpsert<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    SelectionUpsertMutation,
    SelectionUpsertMutationVariables,
    SelectionUpsertProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    SelectionUpsertMutation,
    SelectionUpsertMutationVariables,
    SelectionUpsertProps<TChildProps>
  >(SelectionUpsertDocument, {
    alias: "withSelectionUpsert",
    ...operationOptions
  });
}

export function useSelectionUpsertMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    SelectionUpsertMutation,
    SelectionUpsertMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    SelectionUpsertMutation,
    SelectionUpsertMutationVariables
  >(SelectionUpsertDocument, baseOptions);
}
export const ShopDeleteDocument = gql`
  mutation shopDelete($input: ShopDeleteInput!) {
    shop {
      delete(input: $input)
    }
  }
`;
export type ShopDeleteMutationFn = ReactApollo.MutationFn<
  ShopDeleteMutation,
  ShopDeleteMutationVariables
>;

export const ShopDeleteComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        ShopDeleteMutation,
        ShopDeleteMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: ShopDeleteMutationVariables }
) => (
  <ReactApollo.Mutation<ShopDeleteMutation, ShopDeleteMutationVariables>
    mutation={ShopDeleteDocument}
    {...props}
  />
);

export type ShopDeleteProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<ShopDeleteMutation, ShopDeleteMutationVariables>
> &
  TChildProps;
export function withShopDelete<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ShopDeleteMutation,
    ShopDeleteMutationVariables,
    ShopDeleteProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    ShopDeleteMutation,
    ShopDeleteMutationVariables,
    ShopDeleteProps<TChildProps>
  >(ShopDeleteDocument, {
    alias: "withShopDelete",
    ...operationOptions
  });
}

export function useShopDeleteMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    ShopDeleteMutation,
    ShopDeleteMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    ShopDeleteMutation,
    ShopDeleteMutationVariables
  >(ShopDeleteDocument, baseOptions);
}
export const ShopItemDocument = gql`
  query shopItem($id: GraphQLObjectId!) {
    shop {
      item(id: $id) {
        id
        title
        link
        image
      }
    }
  }
`;

export const ShopItemComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<ShopItemQuery, ShopItemQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables: ShopItemQueryVariables }
) => (
  <ReactApollo.Query<ShopItemQuery, ShopItemQueryVariables>
    query={ShopItemDocument}
    {...props}
  />
);

export type ShopItemProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ShopItemQuery, ShopItemQueryVariables>
> &
  TChildProps;
export function withShopItem<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ShopItemQuery,
    ShopItemQueryVariables,
    ShopItemProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    ShopItemQuery,
    ShopItemQueryVariables,
    ShopItemProps<TChildProps>
  >(ShopItemDocument, {
    alias: "withShopItem",
    ...operationOptions
  });
}

export function useShopItemQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<ShopItemQueryVariables>
) {
  return ReactApolloHooks.useQuery<ShopItemQuery, ShopItemQueryVariables>(
    ShopItemDocument,
    baseOptions
  );
}
export const ShopListDocument = gql`
  query shopList {
    shop {
      list {
        id
        title
        link
        image
      }
    }
  }
`;

export const ShopListComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<ShopListQuery, ShopListQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables?: ShopListQueryVariables }
) => (
  <ReactApollo.Query<ShopListQuery, ShopListQueryVariables>
    query={ShopListDocument}
    {...props}
  />
);

export type ShopListProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ShopListQuery, ShopListQueryVariables>
> &
  TChildProps;
export function withShopList<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ShopListQuery,
    ShopListQueryVariables,
    ShopListProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    ShopListQuery,
    ShopListQueryVariables,
    ShopListProps<TChildProps>
  >(ShopListDocument, {
    alias: "withShopList",
    ...operationOptions
  });
}

export function useShopListQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<ShopListQueryVariables>
) {
  return ReactApolloHooks.useQuery<ShopListQuery, ShopListQueryVariables>(
    ShopListDocument,
    baseOptions
  );
}
export const ShopUpsertDocument = gql`
  mutation shopUpsert($input: ShopUpsertInput!) {
    shop {
      upsert(input: $input) {
        id
      }
    }
  }
`;
export type ShopUpsertMutationFn = ReactApollo.MutationFn<
  ShopUpsertMutation,
  ShopUpsertMutationVariables
>;

export const ShopUpsertComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        ShopUpsertMutation,
        ShopUpsertMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: ShopUpsertMutationVariables }
) => (
  <ReactApollo.Mutation<ShopUpsertMutation, ShopUpsertMutationVariables>
    mutation={ShopUpsertDocument}
    {...props}
  />
);

export type ShopUpsertProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<ShopUpsertMutation, ShopUpsertMutationVariables>
> &
  TChildProps;
export function withShopUpsert<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ShopUpsertMutation,
    ShopUpsertMutationVariables,
    ShopUpsertProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    ShopUpsertMutation,
    ShopUpsertMutationVariables,
    ShopUpsertProps<TChildProps>
  >(ShopUpsertDocument, {
    alias: "withShopUpsert",
    ...operationOptions
  });
}

export function useShopUpsertMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    ShopUpsertMutation,
    ShopUpsertMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    ShopUpsertMutation,
    ShopUpsertMutationVariables
  >(ShopUpsertDocument, baseOptions);
}
