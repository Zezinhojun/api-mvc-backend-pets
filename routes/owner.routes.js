const express = require('express')
const { createOwner, getAllOwners, getOneOwner, updateOwner, deleteOwner, getAllPetsOfOwner } = require('../controllers/ownerController')
const router = express.Router()

//create
router.post('/create-new-owner', createOwner)

//getAll
router.get('/', getAllOwners)

//get one owner
router.get('/:id', getOneOwner)

//update one owner
router.put('/:id', updateOwner)

//delete one owner
router.delete('/:id', deleteOwner)

router.get('/:id/pets', getAllPetsOfOwner)

module.exports = router