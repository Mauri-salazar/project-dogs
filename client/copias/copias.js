const  validate = (input) => {
  const errors = {};

  if (!input.name){
      errors.name = 'Se requiere un nombre';
  }
  if(!input.height_min){
      errors.height_min = 'Se requiere una altura maxima';
  }
  if(!input.height_max){
      errors.height_max = 'Se requiere una altura minima';
  }
  if(input.height_max <= input.height_min){
      errors.height_min = 'Min no puede ser Mayor o Igual que Max';
  }
  if(!input.weight_min){
      errors.weight_min ='Se requiere un peso minimo';
  }
  if(!input.weight_max){
      errors.weight_max = 'Se requiere un peso maxima';
  }
  if(input.weight_max <= input.weight_min){
      errors.weight_min = 'Min no puede ser Mayor o Igual que Max';
  }
  if(!input.life_time_min){
      errors.life_time_min = 'Se requiere una esperanza de vida minima';
  }
  if(!input.life_time_max){
  errors.life_time_max = 'Se requiere una esperanza de vida  maxima';
  }
  if(input.life_time_max <= input.life_time_min){
      errors.life_time_min = 'Min no puede ser Mayor o Igual que Max';
  }
  if(!input.imga ){
      errors.imga = 'Se requiere una URL';
  }
  if(!input.temperament.length){
      errors.temperament = 'Se requieren  Temperamentos';
  }
  return errors
}


//errors.name === "" || errors.height_min === "" || errors.height_max === "" || errors.weight_min === ""
 //            || errors.weight_max === "" || errors.life_time_min === "" || errors.life_time_max || "" || errors.temperament === 0



//  router.delete("/dogs/:name", async (req, res) => {
//     try{
//       const { name } = req.params;
//     const dog = await Dog.destroy({
//       where: { name: { [Op.like]: `%${name}%` } },
//     });
//     res.json(dog);
//   }catch(error){
//     console.log("Se presento un error en la ruta Delete /dogs/:name", error)
//   }
//   });

//op.like operador de sequelize sirve para filtar datos y muestra solo los datos filtrados