import { Client } from 'pg';

export interface ApplicationContext {
  db: Client;
}
