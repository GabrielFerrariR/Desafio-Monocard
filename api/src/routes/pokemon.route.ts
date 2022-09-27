import { Router } from 'express';
import { PokemonController } from '../controllers/pokemons.controller';
import Pokemon from '../models/Pokemon';
import { PokemonService } from '../services/pokemons.service';

const router = Router();

const pokemons = new Pokemon();
const service = new PokemonService(pokemons);
const controller = new PokemonController(service);

router.get('/pokemons', (req, res) => controller.getAll(req, res));
router.post('/pokemons', (req, res) => controller.create(req, res));
router.delete('/pokemons/:id', (req, res) => controller.delete(req, res));
export default router;