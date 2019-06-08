/* eslint-disable */
import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";
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
export type BrandListQueryVariables = {};

export type BrandListQuery = { __typename?: "Query" } & {
  brand: { __typename?: "BrandQuery" } & {
    list: Array<{ __typename?: "Brand" } & Pick<Brand, "id" | "title">>;
  };
};

export type CategoryListQueryVariables = {};

export type CategoryListQuery = { __typename?: "Query" } & {
  category: { __typename?: "CategoryQuery" } & {
    list: Array<
      { __typename?: "Category" } & Pick<
        Category,
        "id" | "title" | "slug" | "image"
      >
    >;
  };
};

export type SelectionItemQueryVariables = {
  id: Scalars["GraphQLObjectId"];
};

export type SelectionItemQuery = { __typename?: "Query" } & {
  selection: { __typename?: "SelectionQuery" } & {
    item: Maybe<
      { __typename?: "Selection" } & Pick<
        Selection,
        "id" | "title" | "text" | "images" | "relevanceDate"
      > & {
          categories: Array<
            { __typename?: "Category" } & Pick<Category, "title" | "slug">
          >;
          brands: Array<{ __typename?: "Brand" } & Pick<Brand, "title">>;
          shops: Array<{ __typename?: "Shop" } & Pick<Shop, "title">>;
        }
    >;
  };
};

export type SelectionListQueryVariables = {
  filter?: Maybe<SelectionFilterInput>;
};

export type SelectionListQuery = { __typename?: "Query" } & {
  selection: { __typename?: "SelectionQuery" } & {
    list: Array<
      { __typename?: "Selection" } & Pick<
        Selection,
        "id" | "title" | "text" | "images"
      > & {
          categories: Array<
            { __typename?: "Category" } & Pick<Category, "title" | "slug">
          >;
          brands: Array<{ __typename?: "Brand" } & Pick<Brand, "title">>;
          shops: Array<{ __typename?: "Shop" } & Pick<Shop, "title">>;
        }
    >;
  };
};

export type SelectionSearchQueryVariables = {
  filter: SelectionSearchInput;
};

export type SelectionSearchQuery = { __typename?: "Query" } & {
  selection: { __typename?: "SelectionQuery" } & {
    search: Array<
      { __typename?: "Selection" } & Pick<
        Selection,
        "id" | "title" | "text" | "images"
      > & {
          categories: Array<
            { __typename?: "Category" } & Pick<Category, "title" | "slug">
          >;
          brands: Array<{ __typename?: "Brand" } & Pick<Brand, "title">>;
          shops: Array<{ __typename?: "Shop" } & Pick<Shop, "title">>;
        }
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
export type BrandListComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<BrandListQuery, BrandListQueryVariables>,
    "query"
  >,
  "variables"
> & { variables?: BrandListQueryVariables };

export const BrandListComponent = (props: BrandListComponentProps) => (
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
export type CategoryListComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<CategoryListQuery, CategoryListQueryVariables>,
    "query"
  >,
  "variables"
> & { variables?: CategoryListQueryVariables };

export const CategoryListComponent = (props: CategoryListComponentProps) => (
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
export type SelectionItemComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<SelectionItemQuery, SelectionItemQueryVariables>,
    "query"
  >,
  "variables"
> & { variables: SelectionItemQueryVariables };

export const SelectionItemComponent = (props: SelectionItemComponentProps) => (
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
export type SelectionListComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<SelectionListQuery, SelectionListQueryVariables>,
    "query"
  >,
  "variables"
> & { variables?: SelectionListQueryVariables };

export const SelectionListComponent = (props: SelectionListComponentProps) => (
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
export type SelectionSearchComponentProps = Omit<
  Omit<
    ReactApollo.QueryProps<SelectionSearchQuery, SelectionSearchQueryVariables>,
    "query"
  >,
  "variables"
> & { variables: SelectionSearchQueryVariables };

export const SelectionSearchComponent = (
  props: SelectionSearchComponentProps
) => (
  <ReactApollo.Query<SelectionSearchQuery, SelectionSearchQueryVariables>
    query={SelectionSearchDocument}
    {...props}
  />
);

export type SelectionSearchProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<SelectionSearchQuery, SelectionSearchQueryVariables>
> &
  TChildProps;
export function withSelectionSearch<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    SelectionSearchQuery,
    SelectionSearchQueryVariables,
    SelectionSearchProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    SelectionSearchQuery,
    SelectionSearchQueryVariables,
    SelectionSearchProps<TChildProps>
  >(SelectionSearchDocument, {
    alias: "withSelectionSearch",
    ...operationOptions
  });
}

export function useSelectionSearchQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<SelectionSearchQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    SelectionSearchQuery,
    SelectionSearchQueryVariables
  >(SelectionSearchDocument, baseOptions);
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
export type ShopListComponentProps = Omit<
  Omit<ReactApollo.QueryProps<ShopListQuery, ShopListQueryVariables>, "query">,
  "variables"
> & { variables?: ShopListQueryVariables };

export const ShopListComponent = (props: ShopListComponentProps) => (
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
