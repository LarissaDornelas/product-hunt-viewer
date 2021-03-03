import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import * as dotenv from "dotenv";

dotenv.config();

console.log(process.env.REACT_APP_API_ACCESS_TOKEN);

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
});

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
