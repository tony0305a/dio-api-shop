import db from "../db";

interface iProduct {
    title:string,
    titlecolor:string,
    name:string,
    img:string,
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
            img,
            price,
            description
        ) VALUES($1,$2,$3,$4,$5,$6)
        `;
        const values = [
            product.title,
            product.titlecolor,
            product.name,
            product.img,
            product.price,
            product.description
        ]
        const {rows} = await db.query(query,values)
        const [newProduct] = rows;
        return newProduct
    }
    async findAll(){
        const query = `
        SELECT * FROM products
        `
        const {rows} = await db.query(query)
        return rows || [];
    }
}
export default ProductService