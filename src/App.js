import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Band from "./Band";

import "./App.css";

const client = new ApolloClient({
  uri: `https://bandmembers.herokuapp.com/graphql`,
  link: new HttpLink(),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Band />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
