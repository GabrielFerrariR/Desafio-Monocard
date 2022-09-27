import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import pokemonRoute from './routes/pokemon.route';
import { errorMiddleWare } from './middleWares/errorMidleware';

const app = express();

app.use(cors());
app.use(express.json());
// app.get('/', (req, res) => res.status(200).json({ message: 'teste'}));
app.use(pokemonRoute);
app.use(errorMiddleWare);

export default app;