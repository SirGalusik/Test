import { useState } from "react";

import Content from "./Content";
import RecButton from "./RecButton";

function App(props) {
  const [showMode, setShowNode] = useState(true);

  let content = null;

  const handlerClick = () => {
    setShowNode(!showMode);
  }

  if(showMode) {
    content = <Content />;
  }

  return (
    <div>
      <RecButton />

      <button onClick={handlerClick}>Click here</button>
      {content}
    </div>

  )
}

export default App;
