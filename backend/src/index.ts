import dotenv from "dotenv";
dotenv.config();

import debug from "debug";
import express from "express";
import passport from "passport";
import { ApolloServer } from "apollo-server-express";

import "./db";
import "./auth/local";

import { sessions as sessionsConfig } from "./auth/sessions";
import { AuthDirective } from "./graphql/AuthDirective";
import { context } from "./graphql/context";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/types";

const appLogger = debug("ingreteka:backend");

const server = new ApolloServer({
  typeDefs,
  resolvers,
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

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 8080 }, () => appLogger("Server is running"));
