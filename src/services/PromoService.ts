import db from "../db";

interface iPromo {
  img: string;
}

class PromoService {
  async create(promo: iPromo) {
    const query = `
        INSERT INTO promos(
            img
        ) VALUES($1)
        `;
    const values = [promo.img];
    const { rows } = await db.query(query, values);
    const [newPromo] = rows;
    return newPromo;
  }
  async findAll() {
    const query = `
    SELECT * FROM promos
    `;
    const { rows } = await db.query(query);
    return rows || [];
  }
}
export { PromoService };
