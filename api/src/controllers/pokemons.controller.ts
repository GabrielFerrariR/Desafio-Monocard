import { Request, Response } from 'express';
import { Controller } from '../interfaces/Controller';
import { Service } from '../interfaces/Service';

export class PokemonController implements Controller {
	constructor(private _service: Service){}
	async getAll(req: Request, res: Response): Promise<void> {
		const data = await this._service.getAll();
		res.status(200).json(data);
	}
	async create(req: Request, res: Response): Promise<void> {
		const data = await this._service.create(req.body);
		res.status(201).json(data);
	}
	async delete(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		await this._service.delete(id);
		res.status(204).end();
	}

}