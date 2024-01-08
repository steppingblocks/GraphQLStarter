import { Client } from 'pg';

export const db = new Client({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

export const connectToClient = async (client: Client) => {
  await client.connect();
  console.info('Connected to Postgres at port', client.port);
};

export const disconnectClient = async (client: Client) => {
  await client.end();
  console.log('Disconnected');
};
