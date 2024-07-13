import UserName from './User'
import Clock from './Clock';

function App() {
  const users = [
    {name: 'Atryom', surname: 'Galkin'},
    {name: 'Valya', surname: 'Vizigin'},
    {name: 'Maksim', surname: 'Kolobov'}
  ]

  return (
    <div className="App">
      <UserName user={users[0]}/>
      <UserName user={users[1]}/>
      <UserName user={users[2]}/>

      <Clock />
    </div>
  );
}

export default App;
