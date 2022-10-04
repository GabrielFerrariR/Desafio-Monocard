import { connect } from 'mongoose';
import app from './app';
import * as dotenv from 'dotenv';
dotenv.config();

// optei por criar um banco no Mongodb.com e deixar exposto no código para facilitar as configurações iniciais de quem for avaliar a aplicação, mesmo que isso seja uma má prática. Caso queira usar suas próprias credenciais é só passar uma URI válida em arquivo .env;

const dbURI = process.env.DB_URI;
const PORT = 3002;

connect(dbURI)
	.then(() => {
		app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
	})
	.catch((error) => {
		console.log('Connection with database generated an error:\r\n');
		console.error(error);
		console.log('\r\nServer initialization cancelled');
		process.exit(0);
	});

