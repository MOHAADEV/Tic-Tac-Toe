export default function GameBoad({ onselecetedsq, board }) {
  // const [GameBoad,setGameBoad] = useState(BoardInit);
  // function HandelClick(row,Col){
  //    setGameBoad((prevGameBoad) => {
  //     const updatedBoard = [...prevGameBoad.map(innerArray => [...innerArray])];
  //     updatedBoard[row][Col] = Activepler ;
  //     return updatedBoard;
  // }
  // );
  // onselecetedsq();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, ColIndex) => (
              <li key={ColIndex}>
                <button
                  onClick={() => onselecetedsq(rowIndex, ColIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
