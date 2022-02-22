import React, { Component } from 'react';
import './style/ticTacToe.css' // css;
import 'bootstrap/dist/css/bootstrap.css';
import Board from './board.jsx';


class Game extends React.Component {
    constructor(props) {
        super(props);
        // shud always IMMUTABLE -> to perform undo feature which is common in all apps
        // also it will be easier to spot the difference changing
        
        this.state = {
          
        };
    }

    render() {
        return (
            <div className="game">
            <div className="game-board">
              <Board />
            </div>
            <div className="game-info">
                <div> cek tes</div>
              <div>{/* status */}</div>
              <ol>{/* TODO */}</ol>
            </div>
          </div>
        )
    }
}

export default Game;