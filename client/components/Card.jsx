import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Card.module.scss';

const Card = ({ product }) => {
	return (
		<div className={styles.card}>
			<div className={styles.wrapper}>
				<Image
					src={product.image}
					alt='Product image'
					width={240}
					height={340}
				/>
			</div>

			<div className={styles.info}>
				<div className={styles.brand}>{product.brand}</div>
				<Link className={styles.name} href={`/${product._id}`}>
					{product.name}
				</Link>
				<div className={styles.price}>${product.price}</div>
			</div>
		</div>
	);
};
export default Card;
