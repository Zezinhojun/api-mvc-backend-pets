const express = require('express')
const { getAllPets, getOnePet, createPets, deleteOnePet, updatePet } = require('../controllers/petController')
const router = express.Router()

//get all pets
router.get('/', getAllPets)

//create
router.post('/:id/create-new-pet', createPets)

//get one pet
router.get('/:id', getOnePet)

//update one pet
router.put('/:id', updatePet);

//delete one pet
router.delete('/:id', deleteOnePet)

module.exports = router