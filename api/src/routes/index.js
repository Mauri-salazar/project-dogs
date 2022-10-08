const { Router } = require('express');

// Importar todos los routers;
const GetDogs = require('./GetDogs');
const GetDogsById = require('./GetDogsById');
const GetTemperaments = require('./GetTemperaments');
const PostDog = require('./PostDog');

const router = Router();

// Configurar los routers
router.get('/dogs', GetDogs);
router.get('/dogs/:id', GetDogsById);
router.get('/temperaments', GetTemperaments);
router.post('/dogs', PostDog);




module.exports = router;
