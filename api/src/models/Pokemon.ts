import { Schema, model as modelCreate } from 'mongoose';
import MongoModel from './MongoModel';

export interface IPokemon {
  pokemonId: number,
  name: string,
}

const pokemonSchema = new Schema<IPokemon>({
	pokemonId: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
}, { versionKey: false, timestamps: true });



class Pokemon extends MongoModel<IPokemon> {
	constructor(model = modelCreate('Pokemon', pokemonSchema)) {
		super(model);
	}
}

export default Pokemon;
