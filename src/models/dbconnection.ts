import { connect, connection } from 'mongoose';
//const mongoose = require( 'mongoose' );

//var dbURI = "mongodb://localhost/trainingApp";
var dbURI = "mongodb://ifspocnodemongo:pQ89JcJVLExJjDu8kciwAgMUm2hTRk5yLvniImJTTvf070xDLMlSGxn2S1aA29kFFTjT3FSlLHUo48Vv8GtUmw==@ifspocnodemongo.documents.azure.com:10255/trainingApp?ssl=true&replicaSet=globaldb";

connect(dbURI, { useNewUrlParser: true });

connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

