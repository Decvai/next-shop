import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '../components/Card';
import { addToCart } from '../redux/cartSlice';
import styles from '../styles/Product.module.scss';
import { getProductById } from './api/products/[product]';

const ProductPage = ({ product }) => {
	const [quantity, setQuantity] = useState(1);
	const price = (quantity * product.price).toFixed(2);

	const dispatch = useDispatch();

	const increment = () => {
		setQuantity(prev => prev + 1);
	};

	const decrement = () => {
		if (quantity === 1) return;
		setQuantity(prev => prev - 1);
	};

	const addToCartHandler = () => {
		const productWithQuantity = { ...product, quantity };
		dispatch(addToCart(productWithQuantity));
	};

	return (
		<main className={styles.container}>
			<Card product={product} />

			<div className={styles.label}>quantity</div>
			<div className={styles.quantity}>
				<button onClick={decrement}>−</button>
				<div>{quantity}</div>
				<button onClick={increment}>+</button>
			</div>

			<button onClick={addToCartHandler} className={styles.button}>
				Add to Cart • ${price}
			</button>
		</main>
	);
};

export default ProductPage;

export async function getServerSideProps(ctx) {
	const productId = ctx.query.product;
	const product = await getProductById(productId);

	return { props: { product } };
}
