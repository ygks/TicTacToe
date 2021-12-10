let Game = {
  board: ["", "", "", "", "", "", "", "", ""],
  symbol: "X",
  lastSymbol: "",
  turn: true,
};

let boardDom = document.querySelector(".boardSection");

start();

function winningCondition() {
  if (
    (Game.board[0] === Game.lastSymbol &&
      Game.board[1] === Game.lastSymbol &&
      Game.board[2] === Game.lastSymbol) ||
    (Game.board[3] === Game.lastSymbol &&
      Game.board[4] === Game.lastSymbol &&
      Game.board[5] === Game.lastSymbol) ||
    (Game.board[6] === Game.lastSymbol &&
      Game.board[7] === Game.lastSymbol &&
      Game.board[8] === Game.lastSymbol) ||
    (Game.board[0] === Game.lastSymbol &&
      Game.board[3] === Game.lastSymbol &&
      Game.board[6] === Game.lastSymbol) ||
    (Game.board[1] === Game.lastSymbol &&
      Game.board[4] === Game.lastSymbol &&
      Game.board[7] === Game.lastSymbol) ||
    (Game.board[2] === Game.lastSymbol &&
      Game.board[5] === Game.lastSymbol &&
      Game.board[8] === Game.lastSymbol) ||
    (Game.board[0] === Game.lastSymbol &&
      Game.board[4] === Game.lastSymbol &&
      Game.board[8] === Game.lastSymbol) ||
    (Game.board[2] === Game.lastSymbol &&
      Game.board[4] === Game.lastSymbol &&
      Game.board[6] === Game.lastSymbol)
  ) {
    return endGame(true);
  } else {
    return endGame(false);
  }
}

function endGame(condition) {
  if (condition == true) {
    alert(`${Game.lastSymbol} Won the game!`);
    start();
  } else {
    return;
  }
}

function start() {
  boardDom.innerHTML = "";
  for (let i = 0; i < Game.board.length; i++) {
    (function render() {
      let square = document.createElement("button");
      square.addEventListener("click", () => {
        addMark(i);
        start();
      });
      square.innerHTML = Game.board[i];
      square.classList.add("square");
      boardDom.appendChild(square);
    })();
  }
}

function addMark(index) {
  if (Game.turn == true && Game.board[index] == "") {
    Game.board[index] = Game.symbol;
    Game.symbol = "O";
    Game.lastSymbol = "X";
    Game.turn = false;
    winningCondition();
  } else if (Game.turn == false && Game.board[index] == "") {
    Game.board[index] = Game.symbol;
    Game.symbol = "X";
    Game.lastSymbol = "O";
    Game.turn = true;
    winningCondition();
  } else {
    return;
  }
}
function cleanObj() {
  Game.board = ["", "", "", "", "", "", "", "", ""];
  Game.symbol = "X";
  Game.lastSymbol = "";
  Game.turn = true;
}
