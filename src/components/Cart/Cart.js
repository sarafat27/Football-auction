import React from 'react';
import './Cart.css'
const Cart = ({ names, showOne, lucky, clearCart }) => {
    return (
        <div className='selection-box'>
            <h2>selected players</h2>
            {
                names.map(name => <h4 key={names.indexOf(name)}> {name}</h4>)
            }
            <p onClick={showOne}>Choose 1 for me</p>
            <h1>{lucky}</h1>
            <p onClick={clearCart}>Choose again</p>
        </div >
    );
};

export default Cart;