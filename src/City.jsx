import { useState } from "react";

const City = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const city = props.cities[currentIndex];

  return (
    <div>
      <h3>{city.name}</h3>
      <textarea 
        value={city.description} 
        onChange={(e) => props.onChangeCity(currentIndex, e.target.value)}
      />
    </div>
  )
}

export default City;