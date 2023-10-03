import { Request, Response } from 'express';

export const tryCatchAsync = (
  fn: (req: Request, res: Response) => Promise<void>
) => {
  return (req: Request, res: Response) => {
    fn(req, res).catch((err: Error) => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
  };
};
