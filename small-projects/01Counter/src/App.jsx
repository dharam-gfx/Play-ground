import { useState } from 'react'

const App = () => {
  let [counter, setCounter] = useState( 0 );

  const increment = () => {
    if (counter > 19) return;
    setCounter( counter + 1 );
  }
  const decrement = () => {
    if ( counter < 1 ) return;
    setCounter( counter - 1 );
  }

  return (
    <div>
      <h1> Counter Value : {counter}</h1>

      <button onClick={increment}>Increment Counter</button>
      <button onClick={decrement}> Decrement Counter</button>
    </div>
  )
}

export default App