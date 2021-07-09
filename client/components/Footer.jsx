import styles from '../styles/Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			© COPYRIGHT <span className={styles.name}>HEBEBER</span> LOREM IPSUM{' '}
			{new Date().getFullYear()}
		</footer>
	);
};

export default Footer;
