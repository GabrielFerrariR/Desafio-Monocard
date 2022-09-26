import { Schema, model } from 'mongoose';

interface Pokemon {
  pokemonId: number,
  name: string,
}

const pokemonSchema = new Schema<Pokemon>({
	pokemonId: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
}, { versionKey: false, timestamps: true });

export const pokemonModel = model<Pokemon>('Book', pokemonSchema);