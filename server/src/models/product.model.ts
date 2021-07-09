import { Document, model, Schema } from 'mongoose';

export interface IProduct extends Document {
	image: string;
	brand: string;
	name: string;
	price: string;
}

const ProductSchema: Schema = new Schema({
	image: {
		type: String,
		required: true,
	},
	brand: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
});

export const Product = model<IProduct>('Product', ProductSchema);
