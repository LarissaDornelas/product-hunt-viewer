import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { relayStylePagination } from "@apollo/client/utilities";

import * as dotenv from "dotenv";

dotenv.config();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (networkError) console.log(`NetworkError: ${networkError}`);
  if (graphQLErrors)
    if (networkError) console.log(`NetworkError: ${networkError}`);
});

const httpLink = from([
  errorLink,
  new HttpLink({ uri: process.env.REACT_APP_API_URL }),
]);

const authLink = setContext((_: any, { headers }: { headers: any }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`,
  },
}));

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: relayStylePagination(["order"]),
        },
      },
    },
  }),
});
