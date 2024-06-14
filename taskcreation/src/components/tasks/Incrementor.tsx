import React, { useState } from 'react'

function Incrementor() {
    const [count, setCount] = useState<number>(0)
    const increment = () => {
        let currentCount: number = count;
        setCount(++currentCount)
        if (currentCount > 0) {
            document.getElementById("decrementor")?.removeAttribute("disabled")
        }
    }
    const decrement = () => {
        let currentCount: number = count;
        if (currentCount > 0) {
            setCount(--currentCount)
        } 
        if (currentCount <= 0) {
            document.getElementById("decrementor")?.setAttribute("disabled", "true")
        }
        
    }

  return (
    <>
        <h2>Task 1</h2>
        <h2>Incrementor</h2>
        <div>
            <button onClick={increment}>Increment</button>
                <h3>{count}</h3>
            <button id="decrementor"onClick={decrement}>Decrement</button>
        </div>
       

    </>
    
  )
}

export default Incrementor