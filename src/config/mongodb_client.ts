

import { MongoClient, Db } from "mongodb";


let mongoDb: Db


export async function connectToDatabase() {
    const url = 'mongodb+srv://stepboomz:123456zz@cluster0.7q1nu2x.mongodb.net/'
    const client = new MongoClient(url);
    mongoDb = client.db("notedb")
    console.log("mongodb connected successfully")
}

export function getDatabase(): Db {
    return mongoDb
}