import React, { useState } from 'react';



function Counter() {
    let [count, setCount] = useState( 0 );
    const increment = () => setCount( ++count );
    const decrement = () => count > 0 ? setCount( --count ) : setCount( count );
    return (
        <div>
            <h1>{count}</h1>
            <br />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    )
}

export default Counter