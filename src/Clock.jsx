import { useState } from "react"

//Test code

const Clock = () => {
  const [state, setState] = useState({
    title: "Текущее время",
    date: new Date(),
    counter: 0
  })

  setInterval(() => setState({
    title: "Текущее время",
    date: new Date(),
    counter: state.counter + 1
  }), 1000)

  return (
    <div>
        <p>{state.title}</p>
        <p>{state.counter}</p>
        <p>{state.date.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock