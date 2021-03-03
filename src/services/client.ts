import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

import * as dotenv from "dotenv";

dotenv.config();

console.log(process.env.REACT_APP_API_ACCESS_TOKEN);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      alert(`Graphql error ${message}`);
      return 0;
    });
  }
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
  cache: new InMemoryCache(),
});
