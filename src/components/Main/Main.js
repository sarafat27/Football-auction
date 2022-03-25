import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Main.css'
const Main = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <div className='main-container'>
            <div className='players-container'>
                {
                    players.map(player => <Player key={player.id} player={player}></Player>)
                }
            </div>
            <div className='selection-area'>

            </div>
        </div>
    );
};

export default Main;