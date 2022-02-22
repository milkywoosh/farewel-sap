import { useState } from 'react';
import './style.css';
import SquareFunc from './squareFunc';



function BoardFunc() {
    const status = "Next player: X";


    const renderSquare = (props) => {
        return <SquareFunc 
                nilai={props} 
                />
    }

    return (
        <div>
            <div className="status"> {status} </div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>

    )

}

export default BoardFunc;