import { Router } from 'express';

import { todoRouter } from './todo.router';

const router = Router();

router.use('/todos', todoRouter);

export { router };