import dotenv from "dotenv";
dotenv.config();

import debug from "debug";
import express from "express";
import passport from "passport";
import { ApolloServer } from "apollo-server-express";
import { IResolvers } from "graphql-tools";

import "./db";
import "./auth/local";

import { sessions as sessionsConfig } from "./auth/sessions";
import { AuthDirective } from "./graphql/AuthDirective";
import { context } from "./graphql/context";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";
import { staticProxy } from "./minio";

const appLogger = debug("ingreteka:backend");

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as IResolvers,
  context,
  schemaDirectives: {
    auth: AuthDirective
  },
  playground: true
});

const app = express();

app.use(sessionsConfig);
app.use(passport.initialize());
app.use(passport.session());
app.use(staticProxy("/object"));

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 8080 }, () => appLogger("Server is running"));
