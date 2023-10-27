import * as amqp from "amqplib";
import "dotenv/config";
import { cloudinaryConfig } from "../libs/cloudinary";
import ThreadWorker from "./ThreadWorker";
import { AppDataSource } from "../data-source";

class WorkerHub {
  constructor() {
    AppDataSource.initialize()
      .then(async () => {
        cloudinaryConfig();
        const connection = await amqp.connect("amqp://127.0.0.1");

        // register the worker
        ThreadWorker.create("threads-queue-circle", connection);
      })
      .catch((error) => console.log(error));
  }
}

export default new WorkerHub();
