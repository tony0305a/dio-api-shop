import { Request, Response } from "express";
import { RatingService } from "../services/RatingService";
const ratingService = new RatingService();

class RatingController {
  async create(req: Request, res: Response) {
    const prodid = req.body.prodid;
    const userid = req.body.userid
    const stars = req.body.stars;

    const rate = await ratingService.create({ prodid: prodid,userid:userid, stars: stars });

    return res.status(201).json(rate);
  }
  async read(req:Request,res:Response) {
    const {id} = req.params
    const rate = await ratingService.read(id)
    return res.status(200).json(rate)
  }
  async validate(req:Request,res:Response){
    const {prodid} = req.params
    const {userid} = req.params
    const rate = await ratingService.validate(userid,prodid)
    return res.status(200).json(rate)

  }  
}
export { RatingController };
