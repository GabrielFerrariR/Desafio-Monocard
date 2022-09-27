import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const errorMiddleWare: ErrorRequestHandler = (
	err: Error,
	req: Request,
	res: Response,
	_next: NextFunction,
) => {
	return res.status(500).json({ message: err.message});
};