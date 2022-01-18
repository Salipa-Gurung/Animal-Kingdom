const express = require('express');
const mongoose = require('mongoose');
// const Router = require('./routes')

const app = express();

app.use(express.json());

const username = 'salipa_19';
const password = '1LhYQ7A5jJfekHtZ';
const cluster = 'minifyclusters.oesdr';
const dbname = 'animalKingdom_db';

mongoose.connect(    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function (){ 
    console.log('Connected successfully');
});

// app.use(Router);
app.listen(5000, ()=>{
    console.log('Server is running at port 5000');
});