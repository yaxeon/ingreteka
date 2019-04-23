/* eslint-disable */

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
  file: FileMutation;
};

export type Query = {
  auth: AuthQuery;
  category: CategoryQuery;
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
export type CategoryListQueryVariables = {};

export type CategoryListQuery = { __typename?: "Query" } & {
  category: { __typename?: "CategoryQuery" } & {
    list: Array<
      { __typename?: "Category" } & Pick<
        Category,
        "id" | "title" | "description" | "slug" | "sort" | "image"
      >
    >;
  };
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const CategoryListDocument = gql`
  query categoryList {
    category {
      list {
        id
        title
        description
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
