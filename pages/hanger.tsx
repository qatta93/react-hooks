import React from 'react'
import { useBoolean, useInput, useNumber, useStateful } from 'react-hanger';
import useArray from 'react-hanger/array/useArray';

const HangerPage = () => {

  // USESTATEFUL ---- alternative for useState but without desctructing
  // Too many re-renders. React limits the number of renders to prevent an infinite loop.

  // const name = useStateful('');
  // name.setValue('Patrycja')
  // console.log(name)



  // useBoolean
  // methods: toggle, setTrue, setFalse
  const showCounter = useBoolean(true);



  // useNumber
  // methods: increase(amount = 1), decrease(amount = 1 )
  // options: lowerLimit, upperLimit, loop, step
  const number = useNumber(0, {lowerLimit: 0, upperLimit: 5, loop: true})



  // useInput
  // methods: clear, onChange, eventBind, valueBind
  // properties: hasValue

  const todo = useInput('')



  // useArray
  // methods: push - similar to native doesn't return length tho
      // unshift - similar to native doesn't return length tho
      // pop - similar to native doesn't return element tho
      // shift - similar to native doesn't return element tho
      // clear
      // removeIndex
      // removeById - if array consists of objects with some specific id that you pass all of them will be removed
      // modifyById - if array consists of objects with some specific id that you pass these elements will be modified.
      // move - moves item from position to position shifting other elements.

    const todos = useArray(['test'])
    const newTodo = useInput("");
    console.log(todos)

  return (
    <div>
      <p>{showCounter.value.toString()}</p>
      <button onClick={showCounter.toggle}> toggle counter </button>

      <p>{number.value}</p>
      <button onClick={() => number.increase()}>+1</button>
      <button onClick={() => number.decrease()}>-1</button>

      <p>{todo.value}</p>
      <input type="text" value={todo.value} onChange={todo.onChange} />
      <input {...todo.eventBind} />

      <p>{todos[0]}</p>
      <input type="text" value={newTodo.value} onChange={newTodo.onChange} />
      {/* without [0] in todos it push to a new array! */}
      {/* the state needs to be updated - in onclick function the array is updated */}
      <button onClick={() => {todos[0].push(newTodo.value); newTodo.clear; console.log(todos[0])}}>add todo</button>

    </div>
  )
}

export default HangerPage;