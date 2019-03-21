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
    id: 2,
    nombre: 'Maria',
    apellido: 'Garcia',
    nombreUsuario: 'Marita',
    email: 'marita@hotmail.com'
  }];

const messages = [];


// add the routes

router.get('/chat', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
});

router.get('/registro', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'registro.html'))
});

//route to show the users

router.get('/api/users', function (req, res, next) {
  res.json(users);
});

//route to show a user by id

router.get('/api/users/:id', function (req, res, next) {
  const id = req.params.id;

  fetch('https://localhost:8000/api/usuarios' + id)
    .then(res => res.json())
    .then(json => {
      console.log(json)
    let usuarioEnJson = json.data;

    let Usuario = {
      IdUsuario :  usuarioEnJson.Id_usuarios,
      nombre: usuarioEnJson.Nombre,
      apellido: usuarioEnJson.Apellido,
      nombreUsuario: usuarioEnJson.Nombre_de_usuario,
      email: usuarioEnJson.Email,
      status: usuarioEnJson.Id_status
    }

    res.json(Usuario)
   });

})

//route to show the messages

router.get('/api/messages', function (req, res, next) {
  const id = req.params.id;

  fetch('https://localhost:9000/api/mensajes')
    .then(res => res.json())
    .then(json => {
      console.log(json);
      let mensajeEnjson = json.data;
      for (let i = 0; i < mensajeEnjson.length; i++) {

        let Mensaje = {
          idMensaje: mensajeEnjson[i].Id_mensaje,
          cuerpo: mensajeEnjson[i].Cuerpo,
          status: mensajeEnjson[i].Id_status,
          idUsuario: mensajeEnjson[i].Id_usuario
        }
        messages.push(Mensaje);
      }

      res.json(messages)
    });

})


// add new user

router.post('/api/users', function (req, res, next) {
  const user = req.body;
  console.log(user);
  users.push(user);
  res.json(user)

});


//delete a user

router.delete('/api/users/:id', function (req, res, next) {
  const id = req.params.id;

  for (let i = 0; i < users.length; i++) {
    const currentUser = users[i];
    if (id == users.id) {
      users.splice(i, 1)
    }
  }

  res.json(users)
  res.send('ok')

})


module.exports = router;
