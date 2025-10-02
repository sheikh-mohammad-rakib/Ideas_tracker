import { Client, TablesDB, Account, Databases } from "appwrite";

const client = new Client();
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setDevKey(import.meta.env.VITE_APPWRITE_DEV_KEY);

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
export const databases = new Databases(client);
