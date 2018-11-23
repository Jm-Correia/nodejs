const express = require("express");
//utilizando consign para criacao automatica de rotas
var consign = require('consign');
var bodyParser = require('body-parser');
var validator = require('express-validator');

var app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views/");

app.use(bodyParser.urlencoded({extended :true}));
app.use(validator());


//incluindo no express as rotas pelo consign
consign()
.include('./app/routes')
.then('./config/dbConnection.js')
.then('./app/controllers')
.then('./app/models')
.into(app);

module.exports = app;