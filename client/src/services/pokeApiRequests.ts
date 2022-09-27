import axios from "axios";
import { Pokemon } from "../interfaces/Pokemon";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export const getRandomPokemon = async () => {
  const randomIndex: string = Math.floor((Math.random() * 150) + 1).toString()
  const { data } = await pokeApi.get(randomIndex)
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    types: data.types.map((type: Record<string, string>) => type.type ),
  } as Pokemon
}

export const getPokemonById = async (id: string) => {
  const { data } = await pokeApi.get(id);
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    types: data.types.map((type: Record<string, string>) => type.type ),
  } as Pokemon
}