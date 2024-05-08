const express = require('express')
const app = express()
const petsRouter = require('./routes/pets.routes')
const ownersRouter = require('./routes/owner.routes')

const sequelize = require('./db')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/pets", petsRouter)
app.use("/api/owners", ownersRouter)

app.listen(3000, () => console.log("Server is running on port 3000"))

const start = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

start()
module.exports = sequelize;
