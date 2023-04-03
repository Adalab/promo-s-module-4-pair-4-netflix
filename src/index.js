//crear y configurar el servidor.

//imprtamos todos los módulos npm necesarios: npm install express, cors, mysql2
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor //apuntes intro
server.use(cors());
server.use(express.json({limit: '25mb'}));

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//conectar a la base de datos //apuntes mysql+express
const mysql = require('mysql2/promise');
let connection;

mysql
  .createConnection({
    host: 'localhost',
    database: 'mydb',
    user: 'root',
    password: 'Notita28',
  })
  .then(conn => {
    connection = conn;
    connection
      .connect()
      .then(() => {
        console.log('Conectado con el identificador ' + conn.threadId);
      })
      .catch((err) => {
        console.error('Error de conexion: ' + err.stack);
      });
  })
  .catch((err) => {
    console.error('Error de configuración: ' + err.stack);
  });

  //Ahora, tenemos que incorporar el código para lanzar la sentencia select dentro de una función de un endpoint. Añade al final del fichero index.js.
  //en los apuntes pone app.get, pero nosotras la hemos llamado server
  server.get('/movies', (req, res) => {
    console.log('Pidiendo a la base de datos información de las películas.');
    connection
      .query('SELECT * FROM movies')
      .then(([results, fields]) => {
        console.log('Información recuperada:');
        results.forEach((result) => {
          console.log(result);
        });
        res.json({
          success: true,
          movies:  results,
        });
      })
      .catch((err) => {
        throw err;
      });
  });