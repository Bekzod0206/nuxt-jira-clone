import { Client, Account, ID, Databases } from 'appwrite';
const client = new Client();
client.setProject('6744c028002b94d56a0d');

export const ACCOUNT = new Account(client)
export const DATABASE = new Databases(client)
export const UNIQUE_ID = ID.unique()