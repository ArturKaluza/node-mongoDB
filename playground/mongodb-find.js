const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    err ? console.log('Unable to connect mongoDB server') : console.log('Connected to mongoDB');
    // all record
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }).catch(err => {
    //     console.log(err);
    // });
    
    /*
    db.collection('Todos').find({complete: true}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch(err => {
        console.log(err);
    });

    // finding by objectID
    db.collection('Todos').find({_id: new ObjectID("5adc634d6c9a1b21b04ca5af")}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch(err => {
        console.log(err);
    });
    */
   // show amount of collection item
    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count: ' + count);
    }).catch(err => {
        console.log(err);
    });
    //db.close();
});