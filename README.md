# GraphQL Starter Repo

Steppingblocks starter repo for GraphQL API coding challenge.

### Setup Checklist

- [ ] **Node.js Version**
    This project was created with Node v20.2.0. If you use nvm, you can just run `nvm use`, and install this version if you don't have it installed
- [ ] **Install Dependencies**
    `npm install`
- [ ] **Environment Variables**
    Create a `.env` file in the root directory of your project and we'll give you the environment variables you need to fill in
- [ ] **Run the dev script**
    `npm run dev`
- [ ] **GraphQL Playground**
    Go to `http://localhost:4000/graphql` to explore the graph

### Starter Code
The application's entry point is in the `src/index.ts` file. You can look here to find your way around. You'll see a basic node server running a GraphQL application(using [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server/docs))

We've got a couple of basic Queries and Mutations on the `Users` table to get you started.
### Database
You'll be using a Postgres database that we've set up on [Supabase](https://supabase.com/). We've got two tables so far:

* `Users`
* `Posts`

The `Users` have a one-to-many relationship with `Posts`.