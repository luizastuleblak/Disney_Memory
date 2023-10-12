import React, {useState} from "react";
import Cards from "./components/Cards";

function App() {
	const [key, setKey] = useState(0);
	const startNewGame = () => {
		setKey(prevKey => prevKey + 1)
	};

  return (
	  <div className="App">
		  <h1>Disney Memory</h1>
		  <button onClick={startNewGame}>New game</button>
		  <Cards key={key} />
    </div>
  );
}

export default App;