import { useState } from 'react';


function CounterFeatureFunc(props) {
    const [count, setCount] = useState(0)

    let handleIncrement = () => {
        setCount(count+1);
    }

    let getBadgeClasses = () => {
        let classes = 'badge m-2 badge-';
        classes+= (count === 0) ? 'warning' : 'primary';
        // create dynamic css property using react;
        return classes
    }

    let formatCount = () => {
        return (count === 0)? "Zero" : count;
    }


    return(
        <>
            <div>
            <span className={getBadgeClasses} > 
                { formatCount }
            </span>

            <button
                className="btn btn-secondary btn-sm"
                onClick={ handleIncrement }
            >
                Increment
            </button>

            <button
                onClick={ () =>  props.onDelete( props.counter.id )} 
                className="btn btn-danger btn-sm m-2"
            >
                Delete
            </button>

        </ div>

        </>
        
    );
}

export default CounterFeatureFunc;