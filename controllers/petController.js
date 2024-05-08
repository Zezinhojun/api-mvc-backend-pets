const Pet = require("../models/petModel")

//get all pets
const getAllPets = async (req, res) => {
    try {
        const pets = await Pet.findAll({})
        res.status(200).json(pets)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//get one pet
const getOnePet = async (req, res) => {
    try {
        const { id } = req.params
        const pet = await Pet.findByPk(id)
        res.status(200).json(pet)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//create pet
const createPets = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, breed, age, image } = req.body;
        const newPet = await Pet.create({
            name,
            breed,
            age,
            ownerId: id,
            image
        });
        res.status(200).json(newPet)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//delete one pet
const deleteOnePet = async (req, res) => {
    try {
        const { id } = req.params
        const pet = Pet.destroy({ where: { id } })
        if (!pet) res.status(404).json({ message: "Pet not found" })
        res.status(200).json({ message: "Pet deleted sucessfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//update one pet
const updatePet = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findOne({ where: { id } });
        if (!pet) return res.status(404).json({ message: "Pet not found" });
        const [rowsAffected, [updatedPet]] = await Pet.update(req.body, { where: { id }, returning: true });
        if (rowsAffected === 0) res.status(404).json({ message: "Pet not found" });
        res.status(200).json(updatedPet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getAllPets,
    createPets,
    deleteOnePet,
    updatePet,
    getOnePet
}