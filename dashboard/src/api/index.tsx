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
  password: Scalars["String"];
  username: Scalars["String"];
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
  Private = "PRIVATE",
  Public = "PUBLIC"
}

export type Category = {
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["Int"]>;
  title: Scalars["String"];
};

export type CategoryDeleteInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type CategoryMutation = {
  delete?: Maybe<Scalars["Boolean"]>;
  upsert?: Maybe<Category>;
};

export type CategoryMutationDeleteArgs = {
  input: CategoryDeleteInput;
};

export type CategoryMutationUpsertArgs = {
  input: CategoryUpsertInput;
};

export type CategoryQuery = {
  list?: Maybe<Array<Category>>;
};

export type CategoryUpsertInput = {
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  image?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["Int"]>;
  title: Scalars["String"];
};

export type File = {
  uri: Scalars["String"];
};

export type Mutation = {
  auth: AuthMutation;
  category?: Maybe<CategoryMutation>;
  fileUpload: File;
};

export type MutationFileUploadArgs = {
  file: Scalars["Upload"];
};

export type Query = {
  auth: AuthQuery;
  category: CategoryQuery;
};

export type User = {
  email: Scalars["String"];
  roles: Array<Maybe<UserRole>>;
  username?: Maybe<Scalars["String"]>;
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
