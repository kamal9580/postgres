import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:wd4P6vDjgaZT@ep-tiny-sunset-a5s3k2fo.us-east-2.aws.neon.tech/neondb?sslmode=require");
    await client.connect();
    return client;
}