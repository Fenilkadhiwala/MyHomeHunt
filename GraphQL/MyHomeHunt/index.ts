import express from "express";
import { postgraphile } from "postgraphile";
import PostGraphileConnectionFilterPlugin from "postgraphile-plugin-connection-filter";
import PostGraphileManyCUDPlugin from "postgraphile-plugin-many-create-update-delete";
import { makeAddInflectorsPlugin } from "graphile-utils";
const InflectorsPlugin = makeAddInflectorsPlugin(
  (oldInflectors) => ({
    singularize(string) {
      return string;
    },
  }),
  true
);

const app = express();

const Plugins: any = [
  PostGraphileConnectionFilterPlugin,
  PostGraphileManyCUDPlugin,
  InflectorsPlugin,
];
const DataBaseUrl = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.POSTGRES_DB}`;
// const DataBaseUrl = "postgres://postgres:postgres@localhost:5432/myhomehunt";

app.use(
  postgraphile(DataBaseUrl, "public", {
    appendPlugins: Plugins,
    classicIds: true,
    dynamicJson: true,
    ignoreRBAC: false,
    retryOnInitFail: true,
    watchPg: false,
    graphiql: true,
    includeExtensionResources: true,
    graphileBuildOptions: {
      auditPlugin: {
        dateProps: false,
        nameProps: false,
      },
    },
    pgSettings(request) {
      return {
        "pgmemento.session_info": JSON.stringify({
          userData: request?.headers?.userdata,
        }),
      };
    },
  })
);

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
