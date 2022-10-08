const { Temper } = require('../db.js');
const { API_KEY } = process.env;
const axios = require('axios');

const GetTemperaments = async (req,res) => {
  try {
    const temperaments = await axios.get(`https://api.thedogapi.com/v1/breeds?key=${API_KEY}`);
    const response = temperaments.data.map( (el) => el.temperament );
    const temps = response.toString().split(',');

    temps.forEach( (el) => {
      const i = el.trim();

      Temper.findOrCreate({
        where: {
          name: i,
        }
      })
    });

    const allTemperaments = await Temper.findAll();
    return res.send(allTemperaments);

  }catch(error){
    console.log(error);
  }
}

module.exports = GetTemperaments;