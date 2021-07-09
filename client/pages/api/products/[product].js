import { API_URL } from '../../../config';

export const getProductById = async id => {
	const response = await fetch(`${API_URL}/api/products/${id}`);
	return response.json();
};
