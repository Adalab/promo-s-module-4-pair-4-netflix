// const getMoviesFromApi = (params) => {
//   console.log(params);
//   return fetch(`//localhost:4000/movies?genre=${params.genre}&sort=${params.sort}`, {
//     method:"GET",
//     headers:{"Content-Type": "application/json"}, //proyecto grupo
//   })
//     .then(response => response.json())
//     .then(data => {
//       return data;
//     });
// };

// const objToExport = {
//   getMoviesFromApi: getMoviesFromApi
// };

// export default objToExport;

const getMoviesFromApi = (params) => {
  console.log(params);
  return fetch ('//localhost:4000/movies_all_mongo' , {
    method:"GET",
    headers:{"Content-Type": "application/json"}, //proyecto grupo
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi
};

export default objToExport;