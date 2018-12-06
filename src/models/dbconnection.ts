import { connect, connection } from 'mongoose';
//const mongoose = require( 'mongoose' );

var dbURI = "mongodb://localhost/trainingApp";

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
