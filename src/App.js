import { useState } from "react";

import Cities from "./Cities";
import City from "./City";

function App(props) {
  const [cities, setCities] = useState([
    {name: "Москва", description: "Столица России"},
    {name: "Зеленоград", description: "Научный спутник России"},
  ])

  const handlerChangeCity = (n, description) => {
    setCities(
      cities.map((city, index) => {
        if(index === n) {
          return {
            ...city,
            description,
          } 
        } else {
          return city;
       }
      })
    )
  }
  
  return (
    <div>
      <City cities={cities} onChangeCity={handlerChangeCity}/>
      <Cities cities={cities}/>
    </div>
  )
}

export default App;
