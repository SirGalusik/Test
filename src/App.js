import { useState } from "react";

function App(props) {
  // const [value, setValue] = useState('Text');
  const [value, setValue] = useState('Яблоко');
  const [checked, setChecked] = useState(false);

  const items = ["Яблоко", "Банан", "Виноград"];

  const handlerChange = (e) => {
    setValue(e.target.value)

    console.log(e.target.value)
  }

  return (
    <div>
      {value}
      <br />
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)}/>

      <br />

      <label>
        Some state
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={() => setChecked(!checked)}
        />
      </label>

      <br />
      
      {/* <ul>
        {items.map((item) => (
          <li key={item}>
            <label>
              <input 
                type="radio" 
                checked={checked === item} 
                onChange={() => setChecked(item)}
              />
                {item}
            </label>
          </li>
        ))}
      </ul> */}

      <select value={value} onChange={handlerChange}>
        <option value={"Яблоко"}>Яблоко</option>
        <option value={"Банан"}>Банан</option>
        <option value={"Виноград"}>Виноград</option>
        <option value={"Арбуз"}>Арбуз</option>
      </select>

    </div>
  )
}

export default App;
