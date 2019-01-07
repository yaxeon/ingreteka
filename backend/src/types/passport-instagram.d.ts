/// <reference types="passport-instagram"/>

import passport from "passport";
import express from "express";

export interface Profile extends passport.Profile {
  id: string;
  displayName: string;
  username?: string;
  _raw: string;
  _json: any;
}

interface IStrategyOptions {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
}

interface IStrategyOptionsWithRequest extends IStrategyOptions {
  passReqToCallback: true;
}

export type VerifyFunction = (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: (error: any, user?: any) => void
) => void;

export type VerifyFunctionWithRequest = (
  req: express.Request,
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: (error: any, user?: any) => void
) => void;

declare class Strategy extends PassportStrategy {
  constructor(
    options: IStrategyOptionsWithRequest,
    verify: VerifyFunctionWithRequest
  );
  constructor(options: IStrategyOptions, verify: VerifyFunction);

  name: string;
  authenticate(req: express.Request, options?: object): void;
}
