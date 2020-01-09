// // console.log('Hello World');

// let express = require('express');
// let bodyParser = require('body-parser');
// let app = express();
// let personRoute = require('./routes/person/person');


// // let mongoose= require('mongoose');
// // let mongodb = 'mongodb://localhost/firstAPI';
// // mongoose.connect(mongodb, {useMongoClient: true});
// // // mongoose.Promise=global.Promise;
// // // get the default connection
// // let db= mongoose.connection;
// // db.on('connected',()=> {
// //   console.log('mongodb is connected');
// // })

// let db= require('mongodb').Db,
//     MongoClient=require('mongodb').MongoClient,
//     assert= require('assert');



// let dbName= MongoClient.connect("mongodb://localhost:27017/firstAPI1", {native_parser:true}, function(err, database) {
// if(err) console.log('unable to connect db ',err);
// assert.equal(null, err);
// return database.db('firstAPI')
// });

// dbName.collection('userRegistration').find().toArray((err, res)=> {
//     if (!err) {
//         console.log('result from the collection is ', res) ;
       
//     } else {
//         console.log('Error from the collection is ',err);
//     }

// })

// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(personRoute);




// const PORT =process.env.PORT || 3000;
// app.listen(PORT,()=> {
//     console.info(`Node is running on PORT , ${PORT}`);
// })



const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');

const items =require('./routes/api/items');

const app = express();
// Bodyparser middleware
app.use(bodyParser.json());
// DB config

const db =require('./config/keys').mongoURI;

// connect to mongodb

mongoose.connect(db)
.then(()=> console.log('Mongo db is connected '))
.catch(err=> console.log(err));

// Use Routes

app.use('/api/items',items);

const port= process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server is running on port ${port}`));
