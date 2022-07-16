import { Request, Response } from "express";
import { CartService } from "../services/CartService";
const cartService = new CartService
class CartController{
    async add(req:Request, res:Response){
        const userid = req.body.userid
        const content = req.body.content

        const add = await cartService.add({userid:userid,content:content})
        return res.status(201).json(add)
    }
    async read(req:Request, res:Response){
        const {userid} = req.params

        const items = await cartService.read(userid)

        return res.status(200).json(items)
    }
 
}
export {CartController}