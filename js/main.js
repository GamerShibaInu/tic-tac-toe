// first time visit
const newVisit = localStorage.getItem("newVisit");
const visitedPlrOne = window.localStorage.getItem("plrOne");
const visitedPlrTwo = window.localStorage.getItem("plrTwo");
if (newVisit == undefined) { // new visitor
   localStorage.setItem("newVisit", 1)
   alert("Welcome!");

   // add player names
const plrOneName = prompt("please enter player 1 name","Player 1")

const addPlrName1 = document.querySelector(".plr-one")
addPlrName1.textContent = plrOneName

const plrTwoName = prompt("please enter player 2 name","Player 2")

const addPlrName2 = document.querySelector(".plr-two")
addPlrName2.textContent = plrTwoName

// save player names
window.localStorage.setItem('plrOne', plrOneName);
window.localStorage.setItem('plrTwo', plrTwoName);

} else { // already visited
 vPlrOne = document.querySelector(".plr-one")
 vPlrOne.textContent = visitedPlrOne

 vPlrTwo = document.querySelector(".plr-two")
 vPlrTwo.textContent = visitedPlrTwo
    alert("Welcome back!");
}

//turns

const squares = document.querySelectorAll('.square');
let plrTurn = "x"
let whosTurn = document.querySelector(".turn-text")
whosTurn.textContent = "its " + visitedPlrOne + "'s turn!"
for (let index = 0; index < squares.length; index++) {
  const square = squares[index];
  square.addEventListener("click", function() {
    if (square.textContent === "") {
      square.textContent = plrTurn;
      if (plrTurn === "x") {
        whosTurn.textContent = "its " + visitedPlrTwo + "'s turn!"
        plrTurn = "o";
      } else {
        whosTurn.textContent = "its " + visitedPlrOne + "'s turn!"
        plrTurn = "x";
      }
    }
  });
}

