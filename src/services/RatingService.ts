import db from "../db";

interface Rate {
  prodid: number,
  userid:number,
  stars: number
}

class RatingService {
  async create(rate: Rate) {
    const query = `
            INSERT INTO ratings(
                prodid,
                userid,
                stars
            ) VALUES($1,$2,$3)
        `;
    const values = [rate.prodid,rate.userid, rate.stars];
    const { rows } = await db.query(query, values);
    const [newRate] = rows;
    return newRate || [];
  }
  async read(id: string) {
    const query = `
    SELECT * FROM ratings WHERE prodid='${id}'
    `;
    const { rows } = await db.query(query);
    return rows || [];
  }
  async validate(userid:string,prodid:string){
    const query = `
    SELECT * FROM ratings WHERE prodid='${prodid}' AND userid='${userid}'
    `;
    const {rows} = await db.query(query)
    return rows || []
  }

}
export { RatingService };
