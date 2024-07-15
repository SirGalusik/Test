import { useState } from "react";

const RecButton = (props) => {
  const [showMode, setShowMode] = useState(false)

  return (
    <>
      <button onClick={() => setShowMode(!showMode)}>
        Покажи/Скрой свой следующий шаг
      </button>
      <br />
      {showMode ? <RecButton /> : null}
    </>
  )
}

export default RecButton;