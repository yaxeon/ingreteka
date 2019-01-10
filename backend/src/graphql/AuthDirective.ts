import { defaultFieldResolver, GraphQLField } from "graphql";
import { SchemaDirectiveVisitor } from "graphql-tools";

export class AuthDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;
    const { roles: expectedRoles = [] } = this.args;

    field.resolve = (...args) => {
      const [, , context] = args;

      if (
        context.user &&
        expectedRoles.some((role: string) => context.user.roles.includes(role))
      ) {
        // Call original resolver if role check has passed
        return resolve.apply(this, args);
      }

      return null;
    };
  }
}
