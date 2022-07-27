import { Request, Response } from "express";
import {ProductService} from "../services/ProductService";
const productService = new ProductService
class ProductController{
    
    async create(req:Request, res:Response){
        const title = req.body.title
        const titlecolor = req.body.titlecolor
        const name = req.body.name
        const imgs = req.body.imgs
        const sizes = req.body.sizes
        const price = req.body.price
        const description = req.body.description
        const prod = await productService.create({name:name,imgs:imgs,sizes:sizes,price:price,description:description,title:title,titlecolor:titlecolor})
        return res.status(201).json(prod)
    }
    async read(req:Request, res:Response){
        const {id} = req.params
       
        const prod = await productService.read(id)

        if(id == undefined){
            return res.status(400).json({})
        }

        return res.status(200).json(prod)

        

        return res.status(200).json({})
    }
    async findAll(req:Request,res:Response){
        const prods = await productService.findAll()
        return res.status(200).json(prods)
    }
}
export {ProductController} 