import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import './stylesheets/index.scss';

const mysql = require('mysql2/promise');

mysql
  .createConnection({
    host: 'localhost',
    database: 'mydb',
    user: 'root',
    password: 'Notita28',
  })
  .then(connection => {
    connection
      .connect()
      .then(() => {
        console.log('Conectado con el identificador ' + connection.threadId);
      })
      .catch((err) => {
        console.error('Error de conexion: ' + err.stack);
      });
  })
  .catch((err) => {
    console.error('Error de configuración: ' + err.stack);
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

app.get('/user', (req, res) => {
  console.log('Pidiendo a la base de datos información de los empleados.');
  connection
    .query('SELECT * FROM empleados')
    .then(([results, fields]) => {
      console.log('Información recuperada:');
      results.forEach((result) => {
        console.log(result);
      });

      res.json(results);
    })
    .catch((err) => {
      throw err;
    });
});