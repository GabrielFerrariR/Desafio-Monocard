import { connect } from 'mongoose';
import app from './app';

const DB_URI = 'mongodb+srv://root:root@desafiomonocard.dokf19w.mongodb.net/?retryWrites=true&w=majority';

connect(DB_URI)
	.then(() => {
		app.listen(3001, () => console.log('Running server on port: 3001'));
	})
	.catch((error) => {
		console.log('Connection with database generated an error:\r\n');
		console.error(error);
		console.log('\r\nServer initialization cancelled');
		process.exit(0);
	});
