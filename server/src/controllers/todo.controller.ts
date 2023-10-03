import { pool } from '../db';
import { tryCatchAsync } from '../utils/try-catch-async';

export const todoController = {
  create: tryCatchAsync(
    /**
     * Create a new todo
     *
     * @param {Request} req Client request
     * @param {Response} res Server response
     */
    async (req, res) => {
      const { description } = req.body;

      const {
        rows: [todo],
      } = await pool.query(
        'INSERT INTO todo (description, completed) values($1, $2) RETURNING *',
        [description, false]
      );

      return res.json(todo);
    }
  ),

  getAll: tryCatchAsync(
    /**
     * Get all todos
     *
     * @param {Reqeust} req Client request
     * @param {Response} res Server response
     */
    async (req, res) => {
      const { rows } = await pool.query('SELECT * FROM todo');

      return res.json(rows);
    }
  ),

  get: tryCatchAsync(
    /**
     * Get a todo by ID
     *
     * @param {Request} req Client request
     * @param {Response} res Server response
     */
    async (req, res) => {
      const { id } = req.params;

      const {
        rows: [todo],
      } = await pool.query('SELECT * FROM todo WHERE todo_id=$1', [id]);
      return res.json(todo);
    }
  ),

  update: tryCatchAsync(
    /**
     * Update a todo by ID
     *
     * @param {Request} req Client request
     * @param {Response} res Server response
     */
    async (req, res) => {
      const { id } = req.params;
      const { description, completed } = req.body;

      const {
        rows: [todo],
      } = await pool.query(
        'UPDATE todo SET description=$1, completed=$2 WHERE todo_id = $3 RETURNING *',
        [description, completed, id]
      );

      return res.json(todo);
    }
  ),

  delete: tryCatchAsync(
    /**
     * Delete a todo by ID
     *
     * @param {Request} req Client request
     * @param {Response} res Server response
     */
    async (req, res) => {
      const { id } = req.params;
      const { rowCount } = await pool.query(
        'DELETE FROM todo WHERE todo_id=$1',
        [id]
      );

      return res.json(
        `${rowCount ? 'Successfully' : 'Unsuccessfully'} removed todo`
      );
    }
  ),
};
