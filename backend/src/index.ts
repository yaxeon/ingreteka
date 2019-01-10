import dotenv from "dotenv";
dotenv.config();

import debug from "debug";
import { GraphQLServer } from "graphql-yoga";
import passport from "passport";

import "./db";

import { routes as instagramRoutes } from "./auth/instagram";
import { sessions as sessionsConfig } from "./auth/sessions";
import { AuthDirective } from "./graphql/AuthDirective";
import { context } from "./graphql/context";
import { resolvers } from "./graphql/resolvers";

const appLogger = debug("ingreteka:backend");

const server = new GraphQLServer({
  typeDefs: `${__dirname}/../schema.graphql`,
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
