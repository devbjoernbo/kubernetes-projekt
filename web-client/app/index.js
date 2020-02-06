import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import apolloClient from "./services/apollo_client/apollo_client";
import AuthenticationProvider from "./context/authentication/auth_provider";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const App = () => {
  const [activeID, setID] = useState(false);

  return (
    <ApolloProvider client={apolloClient}>
      <AuthenticationProvider>
        <GlobalStyle />
        <div>Test WebClient</div>
      </AuthenticationProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
