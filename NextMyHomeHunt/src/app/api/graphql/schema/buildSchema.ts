import { createPostGraphileSchema } from "postgraphile";
import { mergeSchemas, makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./schema";

const resolvers = {
  Query: {
    greet: () => "Hey greet",
    hello: () => "Hey hel",
  },
};

export const buildSchema = async (pool: any) => {
  const postgraphileSchema = await createPostGraphileSchema(pool, "public", {});

  const executableSchema = makeExecutableSchema({
    typeDefs: typeDefs,
  });

  const mergedSchema = mergeSchemas({
    schemas: [postgraphileSchema, executableSchema],
    resolvers,
  });

  // return mergedSchema;
  return postgraphileSchema;
};
