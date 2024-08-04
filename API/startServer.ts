import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import express from "express";
import { typeDefs as customTypeDefs } from "./src/schema/schema";
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
import { buildSchema } from "./src/schema/buildSchema";

export const startServer = async () => {
  const plugins: any = [ApolloServerPluginLandingPageGraphQLPlayground];

  // const mergedSchema: any = await buildSchema();

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
  const apollo = new ApolloServer({
    plugins,
    schema: mergedSchema,
    introspection: true,
  });

  await apollo.start();

  const app = express();

  app.set("trust proxy", true);
  apollo.applyMiddleware({ app });
  const port = process.env.GRAPHQL_PORT || 4443;
  app.listen(port, () => {
    console.log(
      `Server is running at http://localhost:${port}${apollo.graphqlPath}`
    );
  });
};
