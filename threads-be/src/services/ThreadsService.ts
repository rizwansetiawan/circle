import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Thread } from "../entities/Thread";
import { Request, Response } from "express";
import { createThreadSchema } from "../utils/validators/thread";

class ThreadsService {
  private readonly threadRepository: Repository<Thread> =
    AppDataSource.getRepository(Thread);
    
    async create(req: Request, res: Response) {
      const filename = req.file.path
      // const filename = res.locals.filename
      const loginSession = res.locals.loginSession
      const data = {
          content: req.body.content,
          image: filename
      }

      const { error } = createThreadSchema.validate(data)
      if (error) {
          return res.status(400).json(error)
      }

      const thread = this.threadRepository.create({
          content : data.content,
          image : data.image,
          user : { id: loginSession.user.id }
      })
      const createdThread = this.threadRepository.save(thread)
      return res.status(200).json(createdThread)
      // const data = req.body
      // const thread = this.threadRepository.create({
      //     content : data.content,
      //     image : data.image
      // })
      // const createdThread = this.threadRepository.save(thread)
      // return res.status(200).json(createdThread)
  }
  async find(reqQuery?: any, loginSession?: any): Promise<any> {
    try {
      const limit = parseInt(reqQuery.limit ?? 0);

      const threads = await this.threadRepository.find({
        relations: ["user", "likes.user", "replies"],
        order: {
          id: "DESC",
        },
        take: limit,
      });

      return threads.map((element) => ({
        id: element.id,
        content: element.content,
        image: element.image,
        posted_at: element.posted_at,
        user: element.user,
        replies_count: element.replies.length,
        likes_count: element.likes.length,
        is_liked: element.likes.some(
          (like: any) => like.user.id === loginSession.user.id
        ),
      }));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findOne(id: number, loginSession?: any): Promise<any> {
    try {
      const thread = await this.threadRepository.findOne({
        where: {
          id: id,
        },
        relations: ["user", "replies", "likes.user"],
      });

      return {
        id: thread.id,
        content: thread.content,
        image: thread.image,
        posted_at: thread.posted_at,
        user: thread.user,
        replies_count: thread.replies.length,
        likes_count: thread.likes.length,
        is_liked: thread.likes.some(
          (like: any) => like.user.id === loginSession.user.id
        ),
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new ThreadsService();
