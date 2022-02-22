import { useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

function SquareFunc(props) {
    

    return(
        <button className="square">
            {props.nilai}
        </button>
    )
}

export default SquareFunc;

