import { useState } from "react";

export default function GameCONTAINER({
  Playername,
  PlayerSymbol,
  isActivePlayer,
  onchangename,
}) {
  const [isediting, setisediting] = useState(false);

  const [playername, Setplayername] = useState(Playername);

  function HandelClick() {
    setisediting(true);
  }

  function HandelSave() {
    if (isediting) {
      onchangename(PlayerSymbol, playername);
    }
    setisediting(false);
  }

  function HandelChange(text) {
    Setplayername(text);
  }

  let player = <span className="player-name">{playername}</span>;
  if (isediting) {
    player = (
      <input
        type="text"
        value={playername}
        onChange={(event) => HandelChange(event.target.value)}
        placeholder="Enter Name Of Player"
        required
      />
    );
    <button onClick={HandelSave}>save</button>;
  }
  let button = <button onClick={HandelClick}>Edit</button>;
  if (isediting) {
    button = <button onClick={HandelSave}>Save</button>;
  }
  return (
    <li className={isActivePlayer ? "active" : undefined}>
      <span className="player">
        {player}
        <span className="player-symbol ">{PlayerSymbol}</span>
      </span>
      {button}
    </li>
  );
}
