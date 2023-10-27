import { Request, Response } from "express";
import searchServices from "../services/searchServices";

class SearchController{
    findAll(req: Request, res: Response){
        searchServices.findAll(res, req)
    }
}
export default new SearchController