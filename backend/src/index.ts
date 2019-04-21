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
import { schema } from "./graphql/schema";
import { staticProxy } from "./minio";

const appLogger = debug("ingreteka:backend");

const server = new ApolloServer({
  schema,
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
