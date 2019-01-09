require("dotenv").config();

import debug from "debug";
import passport from "passport";
import { GraphQLServer } from "graphql-yoga";

import "./db";
import { sessions as sessionsConfig } from "./auth/sessions";
import { routes as instagramRoutes } from "./auth/instagram";
import { resolvers } from "./graphql/resolvers";
import { context } from "./graphql/context";
import { AuthDirective } from "./graphql/AuthDirective";

const appLogger = debug("guide:app");

const server = new GraphQLServer({
  typeDefs: `${__dirname}/graphql/schema.graphql`,
  resolvers,
  context,
  schemaDirectives: {
    auth: AuthDirective
  }
});

server.use(sessionsConfig);
server.use(passport.initialize());
server.use(passport.session());

server.use("/auth/instagram", instagramRoutes);

server.start(
  {
    port: 8080,
    playground: false,
    uploads: false,
    subscriptions: false,
    endpoint: "/graphql"
  },
  () => appLogger("Server is running")
);
