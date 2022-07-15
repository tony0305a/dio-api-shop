import { Router } from "express";
import {ProductController} from "./controllers/ProductController";
import { PromoController } from "./controllers/PromoController";

const router = Router()
const productController = new ProductController()
const promoController = new PromoController()

router.get('/', (req,res)=>{
    res.json({message:'hello'})
})

router.post('/products/add',productController.create)
router.get('/products',productController.findAll)

router.post('/promo/add',promoController.create)
router.get('/promo',promoController.findAll)

export default router