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
        RETURNING id,userid, content
        `;
        const values = [
            Item.userid,
            Item.content
        ]
        const {rows} = await db.query(query,values)
        const [newItem] = rows
        return {
            id:newItem.id,
            userid:newItem.userid,
            content:newItem.content
        }
    }
    async read(userId:string){
        const query = `
        SELECT * FROM cart_items WHERE userid='${userId}'
        `;
        const {rows} = await db.query(query)
        return rows || []
    }
    async delete(id:any){
        const query = `
        DELETE FROM cart_items WHERE id = '${id}'
        `;
        const {rows} = await db.query(query)
        return rows || []
    }
 
}
export {CartService}