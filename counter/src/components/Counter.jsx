import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0) // creating useState hook 

//   btn handlers
  const incrementBtn = () => setCount(count + 1) // adding 1 to our count when btn is clicked
  const decrementBtn = () => setCount(count + 1) // subtracting 1 from our count when btn is clicked


  return (
    <>
        <div className='container'>
            {/* displaying our count value */}
            <h1 className='number'>Count: {count}</h1> 
        </div>
        <section className='btns-container'>
            {/* Add and subtract btns for our counter  */}
            <button className='incrementBtn' onClick={incrementBtn}>+</button>
            <button className='decrementBtn' onClick={decrementBtn}>-</button>
        </section>
    </>
   
  )
}

export default Counter