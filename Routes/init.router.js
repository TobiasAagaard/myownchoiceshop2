import express from "express"
import { sequelize } from "../configs/sequelize.config"

const InitRouter = express.Router();

try {
    await sequelize.authenticate();
    console.log("connection is established")
} catch (error) {
    console.error("not established")
}

export default InitRouter