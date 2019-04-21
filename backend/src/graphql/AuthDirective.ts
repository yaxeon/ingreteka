import { defaultFieldResolver, GraphQLField } from "graphql";
import { SchemaDirectiveVisitor } from "graphql-tools";

import { ContextGraphql } from "./context";
import { UserRole } from "../models/user";

export class AuthDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, ContextGraphql>) {
    const { resolve = defaultFieldResolver } = field;
    const { roles: expectedRoles } = this.args;

    field.resolve = (...args) => {
      const [, , context] = args;

      if (
        expectedRoles.some((role: UserRole) =>
          context.user ? context.user.roles.includes(role) : false
        )
      ) {
        return resolve.apply(this, args);
      }

      return null;
    };
  }
}
