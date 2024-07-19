import { useCallback, useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState('message');
  const [counter, setCounter] = useState(0);

  const greeting = useCallback((text) => {
    console.log(text);
  }, []);

  useEffect(() => {
    greeting(message);
  }, [greeting, message]);

  return <button onClick={() => setCounter(counter + 1)}>Счёт - {counter}</button>
}

export default App;