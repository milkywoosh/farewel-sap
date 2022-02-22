import { useState } from 'react';
import Board from './boardFunc';
import './style.css';

function GameFunc() {

    return (

        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div></div>
                <ol> </ol>
            </div>
        </div>


    )
}

export default GameFunc;