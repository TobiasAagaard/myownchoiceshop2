import { Sequelize } from "sequelize";

const sequelize = new Sequelize (
    process.env.DBNAME,
    process.env.DBUSER,
    process.env.DBPASSWD,
    {
        host: process.env.DBHOST,
        dialect: "mysql"
    }
)


export { sequelize }