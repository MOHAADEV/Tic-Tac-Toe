export default function GameOver({ winner }) {
  function HanedRematch() {
    window.location.reload();
  }
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner} Wins!</p>
      <p>
        <button onClick={HanedRematch}>Rematch!</button>
      </p>
    </div>
  );
}
