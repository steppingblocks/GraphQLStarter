import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import { schema } from './schema';
import { connectToClient, disconnectClient, db } from './db';
import { ApplicationContext } from './types';

async function main() {
  const yoga = createYoga<ApplicationContext>({
    schema,
    context: { db },
  });

  const server = createServer(yoga);
  server.on('close', async () => {
    await disconnectClient(db);
  });

  server.listen(4000, async () => {
    await connectToClient(db);
    console.info('Server is up and running!');
  });
}

main();
