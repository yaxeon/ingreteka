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

export type CategoryDeleteMutationVariables = {
  input: CategoryDeleteInput;
};

export type CategoryDeleteMutation = { __typename?: "Mutation" } & {
  category: { __typename?: "CategoryMutation" } & Pick<
    CategoryMutation,
    "delete"
  >;
};

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

export const AuthLoginComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<AuthLoginMutation, AuthLoginMutationVariables>,
      "mutation"
    >,
    "variables"
  > & { variables: AuthLoginMutationVariables }
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
export type AuthLoginMutationFn = ReactApollo.MutationFn<
  AuthLoginMutation,
  AuthLoginMutationVariables
>;
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
  >(AuthLoginDocument, operationOptions);
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
export type AuthLogoutMutationFn = ReactApollo.MutationFn<
  AuthLogoutMutation,
  AuthLogoutMutationVariables
>;
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
  >(AuthLogoutDocument, operationOptions);
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
  >(AuthProfileDocument, operationOptions);
}

export function useAuthProfileQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<AuthProfileQueryVariables>
) {
  return ReactApolloHooks.useQuery<AuthProfileQuery, AuthProfileQueryVariables>(
    AuthProfileDocument,
    baseOptions
  );
}
export const CategoryDeleteDocument = gql`
  mutation categoryDelete($input: CategoryDeleteInput!) {
    category {
      delete(input: $input)
    }
  }
`;

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
  > & { variables: CategoryDeleteMutationVariables }
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
export type CategoryDeleteMutationFn = ReactApollo.MutationFn<
  CategoryDeleteMutation,
  CategoryDeleteMutationVariables
>;
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
  >(CategoryDeleteDocument, operationOptions);
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
  >(CategoryListDocument, operationOptions);
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
  > & { variables: CategoryUpsertMutationVariables }
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
export type CategoryUpsertMutationFn = ReactApollo.MutationFn<
  CategoryUpsertMutation,
  CategoryUpsertMutationVariables
>;
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
  >(CategoryUpsertDocument, operationOptions);
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
  > & { variables: FileUploadMutationVariables }
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
export type FileUploadMutationFn = ReactApollo.MutationFn<
  FileUploadMutation,
  FileUploadMutationVariables
>;
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
  >(FileUploadDocument, operationOptions);
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
