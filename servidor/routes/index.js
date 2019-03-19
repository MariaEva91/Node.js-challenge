var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs');
var mysql = require('mysql');

const users = [];

// add the routes

router.get('/chat', function(req,res,next){
  res.sendFile(path.join(__dirname,'..','public','index.html'))
});

router.get('/registro', function(req,res,next){
  res.sendFile(path.join(__dirname,'..','public','registro.html'))
});

//route to show the users

router.get('/api/users', function(req, res, next) {
  res.json(users);
});


// add new user

router.post('/api/users',function(req,res,next){
  const user = req.body;
  console.log(user);
  users.push(user);
  res.json(user)

});



module.exports = router;
