import GameCONTAINER from "./Coponents/GameContainer";
import GameBoad from "./Coponents/GameBoard";
import { useState } from "react";
import Log from "./Coponents/Log.jsx";
import { WINNING_COMBINATIONS } from "./Coponents/WINNING_COMBINATIONS.js";
import GameOver from "./Coponents/GameOver.jsx";

const BoardInit = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns) {
  let currentTurn = "X";

  if (turns.length > 0 && turns[0].player === "X") {
    currentTurn = "O";
  }
  return currentTurn;
}

function App() {
  const [Gameturn, setGameturn] = useState([]);
  const [palyers, setpalyers] = useState({
    X: "palyer 1",
    O: "Player 2",
  });
  let GameBoard = BoardInit;
  for (const turn of Gameturn) {
    const { square, player } = turn;
    const { row, col } = square;
    GameBoard[row][col] = player;
  }
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firistSquare = GameBoard[combination[0].row][combination[0].column];
    const secondSquare = GameBoard[combination[1].row][combination[1].column];
    const thirdSquare = GameBoard[combination[2].row][combination[2].column];
    if (
      firistSquare &&
      firistSquare === secondSquare &&
      firistSquare === thirdSquare
    ) {
      winner = palyers[firistSquare];
      break;
    } else if (Gameturn.length === 9) {
      winner = "No one";
    }
  }
  // const [ActivePlayer, setActivePlayer] = useState('X');
  function HandelSelectedsq(rowIndex, colIndex) {
    // setActivePlayer((prevActivePlayer) => prevActivePlayer === 'X' ? 'O' : 'X');
    const ActivePlayer = deriveActivePlayer(Gameturn);
    setGameturn((prevGameturn) => {
      const currentTurn = deriveActivePlayer(prevGameturn);
      const updatedGameturn = [
        { square: { row: rowIndex, col: colIndex }, player: currentTurn },
        ...prevGameturn,
      ];
      return updatedGameturn;
    });
  }

  function HandelChangeName(symbol, Newname) {
    setpalyers((prevPlayername) => {
      return {
        ...prevPlayername,
        [symbol]: Newname,
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <GameCONTAINER
            Playername="Player 1"
            PlayerSymbol={"X"}
            isActivePlayer={deriveActivePlayer(Gameturn) === "X"}
            onchangename={HandelChangeName}
          />
          <GameCONTAINER
            Playername="Player 2"
            PlayerSymbol={"O"}
            isActivePlayer={deriveActivePlayer(Gameturn) === "O"}
            onchangename={HandelChangeName}
          />
        </ol>
        {winner && <GameOver winner={winner} />}
        <GameBoad onselecetedsq={HandelSelectedsq} board={GameBoard} />
      </div>
      <Log turns={Gameturn} />
    </main>
  );
}

export default App;
