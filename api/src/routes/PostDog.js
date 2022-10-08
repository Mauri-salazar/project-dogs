const { Dog , Temper } = require('../db');

const PostDog = async (req,res) => {
  try{

    const {
      name,
      height_max,
      height_min,
      weight_max,
      weight_min,
      life_time_max,
      life_time_min,
      temperament,
      image,
    } = req.body;

    if(!name || !height_max || !height_min || !weight_max || !weight_min || !life_time_max || !life_time_min || !temperament ){
      res.status(403).send('Todos los campos deben ser completados');
    }
    if(isNaN(height_max) || isNaN(height_min) || isNaN(weight_max) || isNaN(weight_min) || isNaN(life_time_max) || isNaN(life_time_min)){
      res.status(403).send('Todos estas propiedades deben ser un numero');
    }
    if(image && image.length > 400){
      res.status(403).send('No se permite una url muy larga');
    }

    const dogCreated = await Dog.create({
      name,
      height_max,
      height_min,
      weight_max,
      weight_min,
      life_time_max,
      life_time_min,
      image,
    });
    const createdTemperament = await Temper.create({name: temperament})
    console.log(dogCreated, createdTemperament)
    dogCreated.addTemper(createdTemperament);
    res.status(200).send("El Perrito ha sido creado con exito");
  }
  catch(error){
    console.log("Se presento un error en el Post", error)
  }
}

module.exports = PostDog;