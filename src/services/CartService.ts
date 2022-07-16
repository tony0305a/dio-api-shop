import db from "../db";

interface iCartItem {
    userid:number,
    content:{}

}

class CartService{

    async add(Item:iCartItem){
        const query = `
        INSERT INTO cart_items(
            userid,
            content    
        )VALUES($1,$2)
        `;
        const values = [
            Item.userid,
            Item.content
        ]
        const {rows} = await db.query(query,values)
        const [cartItem] = rows
        return cartItem
    }
    async read(userId:string){
        const query = `
        SELECT * FROM cart_items WHERE userid='${userId}'
        `;
        const {rows} = await db.query(query)
        return rows || []
    }
 
}
export {CartService}