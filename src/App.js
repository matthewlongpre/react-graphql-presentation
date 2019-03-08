import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import * as bgImage from "./assets/crowd-gnr.jpg";
import Band from "./Band";
import HireBandMember from "./HireBandMember";
import { BackgroundImage, Col, CurrentMembersContainer, H2, HireBandMemberContainer, PageContainer, Row } from "./styled";

const apiUrl = `https://graphqlpresent.herokuapp.com/graphql`

const client = new ApolloClient({
  uri: apiUrl,
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

const muiTheme = createMuiTheme({
  typography: {
    fontFamily: "Karla",
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: `#0e8c94`
    },
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={muiTheme}>
      <BackgroundImage bgImage={bgImage} />
      <PageContainer>
        <Row>
          <Col flex="250px 1 0">
            <H2 style={{ color: `white` }}>Hire a new member</H2>
            <HireBandMemberContainer>
              <HireBandMember />
            </HireBandMemberContainer>
          </Col>
          <Col>
            <H2 style={{ color: `white` }}>Current members</H2>
            <CurrentMembersContainer>
              <Band />
            </CurrentMembersContainer>
          </Col>
        </Row>
      </PageContainer>
    </MuiThemeProvider>
  </ApolloProvider>
);

export default App;
