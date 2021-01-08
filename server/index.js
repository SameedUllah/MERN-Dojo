import express from 'express';
import bodyParser from 'body-parser';
import mangoose from 'mangoose';
import cors from 'cors';
/*  The syntax below is old ...but in newer versions of node we are able to to use 'import' syntax as written above, 
    to enable this ALL we need to do is that goto package.json and add a line below "main" as   "type": "module", Thats It !

    const express = require('express');
*/

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoder({limit: '30mb', extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://javascriptmastery:icui4cu2o0@cluster0.ig34v.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true});

