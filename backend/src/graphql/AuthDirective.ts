import { SchemaDirectiveVisitor } from "graphql-tools";
import { defaultFieldResolver, GraphQLField } from "graphql";

export class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;
    const { roles: expectedRoles = [] } = this.args;

    field.resolve = (...args) => {
      const [, , context] = args;

      if (
        expectedRoles.length === 0 ||
        expectedRoles.some((role: string) => context.user.roles.includes(role))
      ) {
        // Call original resolver if role check has passed
        return resolve.apply(this, args);
      }

      return null;
    };
  }
}
