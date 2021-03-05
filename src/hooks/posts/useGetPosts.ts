import { gql, useQuery } from "@apollo/client";
import { IUseGetPosts } from "./types";

const GET_POSTS = gql`
  query getPosts($first: Int!, $after: String, $order: PostsOrder!) {
    posts(first: $first, after: $after, order: $order) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          name
          votesCount
          description
          thumbnail {
            url
          }
        }
      }
    }
  }
`;

export const useGetPosts = (options: IUseGetPosts): any => {
  const { data, fetchMore, loading, error } = useQuery(GET_POSTS, {
    variables: {
      ...options,
    },
    errorPolicy: "all",
  });

  return {
    data,
    fetchMore,
    loading,
    error,
  };
};
