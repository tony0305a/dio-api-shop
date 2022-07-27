import { Router } from "express";
import { CartController } from "./controllers/CartController";
import {ProductController} from "./controllers/ProductController";
import { PromoController } from "./controllers/PromoController";
import { UserController } from "./controllers/UserController";

const router = Router()
const productController = new ProductController()
const promoController = new PromoController()
const userController = new UserController()
const cartController = new CartController()

router.get('/', (req,res)=>{
    res.json({message:'hello'})
})

//Product routes
router.post('/products/add',productController.create)
router.get('/products/:id',productController.read)
router.get('/products',productController.findAll)
//Promo routes
router.post('/promo/add',promoController.create)
router.get('/promo',promoController.findAll)
//User Routes
router.post('/user/add',userController.create)
router.post('/user/check',userController.check)
router.post('/user/login',userController.login)
//Cart Routes
router.post('/cart/add',cartController.add)
router.get('/cart/:userid',cartController.read)
router.delete('/cart/delete/:itemid',cartController.delete)
export default router