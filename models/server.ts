import express, { Application } from "express";
import cors from "cors";
import userRoutes from "../routes/users";
import database from "../database/connection";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await database.authenticate();
      console.log("Database is running!");
    } catch (error) {
      console.error(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(api.users, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server Running on port ${this.port}`);
    });
  }
}

export default Server;
