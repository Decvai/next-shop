import styles from '../styles/Cards.module.scss';
import Card from './Card';

const Cards = ({ products }) => {
	if (!styles.cards) {
		console.log('test');
	}

	return (
		<section className={styles.cards}>
			{products.map(product => (
				<Card product={product} key={product._id} />
			))}
		</section>
	);
};
export default Cards;
