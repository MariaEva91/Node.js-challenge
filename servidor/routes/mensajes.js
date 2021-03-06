var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs');
var mysql = require('mysql');
var http = require('http');
const fetch = require('node-fetch');

//conexion a la db

var con= mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fizzmod'
});

//consultas

//para seleccionar una tabla y hacer consultas

const server = http.createServer((req,res)=>{
  con.query("SELECT * FROM mensajes",(err,result,fields)=>{
      if(err){
          res.writeHead(400,{"content-type": "text/plain"})
          res.end("Error")
      }
  })
  console.log(fields)
  console.table(results)
  con.query("SELECT * FROM mensajes WHERE id=1",(err,result,field)=>{
    if(err){
      res.writeHead(400,{"content-type": "text/plain"})
      res.end("Error")
    }
  })
  console.log(field)
  

})

//para levantar la conexion entre servidor y base de datos. 
con.connect(err=>{
  if(err){
      console.log(err)
  }
  console.log('se conecto la DB');
  server.listen(9000,()=>{
      console.log('se levanto el web server');
  })
});


module.exports = router;
