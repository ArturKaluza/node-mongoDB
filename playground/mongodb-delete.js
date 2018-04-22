const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    err ? console.log('Unable to connect mongoDB server') : console.log('Connected to mongoDB');
    
    // delete many
    // db.collection('Todos').deleteMany({text: "eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // delete one (delete first item)
    // db.collection('Todos').deleteOne({text: 'runing'}).then((result) => {
    //     console.log(result);
    // });

    // findOne and delete (return removing object)
    db.collection('Todos').findOneAndDelete({complete: false}).then((doc) => {
        console.log(doc);
    });


    //db.close();
});