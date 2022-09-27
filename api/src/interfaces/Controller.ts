import { Request, Response } from 'express';

export interface Controller {
  getAll(req: Request, res: Response): Promise<void>;
  create(req: Request, res: Response): Promise<void>;
  delete(req: Request, res: Response): Promise<void>;
}
