import db from "../db";

interface iProduct {
    title:string,
    titlecolor:string,
    name:string,
    imgs:{},
    sizes:{}
    price:number,
    description:string
}

 
class ProductService{

    async create(product:iProduct){
        const query = `
        INSERT INTO products(
            title,
            titlecolor,
            name,
            imgs,
            sizes,
            price,
            description
        ) VALUES($1,$2,$3,$4,$5,$6,$7)
        `;
        const values = [
            product.title,
            product.titlecolor,
            product.name,
            product.imgs,
            product.sizes,
            product.price,
            product.description
        ]
        const {rows} = await db.query(query,values)
        const [newProduct] = rows;
        return newProduct
    }

    async read(id:string){
        const query = `
        SELECT * FROM products WHERE id='${id}'
        `;
        const {rows} = await db.query(query)
        return rows || []

    }

    async findAll(){
        const query = `
        SELECT * FROM products
        `
        const {rows} = await db.query(query)
        return rows || [];
    }
}
export {ProductService}