import React, { Component } from 'react';
import './style/ticTacToe.css' // css;
import 'bootstrap/dist/css/bootstrap.css';
import Square from './square.jsx';


class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
        }

        this.handleClick = this.handleClick.bind(this);
    }

// by clicking this, the state is STORED in board
// component, not in square anymore
// this is related to IMUTABILITY
    handleClick(i) {
        // using .slice() is to avoiding modify original data
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState( {squares: squares});
    }

    renderSquare(i) {
        // there are 2 PROPS: value and onClick !!!
        return <Square value={ this.state.squares[i] } 
            onClick={ () => this.handleClick(i)}
        />
// Since the Square components no longer maintain state, 
// the Square components receive values from the Board component
// and inform the Board component when they’re clicked.
// In React terms, the Square components are now controlled components. 
// The Board has full control over them.
    }

    render() {
        const status_ = 'Next player: X';
        let styling = {
            marginBottom: "20px"
        }

        return (
            <div>
                <div className='status'> {status_} </div>
                <div style= {styling}> put anything here </div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board;