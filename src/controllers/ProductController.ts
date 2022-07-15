import { Request, Response } from "express";
import ProductService from "../services/ProductService";
const productService = new ProductService
class ProductController{
    
    async create(req:Request, res:Response){
        const title = req.body.title
        const titlecolor = req.body.titlecolor
        const name = req.body.name
        const img = req.body.img
        const price = req.body.price
        const description = req.body.description
        const prod = await productService.create({name:name,img:img,price:price,description:description,title:title,titlecolor:titlecolor})
        return res.status(201).json(prod)
    }
    async findAll(req:Request,res:Response){
        const prods = await productService.findAll()
        return res.status(200).json(prods)
    }
}
export  {ProductController} 