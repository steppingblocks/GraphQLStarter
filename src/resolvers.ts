import { ApplicationContext } from './types';

const DB_QUERIES = {
  users: `select first_name,last_name,id from "Users"`,
  createUser: `insert into "Users" (first_name,last_name) values($1,$2) returning id,first_name,last_name`,
};

export const resolvers = {
  Query: {
    hello: () => 'world!',
    users: async (_parent, _args, context: ApplicationContext) => {
      const { db } = context;
      const result = await db.query(DB_QUERIES.users);

      return result.rows;
    },
  },
  Mutation: {
    createUser: async (_parent, args, context: ApplicationContext) => {
      const {
        params: { first_name, last_name },
      } = args;
      const { db } = context;
      const result = await db.query(DB_QUERIES.createUser, [
        first_name,
        last_name,
      ]);

      return result.rows[0];
    },
  },
};
