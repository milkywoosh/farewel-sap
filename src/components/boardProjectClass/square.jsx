import React, { Component } from 'react';
import './style/ticTacToe.css' // css;
import 'bootstrap/dist/css/bootstrap.css';

class Square extends React.Component {
    // props is property of React.Component;
    constructor(props) {
        super(props)
        // shud always IMMUTABLE -> to perform undo feature which is common in all apps
        // also it will be easier to spot the difference changing
        this.state = {
            value: null,
        }
    }


    render() {
        let getX = () => {
            if (this.state.value === null) return this.setState({ value: 'X' })
            // else return this.setState( { value: null})
        }

        return (
            <button className='square'
                    // onClick={() => { getX() }}
                    // this.props.onClick() will refer to 
                    // onClick={ handleClick(i)} on renderSquare in board
                    onClick={ () => this.props.onClick() }
                    >
                {/* kapan pake:
                - this.state.value ??
                - this.props.value ?? */}
                {this.props.value}
            </button>
        )
    }
}

export default Square;