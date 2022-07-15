import { Request, Response } from "express";
import { PromoService } from "../services/PromoService";
const promoService = new PromoService
class PromoController{

    async create(req:Request,res:Response){
        const img = req.body.img
        const promo = await promoService.create({img:img})
        return res.status(201).json(promo)
    }
    async findAll(req:Request,res:Response){
        const promos = await promoService.findAll()
        return res.status(200).json(promos)
    }
}
export {PromoController}