/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Mongo ObjectId id scalar type */
  GraphQLObjectId: string,
  /** 
 * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
 **/
  DateTime: string,
  Upload: any,
};


export type AuthLoginInput = {
  username: Scalars['String'],
  password: Scalars['String'],
};

export type AuthMutation = {
  __typename?: 'AuthMutation',
  login?: Maybe<Scalars['Boolean']>,
  logout?: Maybe<Scalars['Boolean']>,
};


export type AuthMutationLoginArgs = {
  input: AuthLoginInput
};

export type AuthQuery = {
  __typename?: 'AuthQuery',
  profile?: Maybe<User>,
};

export type Brand = {
  __typename?: 'Brand',
  id: Scalars['GraphQLObjectId'],
  title: Scalars['String'],
};

export type BrandDeleteInput = {
  id: Scalars['GraphQLObjectId'],
};

export type BrandMutation = {
  __typename?: 'BrandMutation',
  upsert?: Maybe<Brand>,
  delete?: Maybe<Scalars['Boolean']>,
};


export type BrandMutationUpsertArgs = {
  input: BrandUpsertInput
};


export type BrandMutationDeleteArgs = {
  input: BrandDeleteInput
};

export type BrandQuery = {
  __typename?: 'BrandQuery',
  list: Array<Brand>,
  item?: Maybe<Brand>,
};


export type BrandQueryItemArgs = {
  id: Scalars['GraphQLObjectId']
};

export type BrandUpsertInput = {
  id?: Maybe<Scalars['GraphQLObjectId']>,
  title: Scalars['String'],
};

export type Category = {
  __typename?: 'Category',
  id: Scalars['GraphQLObjectId'],
  title: Scalars['String'],
  slug: Scalars['String'],
  sort: Scalars['Int'],
  image: Scalars['String'],
};

export type CategoryDeleteInput = {
  id: Scalars['GraphQLObjectId'],
};

export type CategoryMutation = {
  __typename?: 'CategoryMutation',
  upsert?: Maybe<Category>,
  delete?: Maybe<Scalars['Boolean']>,
};


export type CategoryMutationUpsertArgs = {
  input: CategoryUpsertInput
};


export type CategoryMutationDeleteArgs = {
  input: CategoryDeleteInput
};

export type CategoryQuery = {
  __typename?: 'CategoryQuery',
  list: Array<Category>,
  item?: Maybe<Category>,
};


export type CategoryQueryItemArgs = {
  id: Scalars['GraphQLObjectId']
};

export type CategoryUpsertInput = {
  id?: Maybe<Scalars['GraphQLObjectId']>,
  title: Scalars['String'],
  slug: Scalars['String'],
  sort?: Maybe<Scalars['Int']>,
  image: Scalars['String'],
};


export type File = {
  __typename?: 'File',
  uri: Scalars['String'],
};

export type FileMutation = {
  __typename?: 'FileMutation',
  upload?: Maybe<File>,
};


export type FileMutationUploadArgs = {
  file: Scalars['Upload']
};


export type Mutation = {
  __typename?: 'Mutation',
  auth: AuthMutation,
  category: CategoryMutation,
  shop: ShopMutation,
  brand: BrandMutation,
  selection: SelectionMutation,
  file: FileMutation,
};

export type Query = {
  __typename?: 'Query',
  auth: AuthQuery,
  category: CategoryQuery,
  shop: ShopQuery,
  brand: BrandQuery,
  selection: SelectionQuery,
};

export type Selection = {
  __typename?: 'Selection',
  id: Scalars['GraphQLObjectId'],
  title: Scalars['String'],
  text: Scalars['String'],
  categories: Array<Category>,
  brands: Array<Brand>,
  shops: Array<Shop>,
  images: Array<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  relevanceDate?: Maybe<Scalars['DateTime']>,
  updateTitle?: Maybe<Scalars['String']>,
  isPublished: Scalars['Boolean'],
};

export type SelectionDeleteInput = {
  id: Scalars['GraphQLObjectId'],
};

export type SelectionFilterInput = {
  categoryId?: Maybe<Array<Scalars['GraphQLObjectId']>>,
  categorySlug?: Maybe<Array<Scalars['String']>>,
  brandId?: Maybe<Array<Scalars['GraphQLObjectId']>>,
  shopId?: Maybe<Array<Scalars['GraphQLObjectId']>>,
  id?: Maybe<Array<Scalars['GraphQLObjectId']>>,
};

export type SelectionMutation = {
  __typename?: 'SelectionMutation',
  upsert?: Maybe<Selection>,
  delete?: Maybe<Scalars['Boolean']>,
};


export type SelectionMutationUpsertArgs = {
  input: SelectionUpsertInput
};


export type SelectionMutationDeleteArgs = {
  input: SelectionDeleteInput
};

export type SelectionQuery = {
  __typename?: 'SelectionQuery',
  list: Array<Selection>,
  search: Array<Selection>,
  item?: Maybe<Selection>,
  news: Array<Selection>,
};


export type SelectionQueryListArgs = {
  filter?: Maybe<SelectionFilterInput>
};


export type SelectionQuerySearchArgs = {
  filter: SelectionSearchInput
};


export type SelectionQueryItemArgs = {
  id: Scalars['GraphQLObjectId']
};


export type SelectionQueryNewsArgs = {
  limit: Scalars['Int']
};

export type SelectionSearchInput = {
  query: Scalars['String'],
};

export type SelectionUpsertInput = {
  id?: Maybe<Scalars['GraphQLObjectId']>,
  title: Scalars['String'],
  text: Scalars['String'],
  categories: Array<Scalars['GraphQLObjectId']>,
  brands: Array<Scalars['GraphQLObjectId']>,
  shops: Array<Scalars['GraphQLObjectId']>,
  images: Array<Scalars['String']>,
  isPublished: Scalars['Boolean'],
  relevanceDate?: Maybe<Scalars['DateTime']>,
  updateTitle?: Maybe<Scalars['String']>,
};

export type Shop = {
  __typename?: 'Shop',
  id: Scalars['GraphQLObjectId'],
  title: Scalars['String'],
  link: Scalars['String'],
  image: Scalars['String'],
};

export type ShopDeleteInput = {
  id: Scalars['GraphQLObjectId'],
};

export type ShopMutation = {
  __typename?: 'ShopMutation',
  upsert?: Maybe<Shop>,
  delete?: Maybe<Scalars['Boolean']>,
};


export type ShopMutationUpsertArgs = {
  input: ShopUpsertInput
};


export type ShopMutationDeleteArgs = {
  input: ShopDeleteInput
};

export type ShopQuery = {
  __typename?: 'ShopQuery',
  list: Array<Shop>,
  item?: Maybe<Shop>,
};


export type ShopQueryItemArgs = {
  id: Scalars['GraphQLObjectId']
};

export type ShopUpsertInput = {
  id?: Maybe<Scalars['GraphQLObjectId']>,
  title: Scalars['String'],
  link: Scalars['String'],
  image: Scalars['String'],
};


export type User = {
  __typename?: 'User',
  email: Scalars['String'],
  username?: Maybe<Scalars['String']>,
  roles: Array<Maybe<UserRole>>,
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}
export type AuthLoginMutationVariables = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type AuthLoginMutation = (
  { __typename?: 'Mutation' }
  & { auth: (
    { __typename?: 'AuthMutation' }
    & Pick<AuthMutation, 'login'>
  ) }
);

export type AuthLogoutMutationVariables = {};


export type AuthLogoutMutation = (
  { __typename?: 'Mutation' }
  & { auth: (
    { __typename?: 'AuthMutation' }
    & Pick<AuthMutation, 'logout'>
  ) }
);

export type AuthProfileQueryVariables = {};


export type AuthProfileQuery = (
  { __typename?: 'Query' }
  & { auth: (
    { __typename?: 'AuthQuery' }
    & { profile: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'roles' | 'email'>
    )> }
  ) }
);

export type BrandDeleteMutationVariables = {
  input: BrandDeleteInput
};


export type BrandDeleteMutation = (
  { __typename?: 'Mutation' }
  & { brand: (
    { __typename?: 'BrandMutation' }
    & Pick<BrandMutation, 'delete'>
  ) }
);

export type BrandItemQueryVariables = {
  id: Scalars['GraphQLObjectId']
};


export type BrandItemQuery = (
  { __typename?: 'Query' }
  & { brand: (
    { __typename?: 'BrandQuery' }
    & { item: Maybe<(
      { __typename?: 'Brand' }
      & Pick<Brand, 'id' | 'title'>
    )> }
  ) }
);

export type BrandListQueryVariables = {};


export type BrandListQuery = (
  { __typename?: 'Query' }
  & { brand: (
    { __typename?: 'BrandQuery' }
    & { list: Array<(
      { __typename?: 'Brand' }
      & Pick<Brand, 'id' | 'title'>
    )> }
  ) }
);

export type BrandUpsertMutationVariables = {
  input: BrandUpsertInput
};


export type BrandUpsertMutation = (
  { __typename?: 'Mutation' }
  & { brand: (
    { __typename?: 'BrandMutation' }
    & { upsert: Maybe<(
      { __typename?: 'Brand' }
      & Pick<Brand, 'id'>
    )> }
  ) }
);

export type CategoryDeleteMutationVariables = {
  input: CategoryDeleteInput
};


export type CategoryDeleteMutation = (
  { __typename?: 'Mutation' }
  & { category: (
    { __typename?: 'CategoryMutation' }
    & Pick<CategoryMutation, 'delete'>
  ) }
);

export type CategoryItemQueryVariables = {
  id: Scalars['GraphQLObjectId']
};


export type CategoryItemQuery = (
  { __typename?: 'Query' }
  & { category: (
    { __typename?: 'CategoryQuery' }
    & { item: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'title' | 'slug' | 'sort' | 'image'>
    )> }
  ) }
);

export type CategoryListQueryVariables = {};


export type CategoryListQuery = (
  { __typename?: 'Query' }
  & { category: (
    { __typename?: 'CategoryQuery' }
    & { list: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'title' | 'slug' | 'sort' | 'image'>
    )> }
  ) }
);

export type CategoryUpsertMutationVariables = {
  input: CategoryUpsertInput
};


export type CategoryUpsertMutation = (
  { __typename?: 'Mutation' }
  & { category: (
    { __typename?: 'CategoryMutation' }
    & { upsert: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id'>
    )> }
  ) }
);

export type FileUploadMutationVariables = {
  file: Scalars['Upload']
};


export type FileUploadMutation = (
  { __typename?: 'Mutation' }
  & { file: (
    { __typename?: 'FileMutation' }
    & { upload: Maybe<(
      { __typename?: 'File' }
      & Pick<File, 'uri'>
    )> }
  ) }
);

export type SelectionDeleteMutationVariables = {
  input: SelectionDeleteInput
};


export type SelectionDeleteMutation = (
  { __typename?: 'Mutation' }
  & { selection: (
    { __typename?: 'SelectionMutation' }
    & Pick<SelectionMutation, 'delete'>
  ) }
);

export type SelectionItemQueryVariables = {
  id: Scalars['GraphQLObjectId']
};


export type SelectionItemQuery = (
  { __typename?: 'Query' }
  & { selection: (
    { __typename?: 'SelectionQuery' }
    & { item: Maybe<(
      { __typename?: 'Selection' }
      & Pick<Selection, 'id' | 'title' | 'text' | 'images' | 'isPublished' | 'relevanceDate' | 'updateTitle' | 'createdAt'>
      & { brands: Array<(
        { __typename?: 'Brand' }
        & Pick<Brand, 'id' | 'title'>
      )>, categories: Array<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'title'>
      )>, shops: Array<(
        { __typename?: 'Shop' }
        & Pick<Shop, 'id' | 'title'>
      )> }
    )> }
  ) }
);

export type SelectionListQueryVariables = {
  filter?: Maybe<SelectionFilterInput>
};


export type SelectionListQuery = (
  { __typename?: 'Query' }
  & { selection: (
    { __typename?: 'SelectionQuery' }
    & { list: Array<(
      { __typename?: 'Selection' }
      & Pick<Selection, 'id' | 'title' | 'text' | 'images' | 'createdAt' | 'isPublished' | 'relevanceDate'>
      & { brands: Array<(
        { __typename?: 'Brand' }
        & Pick<Brand, 'id' | 'title'>
      )>, categories: Array<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'title' | 'image'>
      )>, shops: Array<(
        { __typename?: 'Shop' }
        & Pick<Shop, 'id' | 'title'>
      )> }
    )> }
  ) }
);

export type SelectionOptionsQueryVariables = {};


export type SelectionOptionsQuery = (
  { __typename?: 'Query' }
  & { brand: (
    { __typename?: 'BrandQuery' }
    & { list: Array<(
      { __typename?: 'Brand' }
      & { value: Brand['id'], label: Brand['title'] }
    )> }
  ), shop: (
    { __typename?: 'ShopQuery' }
    & { list: Array<(
      { __typename?: 'Shop' }
      & { value: Shop['id'], label: Shop['title'] }
    )> }
  ), category: (
    { __typename?: 'CategoryQuery' }
    & { list: Array<(
      { __typename?: 'Category' }
      & { value: Category['id'], label: Category['title'] }
    )> }
  ) }
);

export type SelectionUpsertMutationVariables = {
  input: SelectionUpsertInput
};


export type SelectionUpsertMutation = (
  { __typename?: 'Mutation' }
  & { selection: (
    { __typename?: 'SelectionMutation' }
    & { upsert: Maybe<(
      { __typename?: 'Selection' }
      & Pick<Selection, 'id'>
    )> }
  ) }
);

export type ShopDeleteMutationVariables = {
  input: ShopDeleteInput
};


export type ShopDeleteMutation = (
  { __typename?: 'Mutation' }
  & { shop: (
    { __typename?: 'ShopMutation' }
    & Pick<ShopMutation, 'delete'>
  ) }
);

export type ShopItemQueryVariables = {
  id: Scalars['GraphQLObjectId']
};


export type ShopItemQuery = (
  { __typename?: 'Query' }
  & { shop: (
    { __typename?: 'ShopQuery' }
    & { item: Maybe<(
      { __typename?: 'Shop' }
      & Pick<Shop, 'id' | 'title' | 'link' | 'image'>
    )> }
  ) }
);

export type ShopListQueryVariables = {};


export type ShopListQuery = (
  { __typename?: 'Query' }
  & { shop: (
    { __typename?: 'ShopQuery' }
    & { list: Array<(
      { __typename?: 'Shop' }
      & Pick<Shop, 'id' | 'title' | 'link' | 'image'>
    )> }
  ) }
);

export type ShopUpsertMutationVariables = {
  input: ShopUpsertInput
};


export type ShopUpsertMutation = (
  { __typename?: 'Mutation' }
  & { shop: (
    { __typename?: 'ShopMutation' }
    & { upsert: Maybe<(
      { __typename?: 'Shop' }
      & Pick<Shop, 'id'>
    )> }
  ) }
);

export const AuthLoginDocument = gql`
    mutation authLogin($username: String!, $password: String!) {
  auth {
    login(input: {username: $username, password: $password})
  }
}
    `;
export type AuthLoginMutationFn = ApolloReactCommon.MutationFunction<AuthLoginMutation, AuthLoginMutationVariables>;
export type AuthLoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AuthLoginMutation, AuthLoginMutationVariables>, 'mutation'>;

    export const AuthLoginComponent = (props: AuthLoginComponentProps) => (
      <ApolloReactComponents.Mutation<AuthLoginMutation, AuthLoginMutationVariables> mutation={AuthLoginDocument} {...props} />
    );
    
export type AuthLoginProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AuthLoginMutation, AuthLoginMutationVariables> & TChildProps;
export function withAuthLogin<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AuthLoginMutation,
  AuthLoginMutationVariables,
  AuthLoginProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AuthLoginMutation, AuthLoginMutationVariables, AuthLoginProps<TChildProps>>(AuthLoginDocument, {
      alias: 'withAuthLogin',
      ...operationOptions
    });
};

    export function useAuthLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AuthLoginMutation, AuthLoginMutationVariables>) {
      return ApolloReactHooks.useMutation<AuthLoginMutation, AuthLoginMutationVariables>(AuthLoginDocument, baseOptions);
    };
export type AuthLoginMutationHookResult = ReturnType<typeof useAuthLoginMutation>;
export type AuthLoginMutationResult = ApolloReactCommon.MutationResult<AuthLoginMutation>;
export type AuthLoginMutationOptions = ApolloReactCommon.BaseMutationOptions<AuthLoginMutation, AuthLoginMutationVariables>;
export const AuthLogoutDocument = gql`
    mutation authLogout {
  auth {
    logout
  }
}
    `;
export type AuthLogoutMutationFn = ApolloReactCommon.MutationFunction<AuthLogoutMutation, AuthLogoutMutationVariables>;
export type AuthLogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AuthLogoutMutation, AuthLogoutMutationVariables>, 'mutation'>;

    export const AuthLogoutComponent = (props: AuthLogoutComponentProps) => (
      <ApolloReactComponents.Mutation<AuthLogoutMutation, AuthLogoutMutationVariables> mutation={AuthLogoutDocument} {...props} />
    );
    
export type AuthLogoutProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AuthLogoutMutation, AuthLogoutMutationVariables> & TChildProps;
export function withAuthLogout<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AuthLogoutMutation,
  AuthLogoutMutationVariables,
  AuthLogoutProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AuthLogoutMutation, AuthLogoutMutationVariables, AuthLogoutProps<TChildProps>>(AuthLogoutDocument, {
      alias: 'withAuthLogout',
      ...operationOptions
    });
};

    export function useAuthLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AuthLogoutMutation, AuthLogoutMutationVariables>) {
      return ApolloReactHooks.useMutation<AuthLogoutMutation, AuthLogoutMutationVariables>(AuthLogoutDocument, baseOptions);
    };
export type AuthLogoutMutationHookResult = ReturnType<typeof useAuthLogoutMutation>;
export type AuthLogoutMutationResult = ApolloReactCommon.MutationResult<AuthLogoutMutation>;
export type AuthLogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<AuthLogoutMutation, AuthLogoutMutationVariables>;
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
export type AuthProfileComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AuthProfileQuery, AuthProfileQueryVariables>, 'query'>;

    export const AuthProfileComponent = (props: AuthProfileComponentProps) => (
      <ApolloReactComponents.Query<AuthProfileQuery, AuthProfileQueryVariables> query={AuthProfileDocument} {...props} />
    );
    
export type AuthProfileProps<TChildProps = {}> = ApolloReactHoc.DataProps<AuthProfileQuery, AuthProfileQueryVariables> & TChildProps;
export function withAuthProfile<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AuthProfileQuery,
  AuthProfileQueryVariables,
  AuthProfileProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AuthProfileQuery, AuthProfileQueryVariables, AuthProfileProps<TChildProps>>(AuthProfileDocument, {
      alias: 'withAuthProfile',
      ...operationOptions
    });
};

    export function useAuthProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AuthProfileQuery, AuthProfileQueryVariables>) {
      return ApolloReactHooks.useQuery<AuthProfileQuery, AuthProfileQueryVariables>(AuthProfileDocument, baseOptions);
    };
      export function useAuthProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AuthProfileQuery, AuthProfileQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<AuthProfileQuery, AuthProfileQueryVariables>(AuthProfileDocument, baseOptions);
      };
      
export type AuthProfileQueryHookResult = ReturnType<typeof useAuthProfileQuery>;
export type AuthProfileQueryResult = ApolloReactCommon.QueryResult<AuthProfileQuery, AuthProfileQueryVariables>;
export const BrandDeleteDocument = gql`
    mutation brandDelete($input: BrandDeleteInput!) {
  brand {
    delete(input: $input)
  }
}
    `;
export type BrandDeleteMutationFn = ApolloReactCommon.MutationFunction<BrandDeleteMutation, BrandDeleteMutationVariables>;
export type BrandDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<BrandDeleteMutation, BrandDeleteMutationVariables>, 'mutation'>;

    export const BrandDeleteComponent = (props: BrandDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<BrandDeleteMutation, BrandDeleteMutationVariables> mutation={BrandDeleteDocument} {...props} />
    );
    
export type BrandDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<BrandDeleteMutation, BrandDeleteMutationVariables> & TChildProps;
export function withBrandDelete<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  BrandDeleteMutation,
  BrandDeleteMutationVariables,
  BrandDeleteProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, BrandDeleteMutation, BrandDeleteMutationVariables, BrandDeleteProps<TChildProps>>(BrandDeleteDocument, {
      alias: 'withBrandDelete',
      ...operationOptions
    });
};

    export function useBrandDeleteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BrandDeleteMutation, BrandDeleteMutationVariables>) {
      return ApolloReactHooks.useMutation<BrandDeleteMutation, BrandDeleteMutationVariables>(BrandDeleteDocument, baseOptions);
    };
export type BrandDeleteMutationHookResult = ReturnType<typeof useBrandDeleteMutation>;
export type BrandDeleteMutationResult = ApolloReactCommon.MutationResult<BrandDeleteMutation>;
export type BrandDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<BrandDeleteMutation, BrandDeleteMutationVariables>;
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
export type BrandItemComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<BrandItemQuery, BrandItemQueryVariables>, 'query'> & ({ variables: BrandItemQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const BrandItemComponent = (props: BrandItemComponentProps) => (
      <ApolloReactComponents.Query<BrandItemQuery, BrandItemQueryVariables> query={BrandItemDocument} {...props} />
    );
    
export type BrandItemProps<TChildProps = {}> = ApolloReactHoc.DataProps<BrandItemQuery, BrandItemQueryVariables> & TChildProps;
export function withBrandItem<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  BrandItemQuery,
  BrandItemQueryVariables,
  BrandItemProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, BrandItemQuery, BrandItemQueryVariables, BrandItemProps<TChildProps>>(BrandItemDocument, {
      alias: 'withBrandItem',
      ...operationOptions
    });
};

    export function useBrandItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BrandItemQuery, BrandItemQueryVariables>) {
      return ApolloReactHooks.useQuery<BrandItemQuery, BrandItemQueryVariables>(BrandItemDocument, baseOptions);
    };
      export function useBrandItemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BrandItemQuery, BrandItemQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<BrandItemQuery, BrandItemQueryVariables>(BrandItemDocument, baseOptions);
      };
      
export type BrandItemQueryHookResult = ReturnType<typeof useBrandItemQuery>;
export type BrandItemQueryResult = ApolloReactCommon.QueryResult<BrandItemQuery, BrandItemQueryVariables>;
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
export type BrandListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<BrandListQuery, BrandListQueryVariables>, 'query'>;

    export const BrandListComponent = (props: BrandListComponentProps) => (
      <ApolloReactComponents.Query<BrandListQuery, BrandListQueryVariables> query={BrandListDocument} {...props} />
    );
    
export type BrandListProps<TChildProps = {}> = ApolloReactHoc.DataProps<BrandListQuery, BrandListQueryVariables> & TChildProps;
export function withBrandList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  BrandListQuery,
  BrandListQueryVariables,
  BrandListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, BrandListQuery, BrandListQueryVariables, BrandListProps<TChildProps>>(BrandListDocument, {
      alias: 'withBrandList',
      ...operationOptions
    });
};

    export function useBrandListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BrandListQuery, BrandListQueryVariables>) {
      return ApolloReactHooks.useQuery<BrandListQuery, BrandListQueryVariables>(BrandListDocument, baseOptions);
    };
      export function useBrandListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BrandListQuery, BrandListQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<BrandListQuery, BrandListQueryVariables>(BrandListDocument, baseOptions);
      };
      
export type BrandListQueryHookResult = ReturnType<typeof useBrandListQuery>;
export type BrandListQueryResult = ApolloReactCommon.QueryResult<BrandListQuery, BrandListQueryVariables>;
export const BrandUpsertDocument = gql`
    mutation brandUpsert($input: BrandUpsertInput!) {
  brand {
    upsert(input: $input) {
      id
    }
  }
}
    `;
export type BrandUpsertMutationFn = ApolloReactCommon.MutationFunction<BrandUpsertMutation, BrandUpsertMutationVariables>;
export type BrandUpsertComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<BrandUpsertMutation, BrandUpsertMutationVariables>, 'mutation'>;

    export const BrandUpsertComponent = (props: BrandUpsertComponentProps) => (
      <ApolloReactComponents.Mutation<BrandUpsertMutation, BrandUpsertMutationVariables> mutation={BrandUpsertDocument} {...props} />
    );
    
export type BrandUpsertProps<TChildProps = {}> = ApolloReactHoc.MutateProps<BrandUpsertMutation, BrandUpsertMutationVariables> & TChildProps;
export function withBrandUpsert<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  BrandUpsertMutation,
  BrandUpsertMutationVariables,
  BrandUpsertProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, BrandUpsertMutation, BrandUpsertMutationVariables, BrandUpsertProps<TChildProps>>(BrandUpsertDocument, {
      alias: 'withBrandUpsert',
      ...operationOptions
    });
};

    export function useBrandUpsertMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BrandUpsertMutation, BrandUpsertMutationVariables>) {
      return ApolloReactHooks.useMutation<BrandUpsertMutation, BrandUpsertMutationVariables>(BrandUpsertDocument, baseOptions);
    };
export type BrandUpsertMutationHookResult = ReturnType<typeof useBrandUpsertMutation>;
export type BrandUpsertMutationResult = ApolloReactCommon.MutationResult<BrandUpsertMutation>;
export type BrandUpsertMutationOptions = ApolloReactCommon.BaseMutationOptions<BrandUpsertMutation, BrandUpsertMutationVariables>;
export const CategoryDeleteDocument = gql`
    mutation categoryDelete($input: CategoryDeleteInput!) {
  category {
    delete(input: $input)
  }
}
    `;
export type CategoryDeleteMutationFn = ApolloReactCommon.MutationFunction<CategoryDeleteMutation, CategoryDeleteMutationVariables>;
export type CategoryDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CategoryDeleteMutation, CategoryDeleteMutationVariables>, 'mutation'>;

    export const CategoryDeleteComponent = (props: CategoryDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<CategoryDeleteMutation, CategoryDeleteMutationVariables> mutation={CategoryDeleteDocument} {...props} />
    );
    
export type CategoryDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CategoryDeleteMutation, CategoryDeleteMutationVariables> & TChildProps;
export function withCategoryDelete<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CategoryDeleteMutation,
  CategoryDeleteMutationVariables,
  CategoryDeleteProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CategoryDeleteMutation, CategoryDeleteMutationVariables, CategoryDeleteProps<TChildProps>>(CategoryDeleteDocument, {
      alias: 'withCategoryDelete',
      ...operationOptions
    });
};

    export function useCategoryDeleteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CategoryDeleteMutation, CategoryDeleteMutationVariables>) {
      return ApolloReactHooks.useMutation<CategoryDeleteMutation, CategoryDeleteMutationVariables>(CategoryDeleteDocument, baseOptions);
    };
export type CategoryDeleteMutationHookResult = ReturnType<typeof useCategoryDeleteMutation>;
export type CategoryDeleteMutationResult = ApolloReactCommon.MutationResult<CategoryDeleteMutation>;
export type CategoryDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<CategoryDeleteMutation, CategoryDeleteMutationVariables>;
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
export type CategoryItemComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CategoryItemQuery, CategoryItemQueryVariables>, 'query'> & ({ variables: CategoryItemQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CategoryItemComponent = (props: CategoryItemComponentProps) => (
      <ApolloReactComponents.Query<CategoryItemQuery, CategoryItemQueryVariables> query={CategoryItemDocument} {...props} />
    );
    
export type CategoryItemProps<TChildProps = {}> = ApolloReactHoc.DataProps<CategoryItemQuery, CategoryItemQueryVariables> & TChildProps;
export function withCategoryItem<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CategoryItemQuery,
  CategoryItemQueryVariables,
  CategoryItemProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CategoryItemQuery, CategoryItemQueryVariables, CategoryItemProps<TChildProps>>(CategoryItemDocument, {
      alias: 'withCategoryItem',
      ...operationOptions
    });
};

    export function useCategoryItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CategoryItemQuery, CategoryItemQueryVariables>) {
      return ApolloReactHooks.useQuery<CategoryItemQuery, CategoryItemQueryVariables>(CategoryItemDocument, baseOptions);
    };
      export function useCategoryItemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoryItemQuery, CategoryItemQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<CategoryItemQuery, CategoryItemQueryVariables>(CategoryItemDocument, baseOptions);
      };
      
export type CategoryItemQueryHookResult = ReturnType<typeof useCategoryItemQuery>;
export type CategoryItemQueryResult = ApolloReactCommon.QueryResult<CategoryItemQuery, CategoryItemQueryVariables>;
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
export type CategoryListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CategoryListQuery, CategoryListQueryVariables>, 'query'>;

    export const CategoryListComponent = (props: CategoryListComponentProps) => (
      <ApolloReactComponents.Query<CategoryListQuery, CategoryListQueryVariables> query={CategoryListDocument} {...props} />
    );
    
export type CategoryListProps<TChildProps = {}> = ApolloReactHoc.DataProps<CategoryListQuery, CategoryListQueryVariables> & TChildProps;
export function withCategoryList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CategoryListQuery,
  CategoryListQueryVariables,
  CategoryListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CategoryListQuery, CategoryListQueryVariables, CategoryListProps<TChildProps>>(CategoryListDocument, {
      alias: 'withCategoryList',
      ...operationOptions
    });
};

    export function useCategoryListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CategoryListQuery, CategoryListQueryVariables>) {
      return ApolloReactHooks.useQuery<CategoryListQuery, CategoryListQueryVariables>(CategoryListDocument, baseOptions);
    };
      export function useCategoryListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoryListQuery, CategoryListQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<CategoryListQuery, CategoryListQueryVariables>(CategoryListDocument, baseOptions);
      };
      
export type CategoryListQueryHookResult = ReturnType<typeof useCategoryListQuery>;
export type CategoryListQueryResult = ApolloReactCommon.QueryResult<CategoryListQuery, CategoryListQueryVariables>;
export const CategoryUpsertDocument = gql`
    mutation categoryUpsert($input: CategoryUpsertInput!) {
  category {
    upsert(input: $input) {
      id
    }
  }
}
    `;
export type CategoryUpsertMutationFn = ApolloReactCommon.MutationFunction<CategoryUpsertMutation, CategoryUpsertMutationVariables>;
export type CategoryUpsertComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CategoryUpsertMutation, CategoryUpsertMutationVariables>, 'mutation'>;

    export const CategoryUpsertComponent = (props: CategoryUpsertComponentProps) => (
      <ApolloReactComponents.Mutation<CategoryUpsertMutation, CategoryUpsertMutationVariables> mutation={CategoryUpsertDocument} {...props} />
    );
    
export type CategoryUpsertProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CategoryUpsertMutation, CategoryUpsertMutationVariables> & TChildProps;
export function withCategoryUpsert<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CategoryUpsertMutation,
  CategoryUpsertMutationVariables,
  CategoryUpsertProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CategoryUpsertMutation, CategoryUpsertMutationVariables, CategoryUpsertProps<TChildProps>>(CategoryUpsertDocument, {
      alias: 'withCategoryUpsert',
      ...operationOptions
    });
};

    export function useCategoryUpsertMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CategoryUpsertMutation, CategoryUpsertMutationVariables>) {
      return ApolloReactHooks.useMutation<CategoryUpsertMutation, CategoryUpsertMutationVariables>(CategoryUpsertDocument, baseOptions);
    };
export type CategoryUpsertMutationHookResult = ReturnType<typeof useCategoryUpsertMutation>;
export type CategoryUpsertMutationResult = ApolloReactCommon.MutationResult<CategoryUpsertMutation>;
export type CategoryUpsertMutationOptions = ApolloReactCommon.BaseMutationOptions<CategoryUpsertMutation, CategoryUpsertMutationVariables>;
export const FileUploadDocument = gql`
    mutation fileUpload($file: Upload!) {
  file {
    upload(file: $file) {
      uri
    }
  }
}
    `;
export type FileUploadMutationFn = ApolloReactCommon.MutationFunction<FileUploadMutation, FileUploadMutationVariables>;
export type FileUploadComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<FileUploadMutation, FileUploadMutationVariables>, 'mutation'>;

    export const FileUploadComponent = (props: FileUploadComponentProps) => (
      <ApolloReactComponents.Mutation<FileUploadMutation, FileUploadMutationVariables> mutation={FileUploadDocument} {...props} />
    );
    
export type FileUploadProps<TChildProps = {}> = ApolloReactHoc.MutateProps<FileUploadMutation, FileUploadMutationVariables> & TChildProps;
export function withFileUpload<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FileUploadMutation,
  FileUploadMutationVariables,
  FileUploadProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, FileUploadMutation, FileUploadMutationVariables, FileUploadProps<TChildProps>>(FileUploadDocument, {
      alias: 'withFileUpload',
      ...operationOptions
    });
};

    export function useFileUploadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FileUploadMutation, FileUploadMutationVariables>) {
      return ApolloReactHooks.useMutation<FileUploadMutation, FileUploadMutationVariables>(FileUploadDocument, baseOptions);
    };
export type FileUploadMutationHookResult = ReturnType<typeof useFileUploadMutation>;
export type FileUploadMutationResult = ApolloReactCommon.MutationResult<FileUploadMutation>;
export type FileUploadMutationOptions = ApolloReactCommon.BaseMutationOptions<FileUploadMutation, FileUploadMutationVariables>;
export const SelectionDeleteDocument = gql`
    mutation selectionDelete($input: SelectionDeleteInput!) {
  selection {
    delete(input: $input)
  }
}
    `;
export type SelectionDeleteMutationFn = ApolloReactCommon.MutationFunction<SelectionDeleteMutation, SelectionDeleteMutationVariables>;
export type SelectionDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SelectionDeleteMutation, SelectionDeleteMutationVariables>, 'mutation'>;

    export const SelectionDeleteComponent = (props: SelectionDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<SelectionDeleteMutation, SelectionDeleteMutationVariables> mutation={SelectionDeleteDocument} {...props} />
    );
    
export type SelectionDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SelectionDeleteMutation, SelectionDeleteMutationVariables> & TChildProps;
export function withSelectionDelete<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SelectionDeleteMutation,
  SelectionDeleteMutationVariables,
  SelectionDeleteProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SelectionDeleteMutation, SelectionDeleteMutationVariables, SelectionDeleteProps<TChildProps>>(SelectionDeleteDocument, {
      alias: 'withSelectionDelete',
      ...operationOptions
    });
};

    export function useSelectionDeleteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SelectionDeleteMutation, SelectionDeleteMutationVariables>) {
      return ApolloReactHooks.useMutation<SelectionDeleteMutation, SelectionDeleteMutationVariables>(SelectionDeleteDocument, baseOptions);
    };
export type SelectionDeleteMutationHookResult = ReturnType<typeof useSelectionDeleteMutation>;
export type SelectionDeleteMutationResult = ApolloReactCommon.MutationResult<SelectionDeleteMutation>;
export type SelectionDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<SelectionDeleteMutation, SelectionDeleteMutationVariables>;
export const SelectionItemDocument = gql`
    query selectionItem($id: GraphQLObjectId!) {
  selection {
    item(id: $id) {
      id
      title
      text
      images
      isPublished
      relevanceDate
      updateTitle
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
export type SelectionItemComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SelectionItemQuery, SelectionItemQueryVariables>, 'query'> & ({ variables: SelectionItemQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SelectionItemComponent = (props: SelectionItemComponentProps) => (
      <ApolloReactComponents.Query<SelectionItemQuery, SelectionItemQueryVariables> query={SelectionItemDocument} {...props} />
    );
    
export type SelectionItemProps<TChildProps = {}> = ApolloReactHoc.DataProps<SelectionItemQuery, SelectionItemQueryVariables> & TChildProps;
export function withSelectionItem<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SelectionItemQuery,
  SelectionItemQueryVariables,
  SelectionItemProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, SelectionItemQuery, SelectionItemQueryVariables, SelectionItemProps<TChildProps>>(SelectionItemDocument, {
      alias: 'withSelectionItem',
      ...operationOptions
    });
};

    export function useSelectionItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SelectionItemQuery, SelectionItemQueryVariables>) {
      return ApolloReactHooks.useQuery<SelectionItemQuery, SelectionItemQueryVariables>(SelectionItemDocument, baseOptions);
    };
      export function useSelectionItemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SelectionItemQuery, SelectionItemQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<SelectionItemQuery, SelectionItemQueryVariables>(SelectionItemDocument, baseOptions);
      };
      
export type SelectionItemQueryHookResult = ReturnType<typeof useSelectionItemQuery>;
export type SelectionItemQueryResult = ApolloReactCommon.QueryResult<SelectionItemQuery, SelectionItemQueryVariables>;
export const SelectionListDocument = gql`
    query selectionList($filter: SelectionFilterInput) {
  selection {
    list(filter: $filter) {
      id
      title
      text
      images
      createdAt
      isPublished
      relevanceDate
      brands {
        id
        title
      }
      categories {
        id
        title
        image
      }
      shops {
        id
        title
      }
    }
  }
}
    `;
export type SelectionListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SelectionListQuery, SelectionListQueryVariables>, 'query'>;

    export const SelectionListComponent = (props: SelectionListComponentProps) => (
      <ApolloReactComponents.Query<SelectionListQuery, SelectionListQueryVariables> query={SelectionListDocument} {...props} />
    );
    
export type SelectionListProps<TChildProps = {}> = ApolloReactHoc.DataProps<SelectionListQuery, SelectionListQueryVariables> & TChildProps;
export function withSelectionList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SelectionListQuery,
  SelectionListQueryVariables,
  SelectionListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, SelectionListQuery, SelectionListQueryVariables, SelectionListProps<TChildProps>>(SelectionListDocument, {
      alias: 'withSelectionList',
      ...operationOptions
    });
};

    export function useSelectionListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SelectionListQuery, SelectionListQueryVariables>) {
      return ApolloReactHooks.useQuery<SelectionListQuery, SelectionListQueryVariables>(SelectionListDocument, baseOptions);
    };
      export function useSelectionListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SelectionListQuery, SelectionListQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<SelectionListQuery, SelectionListQueryVariables>(SelectionListDocument, baseOptions);
      };
      
export type SelectionListQueryHookResult = ReturnType<typeof useSelectionListQuery>;
export type SelectionListQueryResult = ApolloReactCommon.QueryResult<SelectionListQuery, SelectionListQueryVariables>;
export const SelectionOptionsDocument = gql`
    query selectionOptions {
  brand {
    list {
      value: id
      label: title
    }
  }
  shop {
    list {
      value: id
      label: title
    }
  }
  category {
    list {
      value: id
      label: title
    }
  }
}
    `;
export type SelectionOptionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SelectionOptionsQuery, SelectionOptionsQueryVariables>, 'query'>;

    export const SelectionOptionsComponent = (props: SelectionOptionsComponentProps) => (
      <ApolloReactComponents.Query<SelectionOptionsQuery, SelectionOptionsQueryVariables> query={SelectionOptionsDocument} {...props} />
    );
    
export type SelectionOptionsProps<TChildProps = {}> = ApolloReactHoc.DataProps<SelectionOptionsQuery, SelectionOptionsQueryVariables> & TChildProps;
export function withSelectionOptions<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SelectionOptionsQuery,
  SelectionOptionsQueryVariables,
  SelectionOptionsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, SelectionOptionsQuery, SelectionOptionsQueryVariables, SelectionOptionsProps<TChildProps>>(SelectionOptionsDocument, {
      alias: 'withSelectionOptions',
      ...operationOptions
    });
};

    export function useSelectionOptionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SelectionOptionsQuery, SelectionOptionsQueryVariables>) {
      return ApolloReactHooks.useQuery<SelectionOptionsQuery, SelectionOptionsQueryVariables>(SelectionOptionsDocument, baseOptions);
    };
      export function useSelectionOptionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SelectionOptionsQuery, SelectionOptionsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<SelectionOptionsQuery, SelectionOptionsQueryVariables>(SelectionOptionsDocument, baseOptions);
      };
      
export type SelectionOptionsQueryHookResult = ReturnType<typeof useSelectionOptionsQuery>;
export type SelectionOptionsQueryResult = ApolloReactCommon.QueryResult<SelectionOptionsQuery, SelectionOptionsQueryVariables>;
export const SelectionUpsertDocument = gql`
    mutation selectionUpsert($input: SelectionUpsertInput!) {
  selection {
    upsert(input: $input) {
      id
    }
  }
}
    `;
export type SelectionUpsertMutationFn = ApolloReactCommon.MutationFunction<SelectionUpsertMutation, SelectionUpsertMutationVariables>;
export type SelectionUpsertComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SelectionUpsertMutation, SelectionUpsertMutationVariables>, 'mutation'>;

    export const SelectionUpsertComponent = (props: SelectionUpsertComponentProps) => (
      <ApolloReactComponents.Mutation<SelectionUpsertMutation, SelectionUpsertMutationVariables> mutation={SelectionUpsertDocument} {...props} />
    );
    
export type SelectionUpsertProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SelectionUpsertMutation, SelectionUpsertMutationVariables> & TChildProps;
export function withSelectionUpsert<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SelectionUpsertMutation,
  SelectionUpsertMutationVariables,
  SelectionUpsertProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SelectionUpsertMutation, SelectionUpsertMutationVariables, SelectionUpsertProps<TChildProps>>(SelectionUpsertDocument, {
      alias: 'withSelectionUpsert',
      ...operationOptions
    });
};

    export function useSelectionUpsertMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SelectionUpsertMutation, SelectionUpsertMutationVariables>) {
      return ApolloReactHooks.useMutation<SelectionUpsertMutation, SelectionUpsertMutationVariables>(SelectionUpsertDocument, baseOptions);
    };
export type SelectionUpsertMutationHookResult = ReturnType<typeof useSelectionUpsertMutation>;
export type SelectionUpsertMutationResult = ApolloReactCommon.MutationResult<SelectionUpsertMutation>;
export type SelectionUpsertMutationOptions = ApolloReactCommon.BaseMutationOptions<SelectionUpsertMutation, SelectionUpsertMutationVariables>;
export const ShopDeleteDocument = gql`
    mutation shopDelete($input: ShopDeleteInput!) {
  shop {
    delete(input: $input)
  }
}
    `;
export type ShopDeleteMutationFn = ApolloReactCommon.MutationFunction<ShopDeleteMutation, ShopDeleteMutationVariables>;
export type ShopDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ShopDeleteMutation, ShopDeleteMutationVariables>, 'mutation'>;

    export const ShopDeleteComponent = (props: ShopDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<ShopDeleteMutation, ShopDeleteMutationVariables> mutation={ShopDeleteDocument} {...props} />
    );
    
export type ShopDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ShopDeleteMutation, ShopDeleteMutationVariables> & TChildProps;
export function withShopDelete<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ShopDeleteMutation,
  ShopDeleteMutationVariables,
  ShopDeleteProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ShopDeleteMutation, ShopDeleteMutationVariables, ShopDeleteProps<TChildProps>>(ShopDeleteDocument, {
      alias: 'withShopDelete',
      ...operationOptions
    });
};

    export function useShopDeleteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ShopDeleteMutation, ShopDeleteMutationVariables>) {
      return ApolloReactHooks.useMutation<ShopDeleteMutation, ShopDeleteMutationVariables>(ShopDeleteDocument, baseOptions);
    };
export type ShopDeleteMutationHookResult = ReturnType<typeof useShopDeleteMutation>;
export type ShopDeleteMutationResult = ApolloReactCommon.MutationResult<ShopDeleteMutation>;
export type ShopDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<ShopDeleteMutation, ShopDeleteMutationVariables>;
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
export type ShopItemComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ShopItemQuery, ShopItemQueryVariables>, 'query'> & ({ variables: ShopItemQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ShopItemComponent = (props: ShopItemComponentProps) => (
      <ApolloReactComponents.Query<ShopItemQuery, ShopItemQueryVariables> query={ShopItemDocument} {...props} />
    );
    
export type ShopItemProps<TChildProps = {}> = ApolloReactHoc.DataProps<ShopItemQuery, ShopItemQueryVariables> & TChildProps;
export function withShopItem<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ShopItemQuery,
  ShopItemQueryVariables,
  ShopItemProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ShopItemQuery, ShopItemQueryVariables, ShopItemProps<TChildProps>>(ShopItemDocument, {
      alias: 'withShopItem',
      ...operationOptions
    });
};

    export function useShopItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ShopItemQuery, ShopItemQueryVariables>) {
      return ApolloReactHooks.useQuery<ShopItemQuery, ShopItemQueryVariables>(ShopItemDocument, baseOptions);
    };
      export function useShopItemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ShopItemQuery, ShopItemQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<ShopItemQuery, ShopItemQueryVariables>(ShopItemDocument, baseOptions);
      };
      
export type ShopItemQueryHookResult = ReturnType<typeof useShopItemQuery>;
export type ShopItemQueryResult = ApolloReactCommon.QueryResult<ShopItemQuery, ShopItemQueryVariables>;
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
export type ShopListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ShopListQuery, ShopListQueryVariables>, 'query'>;

    export const ShopListComponent = (props: ShopListComponentProps) => (
      <ApolloReactComponents.Query<ShopListQuery, ShopListQueryVariables> query={ShopListDocument} {...props} />
    );
    
export type ShopListProps<TChildProps = {}> = ApolloReactHoc.DataProps<ShopListQuery, ShopListQueryVariables> & TChildProps;
export function withShopList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ShopListQuery,
  ShopListQueryVariables,
  ShopListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ShopListQuery, ShopListQueryVariables, ShopListProps<TChildProps>>(ShopListDocument, {
      alias: 'withShopList',
      ...operationOptions
    });
};

    export function useShopListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ShopListQuery, ShopListQueryVariables>) {
      return ApolloReactHooks.useQuery<ShopListQuery, ShopListQueryVariables>(ShopListDocument, baseOptions);
    };
      export function useShopListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ShopListQuery, ShopListQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<ShopListQuery, ShopListQueryVariables>(ShopListDocument, baseOptions);
      };
      
export type ShopListQueryHookResult = ReturnType<typeof useShopListQuery>;
export type ShopListQueryResult = ApolloReactCommon.QueryResult<ShopListQuery, ShopListQueryVariables>;
export const ShopUpsertDocument = gql`
    mutation shopUpsert($input: ShopUpsertInput!) {
  shop {
    upsert(input: $input) {
      id
    }
  }
}
    `;
export type ShopUpsertMutationFn = ApolloReactCommon.MutationFunction<ShopUpsertMutation, ShopUpsertMutationVariables>;
export type ShopUpsertComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ShopUpsertMutation, ShopUpsertMutationVariables>, 'mutation'>;

    export const ShopUpsertComponent = (props: ShopUpsertComponentProps) => (
      <ApolloReactComponents.Mutation<ShopUpsertMutation, ShopUpsertMutationVariables> mutation={ShopUpsertDocument} {...props} />
    );
    
export type ShopUpsertProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ShopUpsertMutation, ShopUpsertMutationVariables> & TChildProps;
export function withShopUpsert<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ShopUpsertMutation,
  ShopUpsertMutationVariables,
  ShopUpsertProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ShopUpsertMutation, ShopUpsertMutationVariables, ShopUpsertProps<TChildProps>>(ShopUpsertDocument, {
      alias: 'withShopUpsert',
      ...operationOptions
    });
};

    export function useShopUpsertMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ShopUpsertMutation, ShopUpsertMutationVariables>) {
      return ApolloReactHooks.useMutation<ShopUpsertMutation, ShopUpsertMutationVariables>(ShopUpsertDocument, baseOptions);
    };
export type ShopUpsertMutationHookResult = ReturnType<typeof useShopUpsertMutation>;
export type ShopUpsertMutationResult = ApolloReactCommon.MutationResult<ShopUpsertMutation>;
export type ShopUpsertMutationOptions = ApolloReactCommon.BaseMutationOptions<ShopUpsertMutation, ShopUpsertMutationVariables>;