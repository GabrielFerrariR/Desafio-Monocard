
export interface PokeTypes {
  name: string,
  url: string
}
export interface Pokemon {
  id: number,
  name: string;
  image: string,
  types: PokeTypes[]
}

export interface PokeMongo {
    _id: string,
		pokemonId: number,
		name: string,
		createdAt: string,
		updatedAt: string,
}