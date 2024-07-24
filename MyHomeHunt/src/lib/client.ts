import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://mhh-graphql-api:4443/graphql",
  cache: new InMemoryCache(),
});
