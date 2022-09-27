import { Model } from 'mongoose';

import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
	protected _model:Model<T>;

	constructor(model:Model<T>) {
		this._model = model;
	}

	public async create(obj:T):Promise<T> {
		const created = await this._model.create({ ...obj });
		return created as T;
	}

	public async read(): Promise<T[]> {
		const data = await this._model.find();
		return data as T[];
	}

	public async delete(_id: string): Promise<T | null> {
		const deleted = await this._model.findByIdAndDelete({ _id });
		if (!deleted) throw Error;
		return deleted as unknown as T & { _id: string };
	}
}

export default MongoModel;