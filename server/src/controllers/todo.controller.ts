import { tryCatchAsync } from '../utils/try-catch-async';

export const todoController = {
  create: tryCatchAsync(async (req, res) => {
    res.send('create todo');
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
