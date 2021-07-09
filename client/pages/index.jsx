import Cards from '../components/Cards';
import styles from '../styles/Home.module.scss';
import { getProducts } from './api/products';

const HomePage = ({ products }) => {
	return (
		<main className={styles.container}>
			<h1 className={styles.heading}>Products</h1>

			<Cards products={products} />
		</main>
	);
};
export default HomePage;

export async function getStaticProps() {
	const products = await getProducts();
	return { props: { products } };
}
