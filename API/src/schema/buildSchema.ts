import { typeDefs as customTypeDefs } from "./schema";
import {
  makeRemoteExecutableSchema,
  mergeSchemas,
  introspectSchema,
  makeExecutableSchema,
} from "apollo-server";
import { HttpLink } from "apollo-link-http";
import { applyMiddleware } from "graphql-middleware";
import { postgraphile } from "postgraphile";
const fetch = require("node-fetch");

export const buildSchema = async () => {
  const postgraphileLink = new HttpLink({
    uri: "http://localhost:5000/graphql",
    fetch,
  });

  const postgraphileSchema = await introspectSchema(postgraphileLink);

  const executablePostgraphileSchema = makeRemoteExecutableSchema({
    schema: postgraphileSchema,
    link: postgraphileLink,
  });

  const customSchema = makeExecutableSchema({
    typeDefs: customTypeDefs,
  });

  const mergedSchema = mergeSchemas({
    schemas: [executablePostgraphileSchema, customSchema],
  });

  return applyMiddleware(mergedSchema);
};
