import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Item = () => {

	const cart = useContext(CartContext)

	const removeItem = () => {
		cart.pop()
	  }

	
	return (
		<div className="shopping-cart_item">
			<img src={cart.image} alt={`${cart.title} book`} />


			<div>
				<h1>{cart.title}</h1>
				<p>$ {cart.price}</p>
				<button onClick={removeItem}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
