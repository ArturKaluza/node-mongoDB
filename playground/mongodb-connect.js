//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

//tworzenie unikatowego ID za pomoca _id mongoDB
// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    err ? console.log('Unable to connect mongoDB server') : console.log('Connected to mongoDB');

    // db.collection('Todos').insertOne({
    //     text: 'somthing to do',
    //     complete: false
    // }, (err, result) => {
    //     if (err) return console.log('Unable to insert Todos');
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Artur',
    //     age: 31,
    //     location: 'Katowice'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert User', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
})