// const express = require ('express');
// // login

// const app = express (); app.get('/movies', function (res) {
//   res.send('Hello World!');
// });


const getMoviesFromApi = (params) => {
  console.log(params);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(`//localhost:4000/movies?genre=${params.genre}`, {
    method:"GET",
    headers:{"Content-Type": "application/json"}, //proyecto grupo
  })
    .then(response => response.json())
    .then(data => {
  //CAMBIA EL CONTENIDO DE ESTE THEN PARA GESTIONAR LA RESPUESTA DEL SERVIDOR Y RETORNAR AL COMPONENTE APP LO QUE NECESITA
      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi
};

export default objToExport;
