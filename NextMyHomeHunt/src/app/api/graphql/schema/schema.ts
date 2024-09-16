import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Query {
    greet: String
    hello:String
  }
`;
