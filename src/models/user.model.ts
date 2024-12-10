import { pool } from '../config/database'
import { User } from '../interface/user'

const create = async( email: string, password: string) => {
  const query = {
    text: "INSERT INTO users(email, password) VALUES($1, $2) RETURNING *",
    values: [email, password], 
  }
}