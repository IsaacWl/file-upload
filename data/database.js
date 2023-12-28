const { MongoClient } = require('mongodb');

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
  console.log('Connected successfully');
  database = client.db('file-demo');
}

function getDb() {
  if (!database) throw { message: 'Database not connected!' };
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
// const { MongoClient } = require('mongodb');

// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);
// let db;
// let collection;

// async function connectToDatabase() {
//   await client.connect();
//   console.log('Connected successfully');
//   db = client.db('file-demo');
//   collection = db.collection('files');
// }

// function getDb() {
//   if (!db) throw { message: 'Database error' };
//   return db;
// }

// module.exports = {
//   connectToDatabase,
//   getDb
// }
// const mongoose = require('mongoose');
// async function connectToDatabase() {
//   const uri = 'mongodb://127.0.0.1:27017/file-demo'
//   try {
//     await mongoose.connect(uri);
//     console.log('connected to the mongodb file-demo database');
//   } catch (error) {
//     console.error(error);
//   }
// }

// module.exports = {
//   connectToDatabase
// }