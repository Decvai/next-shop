import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
	decrementQuantity,
	getCart,
	incrementQuantity,
	removeFromCart,
} from '../redux/cartSlice';
import styles from '../styles/Cart.module.scss';

const CartPage = () => {
	const cart = useSelector(getCart);

	const dispatch = useDispatch();

	const totalPrice = cart
		.reduce(
			(accumulator, item) => accumulator + item.quantity * item.price,
			0
		)
		.toFixed(2);

	if (cart.length === 0) {
		return (
			<main className={styles.container}>
				<h2>Cart is empty</h2>
			</main>
		);
	}

	return (
		<main className={styles.container}>
			<div className={styles.header}>
				<div>Image</div>
				<div>Name</div>
				<div>Price</div>
				<div>Quantity</div>
				<div>Operations</div>
				<div>Total Price</div>
			</div>
			{cart.map(product => (
				<div className={styles.body} key={product._id}>
					<div className={styles.image}>
						<Image
							className={styles.image}
							src={product.image}
							width='150'
							height='250'
						/>
					</div>
					<p>{product.name}</p>
					<p>$ {product.price}</p>
					<p>{product.quantity}</p>
					<div className={styles.buttons}>
						<button
							onClick={() =>
								dispatch(incrementQuantity(product._id))
							}
						>
							+
						</button>
						<button
							onClick={() =>
								dispatch(decrementQuantity(product._id))
							}
						>
							-
						</button>
						<button
							onClick={() =>
								dispatch(removeFromCart(product._id))
							}
						>
							x
						</button>
					</div>
					<p>${(product.quantity * product.price).toFixed(2)}</p>
				</div>
			))}
			<h2>
				Total price: <span className={styles.bold}>${totalPrice}</span>
			</h2>
		</main>
	);
};
export default CartPage;
