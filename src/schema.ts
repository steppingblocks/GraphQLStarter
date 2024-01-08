import { createSchema } from 'graphql-yoga';
import { resolvers } from './resolvers';
import { ApplicationContext } from './types';

export const schema = createSchema<ApplicationContext>({
  typeDefs: /* GraphQL */ `
    type User {
      id: ID!
      first_name: String
      last_name: String
    }
    input CreateUserInput {
      first_name: String!
      last_name: String!
    }
    type Query {
      hello: String!
      users: [User]!
    }
    type Mutation {
      createUser(params: CreateUserInput!): User!
    }
  `,
  resolvers,
});
