import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			const itemExists = state.find(
				item => item._id === action.payload._id
			);
			if (itemExists) {
				itemExists.quantity += action.payload.quantity;
			} else {
				state.push({ ...action.payload });
			}
		},
		incrementQuantity: (state, action) => {
			const item = state.find(item => item._id === action.payload);
			item.quantity++;
		},
		decrementQuantity: (state, action) => {
			const item = state.find(item => item._id === action.payload);
			if (item.quantity === 1) {
				const index = state.findIndex(
					item => item._id === action.payload
				);
				state.splice(index, 1);
			} else {
				item.quantity--;
			}
		},
		removeFromCart: (state, action) => {
			const index = state.findIndex(item => item._id === action.payload);
			state.splice(index, 1);
		},
	},
});

export const cartReducer = cartSlice.reducer;

export const getCart = state => state.cart;

export const {
	addToCart,
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
} = cartSlice.actions;
