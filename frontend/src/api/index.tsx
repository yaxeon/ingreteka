/* eslint-disable */
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
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
  GraphQLObjectId: string,
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

export type CategoryListQueryVariables = {};


export type CategoryListQuery = (
  { __typename?: 'Query' }
  & { category: (
    { __typename?: 'CategoryQuery' }
    & { list: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'title' | 'slug' | 'image'>
    )> }
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
      & Pick<Selection, 'id' | 'title' | 'text' | 'images' | 'relevanceDate'>
      & { categories: Array<(
        { __typename?: 'Category' }
        & Pick<Category, 'title' | 'slug'>
      )>, brands: Array<(
        { __typename?: 'Brand' }
        & Pick<Brand, 'title'>
      )>, shops: Array<(
        { __typename?: 'Shop' }
        & Pick<Shop, 'title'>
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
      & Pick<Selection, 'id' | 'title' | 'text' | 'images'>
      & { categories: Array<(
        { __typename?: 'Category' }
        & Pick<Category, 'title' | 'slug'>
      )>, brands: Array<(
        { __typename?: 'Brand' }
        & Pick<Brand, 'title'>
      )>, shops: Array<(
        { __typename?: 'Shop' }
        & Pick<Shop, 'title'>
      )> }
    )> }
  ) }
);

export type SelectionNewsQueryVariables = {
  limit: Scalars['Int']
};


export type SelectionNewsQuery = (
  { __typename?: 'Query' }
  & { selection: (
    { __typename?: 'SelectionQuery' }
    & { news: Array<(
      { __typename?: 'Selection' }
      & Pick<Selection, 'id' | 'title' | 'updateTitle' | 'relevanceDate' | 'images'>
      & { categories: Array<(
        { __typename?: 'Category' }
        & Pick<Category, 'title' | 'slug'>
      )> }
    )> }
  ) }
);

export type SelectionSearchQueryVariables = {
  filter: SelectionSearchInput
};


export type SelectionSearchQuery = (
  { __typename?: 'Query' }
  & { selection: (
    { __typename?: 'SelectionQuery' }
    & { search: Array<(
      { __typename?: 'Selection' }
      & Pick<Selection, 'id' | 'title' | 'text' | 'images'>
      & { categories: Array<(
        { __typename?: 'Category' }
        & Pick<Category, 'title' | 'slug'>
      )>, brands: Array<(
        { __typename?: 'Brand' }
        & Pick<Brand, 'title'>
      )>, shops: Array<(
        { __typename?: 'Shop' }
        & Pick<Shop, 'title'>
      )> }
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
      alias: 'brandList',
      ...operationOptions
    });
};

/**
 * __useBrandListQuery__
 *
 * To run a query within a React component, call `useBrandListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandListQuery({
 *   variables: {
 *   },
 * });
 */
export function useBrandListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BrandListQuery, BrandListQueryVariables>) {
        return ApolloReactHooks.useQuery<BrandListQuery, BrandListQueryVariables>(BrandListDocument, baseOptions);
      }
export function useBrandListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BrandListQuery, BrandListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BrandListQuery, BrandListQueryVariables>(BrandListDocument, baseOptions);
        }
export type BrandListQueryHookResult = ReturnType<typeof useBrandListQuery>;
export type BrandListLazyQueryHookResult = ReturnType<typeof useBrandListLazyQuery>;
export type BrandListQueryResult = ApolloReactCommon.QueryResult<BrandListQuery, BrandListQueryVariables>;
export const CategoryListDocument = gql`
    query categoryList {
  category {
    list {
      id
      title
      slug
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
      alias: 'categoryList',
      ...operationOptions
    });
};

/**
 * __useCategoryListQuery__
 *
 * To run a query within a React component, call `useCategoryListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoryListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CategoryListQuery, CategoryListQueryVariables>) {
        return ApolloReactHooks.useQuery<CategoryListQuery, CategoryListQueryVariables>(CategoryListDocument, baseOptions);
      }
export function useCategoryListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoryListQuery, CategoryListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CategoryListQuery, CategoryListQueryVariables>(CategoryListDocument, baseOptions);
        }
export type CategoryListQueryHookResult = ReturnType<typeof useCategoryListQuery>;
export type CategoryListLazyQueryHookResult = ReturnType<typeof useCategoryListLazyQuery>;
export type CategoryListQueryResult = ApolloReactCommon.QueryResult<CategoryListQuery, CategoryListQueryVariables>;
export const SelectionItemDocument = gql`
    query selectionItem($id: GraphQLObjectId!) {
  selection {
    item(id: $id) {
      id
      title
      text
      images
      relevanceDate
      categories {
        title
        slug
      }
      brands {
        title
      }
      shops {
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
      alias: 'selectionItem',
      ...operationOptions
    });
};

/**
 * __useSelectionItemQuery__
 *
 * To run a query within a React component, call `useSelectionItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectionItemQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectionItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSelectionItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SelectionItemQuery, SelectionItemQueryVariables>) {
        return ApolloReactHooks.useQuery<SelectionItemQuery, SelectionItemQueryVariables>(SelectionItemDocument, baseOptions);
      }
export function useSelectionItemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SelectionItemQuery, SelectionItemQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SelectionItemQuery, SelectionItemQueryVariables>(SelectionItemDocument, baseOptions);
        }
export type SelectionItemQueryHookResult = ReturnType<typeof useSelectionItemQuery>;
export type SelectionItemLazyQueryHookResult = ReturnType<typeof useSelectionItemLazyQuery>;
export type SelectionItemQueryResult = ApolloReactCommon.QueryResult<SelectionItemQuery, SelectionItemQueryVariables>;
export const SelectionListDocument = gql`
    query selectionList($filter: SelectionFilterInput) {
  selection {
    list(filter: $filter) {
      id
      title
      text
      images
      categories {
        title
        slug
      }
      brands {
        title
      }
      shops {
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
      alias: 'selectionList',
      ...operationOptions
    });
};

/**
 * __useSelectionListQuery__
 *
 * To run a query within a React component, call `useSelectionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectionListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectionListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useSelectionListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SelectionListQuery, SelectionListQueryVariables>) {
        return ApolloReactHooks.useQuery<SelectionListQuery, SelectionListQueryVariables>(SelectionListDocument, baseOptions);
      }
export function useSelectionListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SelectionListQuery, SelectionListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SelectionListQuery, SelectionListQueryVariables>(SelectionListDocument, baseOptions);
        }
export type SelectionListQueryHookResult = ReturnType<typeof useSelectionListQuery>;
export type SelectionListLazyQueryHookResult = ReturnType<typeof useSelectionListLazyQuery>;
export type SelectionListQueryResult = ApolloReactCommon.QueryResult<SelectionListQuery, SelectionListQueryVariables>;
export const SelectionNewsDocument = gql`
    query selectionNews($limit: Int!) {
  selection {
    news(limit: $limit) {
      id
      title
      updateTitle
      relevanceDate
      images
      categories {
        title
        slug
      }
    }
  }
}
    `;
export type SelectionNewsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SelectionNewsQuery, SelectionNewsQueryVariables>, 'query'> & ({ variables: SelectionNewsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SelectionNewsComponent = (props: SelectionNewsComponentProps) => (
      <ApolloReactComponents.Query<SelectionNewsQuery, SelectionNewsQueryVariables> query={SelectionNewsDocument} {...props} />
    );
    
export type SelectionNewsProps<TChildProps = {}> = ApolloReactHoc.DataProps<SelectionNewsQuery, SelectionNewsQueryVariables> & TChildProps;
export function withSelectionNews<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SelectionNewsQuery,
  SelectionNewsQueryVariables,
  SelectionNewsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, SelectionNewsQuery, SelectionNewsQueryVariables, SelectionNewsProps<TChildProps>>(SelectionNewsDocument, {
      alias: 'selectionNews',
      ...operationOptions
    });
};

/**
 * __useSelectionNewsQuery__
 *
 * To run a query within a React component, call `useSelectionNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectionNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectionNewsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSelectionNewsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SelectionNewsQuery, SelectionNewsQueryVariables>) {
        return ApolloReactHooks.useQuery<SelectionNewsQuery, SelectionNewsQueryVariables>(SelectionNewsDocument, baseOptions);
      }
export function useSelectionNewsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SelectionNewsQuery, SelectionNewsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SelectionNewsQuery, SelectionNewsQueryVariables>(SelectionNewsDocument, baseOptions);
        }
export type SelectionNewsQueryHookResult = ReturnType<typeof useSelectionNewsQuery>;
export type SelectionNewsLazyQueryHookResult = ReturnType<typeof useSelectionNewsLazyQuery>;
export type SelectionNewsQueryResult = ApolloReactCommon.QueryResult<SelectionNewsQuery, SelectionNewsQueryVariables>;
export const SelectionSearchDocument = gql`
    query selectionSearch($filter: SelectionSearchInput!) {
  selection {
    search(filter: $filter) {
      id
      title
      text
      images
      categories {
        title
        slug
      }
      brands {
        title
      }
      shops {
        title
      }
    }
  }
}
    `;
export type SelectionSearchComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SelectionSearchQuery, SelectionSearchQueryVariables>, 'query'> & ({ variables: SelectionSearchQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SelectionSearchComponent = (props: SelectionSearchComponentProps) => (
      <ApolloReactComponents.Query<SelectionSearchQuery, SelectionSearchQueryVariables> query={SelectionSearchDocument} {...props} />
    );
    
export type SelectionSearchProps<TChildProps = {}> = ApolloReactHoc.DataProps<SelectionSearchQuery, SelectionSearchQueryVariables> & TChildProps;
export function withSelectionSearch<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SelectionSearchQuery,
  SelectionSearchQueryVariables,
  SelectionSearchProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, SelectionSearchQuery, SelectionSearchQueryVariables, SelectionSearchProps<TChildProps>>(SelectionSearchDocument, {
      alias: 'selectionSearch',
      ...operationOptions
    });
};

/**
 * __useSelectionSearchQuery__
 *
 * To run a query within a React component, call `useSelectionSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectionSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectionSearchQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useSelectionSearchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SelectionSearchQuery, SelectionSearchQueryVariables>) {
        return ApolloReactHooks.useQuery<SelectionSearchQuery, SelectionSearchQueryVariables>(SelectionSearchDocument, baseOptions);
      }
export function useSelectionSearchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SelectionSearchQuery, SelectionSearchQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SelectionSearchQuery, SelectionSearchQueryVariables>(SelectionSearchDocument, baseOptions);
        }
export type SelectionSearchQueryHookResult = ReturnType<typeof useSelectionSearchQuery>;
export type SelectionSearchLazyQueryHookResult = ReturnType<typeof useSelectionSearchLazyQuery>;
export type SelectionSearchQueryResult = ApolloReactCommon.QueryResult<SelectionSearchQuery, SelectionSearchQueryVariables>;
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
      alias: 'shopList',
      ...operationOptions
    });
};

/**
 * __useShopListQuery__
 *
 * To run a query within a React component, call `useShopListQuery` and pass it any options that fit your needs.
 * When your component renders, `useShopListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShopListQuery({
 *   variables: {
 *   },
 * });
 */
export function useShopListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ShopListQuery, ShopListQueryVariables>) {
        return ApolloReactHooks.useQuery<ShopListQuery, ShopListQueryVariables>(ShopListDocument, baseOptions);
      }
export function useShopListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ShopListQuery, ShopListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ShopListQuery, ShopListQueryVariables>(ShopListDocument, baseOptions);
        }
export type ShopListQueryHookResult = ReturnType<typeof useShopListQuery>;
export type ShopListLazyQueryHookResult = ReturnType<typeof useShopListLazyQuery>;
export type ShopListQueryResult = ApolloReactCommon.QueryResult<ShopListQuery, ShopListQueryVariables>;