const express = require('express')
const { createOwner, getAllOwners, getOneOwner, updateOwner, deleteOwner, getAllPetsOfOwner } = require('../controllers/ownerController')
const router = express.Router()

//getAll
router.get('/', getAllOwners)

//create
router.post('/create-new-owner', createOwner)

//get one owner
router.get('/:id', getOneOwner)

//update one owner
router.put('/:id', updateOwner)

//delete one owner
router.delete('/:id', deleteOwner)

//get all pets of owner
router.get('/:id/pets', getAllPetsOfOwner)

module.exports = router