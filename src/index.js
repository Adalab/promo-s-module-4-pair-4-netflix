//crear y configurar el servidor.

//imprtamos todos los módulos npm necesarios: npm install express, cors, mysql2
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

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

//conectar a la base de datos

let connection;//guarda la conexión

//crear la conexión: apuntes mysql+express
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
      .catch((err) => { //pintan si hay errores
        console.error('Error de conexion: ' + err.stack);
      });
  })
  .catch((err) => {
    console.error('Error de configuración: ' + err.stack);
  });


//busca por género con if else
server.get('/movies', (req, res) => { //creación de endpoint
  console.log(req.query.genre);
  const genreFilterParam = req.query.genre; //guarda el valor del query param de género
  // console.log(genreFilterParam);

  let sql;
  if (genreFilterParam === ''){
    sql = 'SELECT * FROM movies';
  }else{
    sql = `SELECT * FROM movies WHERE genre LIKE '${genreFilterParam}'`;
  }

  connection //la q se ha declarado más arriba
    .query(sql)//consulta de las pelís de la BD
    .then(([results, fields]) => { //en results guarda el resultado del SELECT
      console.log(results);
      results.forEach((result) => {
      });
      res.json({ //repuesta q envía el endpoint
        success: true,
        movies:  results,
      });
    })
    .catch((err) => { //por si al hacer la petición hay algún error
      throw err;
    });
});


//login
server.post("/login", (req, res) => {
  const userParam = req.body; //guarda los datos del usuario q se están enviando

 const sqlUsers = `SELECT * FROM users WHERE email LIKE '${userParam.email}' AND pasword LIKE '${userParam.password}'`;
  console.log(sqlUsers);

    connection //la q se ha declarado más arriba
    .query(sqlUsers)//consulta de las usuarias de la BD
    .then(([results, fields]) => { //en results guarda el resultado del SELECT
      console.log(results);
      if (results.length === 0){ //al no haber resultados q coincidan devuelve array vacío []
        res.json({
          success: false,
          errorMessage: 'Usuaria/o no encontrado/a'
        })
      }else if (results.length === 1){
        console.log(results[0].idusers)
        res.json({
          success: true,
          userId: results[0].idUsers //devuelve el q esté en primera posición
        })
      }else{
        res.json({ //por si hay más de un usuario con la misma identificación
          success: false,
          errorMessage: 'Hay mas de un usuario con esa identificación'
        })
      }
});
})



//si el buscador fuera por nombre escrito por la usuaria
/*
server.get('/movies, (req,res) => {
  console.log(req, query);
  connection.query('SELECT * FROM games WHERE name LIKE ?', [req.query.filter])
  .then(([results, fields]) => {
    console.log(results);
    res.json(results);
  });
});

('SELECT * FROM games WHERE title LIKE ?', [req.query.filter])---> la parte variable es la q va detrás del LIKE, xq es lo q escribe el usuario,dnd title contenga un valor variable, q van especificados con ?, y detrás definimos el valor de ese valor variable con [req.query.filter]
*/