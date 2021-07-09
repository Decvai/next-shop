import { API_URL } from '../../../config';

export const getProducts = async () => {
	const response = await fetch(`${API_URL}/api/products`);
	return response.json();
};
