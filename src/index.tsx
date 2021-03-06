import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import apolloClient from "./apollo";
import App from "./Components/App/AppContainer";
import "./global-styles";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
