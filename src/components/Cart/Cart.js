import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'
const Cart = ({ names, showOne, lucky, clear, getDelete }) => {
    return (
        <div className='selection-box'>
            <h2>selected players</h2>
            {
                names.map(name => <h4 key={names.indexOf(name)}> {name}<FontAwesomeIcon onClick={() => getDelete(name)} icon={faDeleteLeft}></FontAwesomeIcon></h4>)
            }
            <p onClick={showOne}>Choose 1 for me</p>
            <h1>{lucky}</h1>
            <p onClick={clear}>Choose again</p>
        </div >
    );
};

export default Cart;