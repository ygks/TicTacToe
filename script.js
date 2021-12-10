let Game = {
  board: ["X", "", "", "", "O", "", "", "", ""],
  turn: true,
};

let boardDom = document.querySelector(".boardSection");

render();

function render() {
  boardDom.innerHTML = "";
  for (let i = 0; i < Game.board.length; i++) {
    (function innerRender() {
      let square = document.createElement("button");
      square.addEventListener("click", () => {
        addMark(i);
        render();
      });
      square.innerHTML = Game.board[i];
      square.classList.add("square");
      boardDom.appendChild(square);
    })();
  }
}

function addMark(index) {
  if (Game.turn == true) {
    Game.board[index] = "X";
    Game.turn = false;
  } else {
    Game.board[index] = "O";
    Game.turn = true;
  }
}
