import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/default';
import { productRouter } from './routes/product.route';

const app = express();

const PORT = config.port;
const mongodbUri: string = config.mongodbUri!;

app.use(cors());

app.use('/api/products', productRouter);

async function start() {
	try {
		await mongoose.connect(mongodbUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		app.listen(PORT, () => {
			console.log(`server started at http://localhost:${PORT}`);
		});
	} catch (err) {
		console.log('ERROR:', err);
	}
}

start();
