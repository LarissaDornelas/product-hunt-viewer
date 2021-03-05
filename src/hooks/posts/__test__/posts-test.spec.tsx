import { MockedProvider } from "@apollo/client/testing";
import { useGetPosts, GET_POSTS } from "hooks/posts/useGetPosts";
import { renderHook } from "@testing-library/react-hooks";
import { Order } from "hooks/posts/types";
import { ApolloError } from "@apollo/client";
import { GraphQLError } from "graphql";

describe("Hooks: posts", () => {
  const dataMock = {
    data: {
      posts: {
        edges: [
          {
            node: {
              name: "NameTest",
              thumbnail: {
                url: "https://test.com.br",
              },
              description: "test",
              votesCount: 200,
            },
          },
          {
            node: {
              name: "NameTest 2",
              thumbnail: {
                url: "https://test2.com.br",
              },
              description: "test2",
              votesCount: 200,
            },
          },
        ],
        pageInfo: {
          hasNextPage: true,
          endCursor: "MTA=",
        },
      },
    },
    loading: false,
    fetchMore: jest.fn(),
    error: false,
  };

  const apolloError = new ApolloError({
    graphQLErrors: [new GraphQLError("test")],
    networkError: null,
    errorMessage: "GraphQL error: insufficient funds",
  });

  const queryErrorMock = {
    request: {
      query: GET_POSTS,
    },
    error: apolloError,
  };

  const requestQueryMock = {
    request: {
      query: GET_POSTS,
    },
    result: {
      ...dataMock,
    },
  };

  const options = {
    first: 10,
    order: Order.RANKING,
  };

  function getHookWrapper(mocks: any) {
    const wrapper = ({ children }: { children: any }) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    );
    const { result, waitForNextUpdate } = renderHook(
      () => useGetPosts(options),
      {
        wrapper,
      }
    );
    // Test the initial state of the request
    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toBeUndefined();

    return { result, waitForNextUpdate };
  }

  it("should return an array of posts", async () => {
    const { result, waitForNextUpdate } = getHookWrapper([requestQueryMock]);

    waitForNextUpdate();

    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
  });

  it("should error", async () => {
    const { result, waitForNextUpdate } = getHookWrapper([queryErrorMock]);

    waitForNextUpdate();

    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
  });
});
