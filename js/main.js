// add player names
const plrOneName = prompt("please enter player 1 name","Player 1")
console.log(plrOneName)

const addPlrName1 = document.querySelector(".plr-one")
addPlrName1.textContent = plrOneName


const plrTwoName = prompt("please enter player 2 name","Player 2")
console.log(plrTwoName)

const addPlrName2 = document.querySelector(".plr-two")
addPlrName2.textContent = plrTwoName

// save player names
window.localStorage.setItem('PlrOne', plrOneName);
window.localStorage.setItem('PlrTwo', plrTwoName);

//turns
const squares = document.querySelectorAll('.square');
let plrTurn = "x"
for (let index = 0; index < squares.length; index++) {
  const square = squares[index];
  square.addEventListener("click", function() {
    if (square.textContent === "") {
      square.textContent = plrTurn;
      if (plrTurn === "x") {
        plrTurn = "o";
      } else {
        plrTurn = "x";
      }
    }
  });
}


