import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { buildSchema } from "./schema/buildSchema";
import { Pool, PoolClient } from "pg";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "@apollo/server-plugin-landing-page-graphql-playground";

const startServer = async () => {
  interface MyContext {
    pgClient: PoolClient;
  }

  const pool = new Pool({
    connectionString: "postgresql://postgres:postgres@postgres:5432/myhomehunt",
  });
  const mergedSchema: any = await buildSchema(pool);

  const server = new ApolloServer({
    schema: mergedSchema,
    introspection: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        endpoint: "/api/graphql",
      }),
    ],
  });

  const handler = startServerAndCreateNextHandler(server, {
    context: async (): Promise<MyContext> => {
      const pgClient = await pool.connect();
      return { pgClient };
    },
  });

  return handler;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (req: NextRequest) => {
  const handler = await startServer();
  return handler(req);
};

export const GET = async (req: NextRequest) => {
  const handler = await startServer();
  return handler(req);
};
