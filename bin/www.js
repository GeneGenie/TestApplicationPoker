#!/usr/bin/env node
var debug = require('debug')('my-application');
var app = require('../app');
var mongo = require('mongoose');
var mongoose = mongo.connect('mongodb://localhost/poker');


GLOBAL.DB = require('../routes/schemes')(mongoose);
GLOBAL._ = require("underscore")
GLOBAL.ID  = require('shortid');


//app.set('port', process.env.PORT || 80);
app.http().io();

app.listen(80);



var io = app.io;
var lobby  = require('../routes/Lobby')(io)

