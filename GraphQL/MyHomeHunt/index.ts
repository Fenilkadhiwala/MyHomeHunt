const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const playground = require("graphql-playground-middleware-express").default;
const { postgraphile } = require("postgraphile");

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const DataBaseUrl = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.POSTGRES_DB}`;
app.use(
  postgraphile(DataBaseUrl, process.env.POSTGRES_SCHEMA, {
    classicIds: true,
    dynamicJson: true,
    ignoreRBAC: false,
    retryOnInitFail: true,
    watchPg: true,
    graphiql: false,
    includeExtensionResources: true,
    graphileBuildOptions: {
      auditPlugin: {
        dateProps: false,
        nameProps: false,
      },
    },
  })
);

const playgroundPort = process.env.GRAPHQL_LISTEN_PORT || 4443;
app.get(
  "/playground",
  playground({
    endpoint: `/graphql`,
  })
);

app.listen(playgroundPort, () => {
  console.log(`GraphQL Playground running on port ${playgroundPort}`);
});
