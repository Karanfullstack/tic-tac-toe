import React, {useState} from "react";
import Icon from "./component/Icon";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const itemArray = new Array(9).fill("empty"); // contains 9 values
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  // @CheckWins
  const checkWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} wins`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[5] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} wins`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[1]} wins`);
    } else if (
      itemArray[6] === itemArray[5] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} wins`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[7] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    }
  };
  // @Reload Game
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
    toast("Game Reset", {type: ""});
  };

  // @ChangeItem
  const itemChange = (position) => {
    if (winMessage) {
      return toast(winMessage, {type: "success"});
    }
    if (itemArray[position] === "empty") {
      itemArray[position] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast.warn("Item is already filled", {theme: "dark"});
    }
    checkWinner();
  };

  return (
    <header className="header">
      <ToastContainer position="top-center" limit={3} />
      {winMessage ? (
        <div>
          <h1>Play Again </h1>
          <h2 className="win-message">{winMessage}</h2>
        </div>
      ) : (
        <h1 className="who-turns">{isCross ? "Cross" : "Circle"} Turns</h1>
      )}
      <div className="button-reset">
        <button onClick={reloadGame} className="button">
          Reset
        </button>
      </div>

      <div className="grid-container">
        {itemArray.map((item, index) => {
          return (
            <div
              className="grid-item"
              key={index}
              onClick={() => itemChange(index)}
            >
              <Icon name={item} />
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default App;
