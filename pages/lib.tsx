import React from 'react'
// @ts-ignore
import { useCounter, useField } from 'react-hooks-lib'

const LibPage = () => {

  const { count, inc, dec, reset} = useCounter(0);
  // Hook to make getting and setting input values easier. 
  // text is the default value
  const { value, bind } = useField('text')

  return (
    <>
      <div>
        <button onClick={() => inc(1)}>+1</button>
        <button onClick={() => dec(1)}>-1</button>
        <button onClick={() => reset()}>reset</button>
        <p>{count}</p>
      </div>
      <div>
        <input type="text" {...bind}/>
        <select {...bind}>
          <option value="apple">apple</option>
          <option value="orange">orange</option>
        </select>
        <p>{value}</p>
      </div>
    </>
  )
}

export default LibPage;