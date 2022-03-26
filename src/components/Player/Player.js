import { faFutbolBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Player.css'
const Player = ({ player, addToCart }) => {
    const { name, price, img } = player;
    return (
        <div className='player-box'>
            <img src={img} alt="" />
            <div className='player-info'>
                <h2>{name}</h2>
                <p>price: ${price}m</p>
            </div>
            <button onClick={() => addToCart(name)}>
                <p>select player</p>
                <FontAwesomeIcon icon={faFutbolBall}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Player;