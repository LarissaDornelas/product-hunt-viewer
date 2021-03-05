import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import {
  render,
  cleanup,
  fireEvent,
  getAllByTestId,
} from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom";

import { Home } from "pages/Home";
import { GET_POSTS, useGetPosts } from "hooks/posts/useGetPosts";
import { Order } from "hooks/posts/types";
import { Tab } from "components";

describe("Page: Home", () => {
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

  afterEach(cleanup);

  beforeEach(() => {
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

      expect(result.current.loading).toBeTruthy();
      expect(result.current.error).toBeUndefined();
      expect(result.current.data).toBeUndefined();

      return { result, waitForNextUpdate };
    }

    function setupIntersectionObserverMock({
      root = null,
      rootMargin = "",
      thresholds = [],
      disconnect = () => null,
      observe = () => null,
      takeRecords = () => [
        {
          isIntersecting: true,
          boundingClientRect: { x: 10, y: 20, width: 30, height: 40 },
        } as IntersectionObserverEntry,
      ],
      unobserve = () => null,
    } = {}): void {
      class MockIntersectionObserver implements IntersectionObserver {
        readonly root: Element | null = root;
        readonly rootMargin: string = rootMargin;
        readonly thresholds: ReadonlyArray<number> = thresholds;
        disconnect: () => void = disconnect;
        observe: (target: Element) => void = observe;
        takeRecords: () => IntersectionObserverEntry[] = takeRecords;
        unobserve: (target: Element) => void = unobserve;
      }

      Object.defineProperty(window, "IntersectionObserver", {
        writable: true,
        configurable: true,
        value: MockIntersectionObserver,
      });
    }

    setupIntersectionObserverMock();

    const { result, waitForNextUpdate } = getHookWrapper([requestQueryMock]);

    waitForNextUpdate();

    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
  });

  it("Should render  Home correctly", () => {
    const { getByTestId } = render(
      <MockedProvider mocks={[requestQueryMock]} addTypename={false}>
        <Home></Home>
      </MockedProvider>
    );

    expect(getByTestId("home-container")).toBeInTheDocument();
  });

  it("Should click on tab", () => {
    const tabMock = {
      tabItems: [
        { title: "popular", active: true, value: Order.RANKING },
        { title: "newest", active: false, value: Order.NEWEST },
      ],
      toggleTab: jest.fn(),
    };

    const { getAllByTestId } = render(<Tab {...tabMock}></Tab>);
    const tabItem = getAllByTestId("tab-item");

    const { getByTestId } = render(
      <MockedProvider mocks={[requestQueryMock]} addTypename={false}>
        <Home></Home>
      </MockedProvider>
    );

    fireEvent.click(tabItem[1]);
    expect(tabMock.toggleTab).toBeCalled();

    expect(getByTestId("home-container")).toBeInTheDocument();
  });
});
