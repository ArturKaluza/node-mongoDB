const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    err ? console.log('Unable to connect mongoDB server') : console.log('Connected to mongoDB');
    

    // arg (filter, operator, return orginal(boolean), )
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5adc634d6c9a1b21b04ca5af')
    // }, {
    //     $set: {
    //         complete: true
    //     }
    // }, {
    //     returnOrginal: false
    // }).then((res) => {
    //     console.log(res);
    // });
    
    // change name na increment age by 1 (update operators)
    db.collection('Users').findOneAndUpdate({
        name: "Artur"
    }, {
        $set: {
            name: "Jenn"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOrginal: false
    }).then((res) => {
        console.log(res);
    });

    //db.close();
});