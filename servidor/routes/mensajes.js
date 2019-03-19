var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs');
var mysql = require('mysql');
var http = require('http').Server();

http.listen(9000, function(){
    console.log('listening on *:9000');
  });

