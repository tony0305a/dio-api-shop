import db from "../db";

interface iUser {
  name: string;
  email: string;
  password: string;
}

class UserService {
  async create(user: iUser) {
    const query = `
        INSERT INTO users(
            name,
            email,
            password
        )VALUES($1,$2,$3)
        `;
    const values = [user.name, user.email, user.password];
    const { rows } = await db.query(query, values);
    const [newUser] = rows;
    return newUser;
  }
  async check(email: string) {
    const query = `
        SELECT * FROM users WHERE email='${email}'
        `;
    const { rows } = await db.query(query);
    return rows || [];
  }
  async login(email: string, password: string) {
    const query = `
        SELECT * FROM users WHERE email='${email}' AND password='${password}'
    `;
    const { rows } = await db.query(query);
    return rows || [];
  }
}
export { UserService };
