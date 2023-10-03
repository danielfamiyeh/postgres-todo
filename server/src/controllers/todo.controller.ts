import { pool } from '../db';
import { tryCatchAsync } from '../utils/try-catch-async';

export const todoController = {
  create: tryCatchAsync(async (req, res) => {
    const { description } = req.body;

    const {
      rows: [todo],
    } = await pool.query(
      'INSERT INTO todo (description, completed) values($1, $2) RETURNING *',
      [description, false]
    );

    return res.json(todo);
  }),

  getAll: tryCatchAsync(async (req, res) => {
    res.send('getAll todo');
  }),

  get: tryCatchAsync(async (req, res) => {
    res.send('get todo');
  }),

  update: tryCatchAsync(async (req, res) => {
    res.send('update todo');
  }),

  delete: tryCatchAsync(async (req, res) => {
    res.send('delete todo');
  }),
};
