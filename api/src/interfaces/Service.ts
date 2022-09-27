import { IPokemon } from '../models/Pokemon';

export interface Service {
  getAll(): Promise<IPokemon[]>;
  create(body: IPokemon): Promise<IPokemon>;
  delete(id: string): Promise<IPokemon>;
}
