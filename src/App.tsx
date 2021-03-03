import React from "react";
import { ApolloProvider } from "@apollo/client";

import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { client } from "services/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Home />
    </ApolloProvider>
  );
}

export default App;
