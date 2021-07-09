import { Request, Response } from 'express';
import { IProduct, Product } from '../models/product.model';

export const productController = {
	async getProducts(_: Request, res: Response) {
		try {
			const products: IProduct[] = await Product.find({});

			res.json(products);
		} catch (err) {
			console.log(err);
			return res.status(500).json({ message: 'Can not get products' });
		}
	},

	async getProduct(req: Request, res: Response) {
		try {
			const productId = req.params.id as string;

			const product: IProduct | null = await Product.findOne({
				_id: productId,
			});

			if (!product) {
				return res.status(400).json({ message: 'Product not found' });
			}

			res.json(product);
		} catch (err) {
			console.log(err);
			return res
				.status(500)
				.json({ message: 'Can not get this product' });
		}
	},
};
