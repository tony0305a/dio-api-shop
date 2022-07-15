import { Pool } from "pg";

const connectionString = 'postgres://zjbaserp:RL1nq9fH1aLuUAiOoUePYIcKZcc9KfyJ@kesavan.db.elephantsql.com/zjbaserp'

const db = new Pool({connectionString})

export default db