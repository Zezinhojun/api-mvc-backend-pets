const express = require('express')
const cors = require('cors');
const app = express()
const petsRouter = require('./routes/pets.routes')
const ownersRouter = require('./routes/owner.routes')

const sequelize = require('./utils/database')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors());

app.use("/api/pets", petsRouter)
app.use("/api/owners", ownersRouter)

//sync database
sequelize.sync().then(result => {
    console.log("Database connected");
    app.listen(3000)
}).catch(err => console.log(err))

const start = async () => {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

start()
module.exports = sequelize;
