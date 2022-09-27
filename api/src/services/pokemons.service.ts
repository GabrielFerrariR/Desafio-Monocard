import { IModel } from '../interfaces/IModel';
import { Service } from '../interfaces/Service';
import { IPokemon } from '../models/Pokemon';

export class PokemonService implements Service {
	constructor(private _model: IModel<IPokemon>) {}
	async getAll(): Promise<IPokemon[]> {
		const data = await this._model.read();
		return data;
	}
	async create(body: IPokemon): Promise<IPokemon> {
		const data = await this._model.create(body);
		if (!data) throw Error;
		return data;
	}
	async delete(id: string): Promise<IPokemon> {
		const data = await this._model.delete(id);
		if (!data) throw Error;
		return data;
	}

}