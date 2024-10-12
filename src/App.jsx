import GamePlay from "./components/GamePlay";
import StartGame from "./components/startGame";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameStarted = () => {
    setIsGameStarted((prev) => !prev); // Toggle the current state
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGameStarted} />}
    </>
  );
}

export default App;
