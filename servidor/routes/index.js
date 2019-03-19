var express = require('express');
var router = express.Router();
var http = require('http').Server();
var path = require('path');
const fs = require('fs');
var mysql = require('mysql');
var io = require('socket.io')(http);

const users = [
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Perez',
    nombreUsuario: 'Juanete',
    email: 'juanete@gmail.com'
  }, {
    id:2,
    nombre: 'Maria',
    apellido: 'Garcia',
    nombreUsuario: 'Marita',
    email: 'marita@hotmail.com'
  }];

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

//edit user

//delete a user

router.delete('/api/users/:id',function(req,res,next){
  const id = req.params.id;

  for(let i = 0; i < users.length;i++){
    const currentUser = users[i];
    if(id == users.id){
      users.splice(i,1)
    }
  }
  
  res.json(users)
   res.send('ok')
  
})





//io chat

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


module.exports = router;
