const getAllDogs = require("../services/GetAllDogs");


const GetDogsById =  async (req, res) => {
  try{
  const { id } = req.params;
  const allDog = await getAllDogs();
  if (id) {
    let dogId = await allDog.filter((el) => el.id.toString() === id.toString());
    dogId.length
      ? res.status(200).json(dogId)
      : res.status(404).send("Lo siento, no se encontro el Perrito");
  }
}catch(error){
  console.log("Se presento un error en la ruta get /dogs/:id", error)
}
};


// const GetDogsById = async (req,res) => {
//     const id = req.params.id;
//     if(id) {
//       const dogsId = await returnDog(id);
//       Object.entries(dogsId).length !== 0
//       ? res.status(200).send(dogsId)
//       : res.status(404).send('Dog not found');
//     }
//}

module.exports = GetDogsById;