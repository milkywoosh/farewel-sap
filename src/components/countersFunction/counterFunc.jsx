import { useState } from 'react';
import '../../App.css';

function CounterFunc() {
    const [count, setCount] = useState(0);


    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count-1);
        } else {
            setCount(0)
        }
        
    }

    return (
        <div>  
            <p> {count === 0 ? "Zero" : count} </p>
            <button 
            onClick={increment}
            variant="primary"
            >Increment</button>

            <button
            onClick={decrement}
            variant="danger"
            disabled={count===0}
            >
                Decrement
            </button>

        </div>
    )
  

}

export default CounterFunc;