import { useState } from "react";

function App(props) {
  const [counter, setCounter] = useState(0)

  const handlerClick = (event) => {
    setCounter(counter + 1)
  }

  const handlerMouseEnter = (event) => {
    console.log('на мне')
  }

  const handlerMouseLeave = (event) => {
    console.log('вне меня')
  }

  return (
    <button 
      onClick={handlerClick}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      Сколько раз нажали на меня {counter}
    </button>
  )
}

export default App;
