import express, { Application } from "express";
import cors from "cors";
import userRoutes from "../routes/users";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    this.middlewares();
    this.routes();
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
