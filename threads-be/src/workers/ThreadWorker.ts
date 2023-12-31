import amqp =  require("amqplib");
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import { AppDataSource } from "../data-source";
import { Thread } from "../entities/Thread";
import { EventEmitter } from "stream";
import { request } from "http";
class ThreadWorker extends EventEmitter {
  async create(queueName: string, connection: amqp.Connection) {
    try {
      const channel = await connection.createChannel();

      await channel.assertQueue(queueName);
      await channel.consume(queueName, async (message) => {
        if (message !== null) {
          try {
            const payload = JSON.parse(message.content.toString());

            console.log("Received message : ", payload);

            const cloudinaryResponse = await cloudinary.uploader.upload(
              "./uploads/" + payload.image
            );

            // const cloudinaryResponse = cloudinary.uploader.unsigned_upload( payload.image, "xsdn7ulq").then((data)=>console.log("berhasil:",data));
            // console.log(cloudinaryResponse,"respon")
            const thread = AppDataSource.getRepository(Thread).create({
              content: payload.content,
              image: cloudinaryResponse.secure_url,
              user: {
                id: payload.user_id,
              },
            });
            // if(thread.image===""){
            //   return thread
            // }
            await AppDataSource.getRepository(Thread).save(thread);

            // request to server
            const req = request({
              hostname: "localhost",
              port: 5000,
              path: "/api/v1/new-thread",
              method: "GET",
            });

            req.on("error", (error) => {
              console.error("Error sending request:", error);
            });

            req.end();

            console.log("Thread is created!");
            channel.ack(message);
          } catch (err) {
            console.log("Process queue is failed : ", err);
          }
        }
      });
    } catch (err) {
      console.log("Error processing queue : ", err);
    }
  }
}

export default new ThreadWorker();
