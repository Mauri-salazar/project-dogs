const getAllDogs = require("../services/GetAllDogs");


const GetDogs = async (req,res) => {
  const name = req.query.name;
  const DogsTotal = await getAllDogs();

  if(name){
    const dogsName = await DogsTotal.filter( (el) =>
    el.name.toLowerCase().includes(name.toLowerCase())
    );

    dogsName.length ?
    res.status(200).send(dogsName) :
    res.status(404).send('Dog not found');
  }else{
    res.status(200).send(DogsTotal);
  }
};

module.exports = GetDogs;
