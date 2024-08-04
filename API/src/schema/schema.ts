import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    getFirstNameByEmail(email: String!): String
    getNameByEmail(email: String!): String
    getLastNameByEmail(email: String!): String
    getHelloNameByEmail(email: String!): String
  }
`;
