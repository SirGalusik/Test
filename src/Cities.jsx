const Cities = (props) => {


  return (
    <ul>
			{props.cities.map((city) => (
				<li key={city.name}>
					{city.name} ({city.description})
				</li>
			))}
    </ul>
  )
}

export default Cities;