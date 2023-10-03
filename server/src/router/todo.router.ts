import { Router } from 'express';
import { controllers } from '../controllers';

const todoRouter = Router();

// Get all todods
todoRouter.get('/', controllers.todoController.getAll);

// Get todo by ID
todoRouter.get('/:id', controllers.todoController.get);

// Create todo
todoRouter.post('/', controllers.todoController.create);

// Update todo
todoRouter.put('/:id', controllers.todoController.update);

// Delete todo
todoRouter.delete('/:id', controllers.todoController.delete);

export { todoRouter };
