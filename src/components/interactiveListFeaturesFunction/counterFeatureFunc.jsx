import { useState } from 'react';
import CounterFeatureFunc from './countersMainFunc';

function CounterFunc() {

    const [countData, setCountData] = useState([
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ])

    let handleDelete = (counterId) => {
        const deletingList = countData.filter((e) => e.id !== counterId);
        setCountData(deletingList);
    }

    return (

        <>
            
                {
                    countData.map(counter =>
                        <CounterFeatureFunc
                            key={counter.id}
                            onDelete={handleDelete}
                            counter={counter}
                        />
                    )}

      
        </>

    )
}


export default CounterFunc;