import Button from "./Button";

function App(props) {
  const handlerThirdClick = () => {
    console.log(1);
  }

  const handlerClick = () => {
    console.log("Click");
  }

  const handlerMouseEnter = () => {
    console.log("Enter");
  }

  return <Button 
            onThirdClick={handlerThirdClick} 
            onClick={handlerClick}
            onMouseEnter={handlerMouseEnter}
        >
            Нажми на меня
        </Button>
}

export default App;
