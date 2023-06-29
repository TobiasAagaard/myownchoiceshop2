import express from "express"
import { sequelize } from "../configs/sequelize.config"

const InitRouter = express.Router();

InitRouter.get('/init', (req, res) => {
    try {
        sequelize.sync()
        res.sendStatus(200)
    }
    catch(err) {
        res.send(err)
    }
})

export default InitRouter