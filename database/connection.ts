import { Sequelize } from "sequelize";

const database = new Sequelize("node", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

export default database;
