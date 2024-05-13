const Owner = require("../models/ownerModel")
const Pet = require("../models/petModel")

//create owner
const createOwner = async (req, res) => {
    try {
        const { name, phoneNumber } = req.body
        const owner = await Owner.create({ name, phoneNumber })
        res.status(200).json(owner)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//get all owners
const getAllOwners = async (req, res) => {
    try {
        const owners = await Owner.findAll({})
        res.status(200).json(owners)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//get one owner
const getOneOwner = async (req, res) => {
    try {
        const { id } = req.params
        const owner = await Owner.findByPk(id)
        res.status(200).json(owner)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//update one owner
const updateOwner = async (req, res) => {
    try {
        const { id } = req.params
        const owner = await Owner.findOne({ where: { id } });
        if (!owner) res.status(404).json({ message: "Owner not found" })

        const [rowsAffected, [updatedOwner]] = await Owner.update(req.body, { where: { id }, returning: true })

        if (rowsAffected === 0) res.status(404).json({ message: "Owner not found" });

        res.status(200).json(updatedOwner);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//delete one owner
const deleteOwner = async (req, res) => {
    try {
        const { id } = req.params
        const owner = Owner.destroy({ where: { id } })
        if (!owner) res.status(404).json({ message: "Owner not found" })
        res.status(200).json({ message: "Pet deleted sucessfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//get all pets of owner
const getAllPetsOfOwner = async (req, res) => {
    const { id } = req.params;
    try {
        const ownerWithPets = await Owner.findOne({
            where: { id },
            include: [{
                model: Pet,
                as: 'pets',
            }
            ]
        });
        res.json(ownerWithPets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createOwner,
    getAllOwners,
    getOneOwner,
    updateOwner,
    deleteOwner,
    getAllPetsOfOwner
}