import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getCart } from '../redux/cartSlice';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
	const cart = useSelector(getCart);

	return (
		<nav className={styles.navbar}>
			<h6 className={styles.logo}>
				<Link href='/'>hebeber.</Link>
			</h6>
			<ul className={styles.menu}>
				<li className={styles.link}>
					<Link href='/cart'>{`Cart (${cart.length})`}</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
