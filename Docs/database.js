import { MongoClient } from 'mongodb';
import dns from "dns";

const url="mongodb+srv://gauravyadavpro63_db_user:YoKgH59BY8oA0oLE@cluster0.g1ygsrz.mongodb.net/"
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

const client=new MongoClient(url);
const dbName='coderarmy';

async function main(){
    await client.connect();
    console.log('Connected successfully to server');
    const db=client.db(dbName);
    const collection =db.collection('user');
    return 'done.';
}

main()
.then((result) => console.log(result))
.catch((error)=>console.log(error))
.finally(()=>client.close());

