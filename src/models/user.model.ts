import { pool } from '../config/database'

const getUserByEmail = async (email: string) => {
  const query = {
    text: `SELECT * FROM users WHERE email = $1`,
    values: [email],
  };
  const { rows } = await pool.query(query);
  console.log(rows);

  return rows[0];
};

const create = async (email: string, password: string) => {
  const query = {
    text: `INSERT INTO users(email, password) VALUES($1, $2) RETURNING *`,
    values: [email, password],
  };
  const { rows } = await pool.query(query);
  console.log(rows);

  return rows[0];
};

const remove = async (email: string) => {
  const query = {
    text: `DELETE FROM users WHERE email = $1 RETURNING *`, 
    values: [email]
  };
  const { rows } = await pool.query(query);
  console.log(rows);
  return rows[0];
};

const update = async (id: string, email: string, password: string) => {
  const query = {
    text: `UPDATE users SET email = $1, password = $2, updated_at = NOW() WHERE id = $3 RETURNING *`,
    values: [email, password, id],
  };
  const { rows } = await pool.query(query);
  console.log(rows);
  return rows[0];
};

export const UserModel = {
  create,
  getUserByEmail,
  remove,
  update
};
