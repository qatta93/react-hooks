import React, {useRef} from 'react'

const RefPage = () => {

  //useRef doesn't rerender component
  //it grabs native HTML elements from JSX
  const inputRef = useRef('')
  // it returns an object {current: 0}

  const focus = () => {
    //@ts-ignore
    inputRef.current.focus()
  } 

  return (
  <>
    <button onClick={focus}></button>
    {/* @ts-ignore */}
    <input ref={inputRef} value={''}></input>
  </>
  )
}

export default RefPage;