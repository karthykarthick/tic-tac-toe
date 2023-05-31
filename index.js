let gameBoard = document.querySelector(".board");
let info = document.querySelector(".info");

let start = ["", "", "", "", "", "", "", "", ""];
let player = "circle";
function startCells() {
  start.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    gameBoard.append(cellElement);

    cellElement.addEventListener("click", go);
  });
}

startCells();

function go(e) {
  const display = document.createElement("div");
  display.classList.add(player);
  e.target.append(display);
  player = player === "circle" ? "cross" : "circle";
  e.target.removeEventListener("click", go);
  score();
}

function score() {
  const allSquare = document.querySelectorAll(".square");
  const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];



  patterns.forEach((arr) => {
    console.log("arr var: ", arr);
    const circleWins = arr.every((cell) =>
      allSquare[cell].firstChild?.classList.contains("circle")

    );

    if (circleWins) {
      info.textContent = "circle wins";
      allSquare.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });

  patterns.forEach((arr) => {
    const crossWins = arr.every((cell) =>
      allSquare[cell].firstChild?.classList.contains("cross")
    );

    if (crossWins) {
      info.textContent = "cross wins";
      allSquare.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });






//   patterns.forEach((arr) => {
//     // console.log(arr);
//   const circleWins =  arr.every((cell) => {
//       allSquare[cell].firstChild?.classList.contains("circle");
//     //   console.log(allSquare[cell]);

//     if(circleWins){
//         info.textContent = "circle wins"
//         allSquare.forEach(square => square.replaceWith(square.cloneNode(true)))
//         return
//     }
//     });
//   });


//   patterns.forEach((arr) => {
//     // console.log(arr);
//   const crossWins =  arr.every((cell) => {
//       allSquare[cell].firstChild?.classList.contains("cross");
//     //   console.log(allSquare[cell]);

//     if(crossWins){
//         info.textContent = "cross wins"
//         allSquare.forEach(square => square.replaceWith(square.cloneNode(true)))
//         return
//     }
//     });
//   });
}
