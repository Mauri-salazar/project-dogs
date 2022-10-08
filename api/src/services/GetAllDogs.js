const { Dog , Temper } = require('../db.js');
const { API_KEY } = process.env;
const axios = require('axios');

//estraigo los datos de mi api externa
const getDogs = async () => {
  const dogs = [];

  const response = await axios.get(`https://api.thedogapi.com/v1/breeds?key=${API_KEY}`);
  response.data.map( (el) => {
    dogs.push({
      id: el.id,
      name: el.name,
      image: el.image.url,
      weight_max: el.weight.metric.split(" - ")[1] && el.weight.metric.split(" - ")[1],
      weight_min: el.weight.metric.split(" - ")[0] !== "NaN"
        ? el.weight.metric.split(" - ")[0]
        : 6,
      height_max: el.height.metric.split(' - ')[1] &&  el.height.metric.split(' - ')[1],
      height_min: el.height.metric.split(" - ")[0] && el.height.metric.split(' - ')[0],
      life_time_max: el.life_span.split(" - ")[1] &&
      el.life_span.split(" - ")[1].split(" ")[0],
      life_time_min: el.life_span.split(" - ")[0] && el.life_span.split(" - ")[0],
      temperament: el.temperament
      ? el.temperament
      : "🐶 Perrito sin Temperamentos 😭",
    });
  });
  return dogs;
}

//accedo a los datoa de las tablas de mi base de datos
const getDBInfo = async () => {
  return await Dog.findAll({
    include: {
      model: Temper,
      attributes: ['name'],
      through: {
        attributes: [], //tomo solo lo que queda en el arreglo atributes
      },
    }
  });
}

//concateno la info de mi base de datos con la info de mi api externa
const getAllDogs = async () => {
  const apiKey = await getDogs();
  const apiDB = await getDBInfo();
  const apiInfoTotal = apiKey.concat(apiDB);

  return apiInfoTotal;
}


module.exports = getAllDogs;