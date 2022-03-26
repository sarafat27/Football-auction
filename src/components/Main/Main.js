import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Main.css'
const Main = () => {
    const [players, setPlayers] = useState([])
    const [name, setName] = useState([])
    const [lucky, setLucky] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    const addToCart = (selectedPlayerName) => {
        const orders = [...name, selectedPlayerName];
        setName(orders)
    }

    const showOne = () => {
        const randomNumber = Math.floor(Math.random() * name.length)
        const luckyOne = name[randomNumber];
        setLucky([luckyOne])
    }

    const clearCart = () => {
        setName([]);
    }

    return (
        <div className='main-container'>
            <div className='players-container'>
                {
                    players.map(player => <Player addToCart={addToCart} key={player.id} player={player}></Player>)
                }
            </div>
            <div className='selection-area'>
                <Cart lucky={lucky} clear={clearCart} names={name} showOne={showOne}></Cart>
            </div>
        </div>
    );
};

export default Main;