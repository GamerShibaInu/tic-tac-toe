// first time visit
const newVisit = localStorage.getItem("newVisit");
const visitedPlrOne = window.localStorage.getItem("plrOne");
const visitedPlrTwo = window.localStorage.getItem("plrTwo");
if (newVisit == undefined) { // new visitor
   localStorage.setItem("newVisit", 1);
   alert("Welcome!");

   // add player names
const plrOneName = prompt("please enter player 1 name","Player 1");

const addPlrName1 = document.querySelector(".plr-one");
addPlrName1.textContent = plrOneName;

const plrTwoName = prompt("please enter player 2 name","Player 2");

const addPlrName2 = document.querySelector(".plr-two");
addPlrName2.textContent = plrTwoName;

// save player names
window.localStorage.setItem('plrOne', plrOneName);
window.localStorage.setItem('plrTwo', plrTwoName);

} else { // already visited
 vPlrOne = document.querySelector(".plr-one");
 vPlrOne.textContent = visitedPlrOne;

 vPlrTwo = document.querySelector(".plr-two");
 vPlrTwo.textContent = visitedPlrTwo;
    alert("Welcome back!");
}

//turns
const squares = document.querySelectorAll('.square');
let plrTurn = "x"
let whosTurn = document.querySelector(".turn-text");
whosTurn.textContent = "its " + visitedPlrOne + "'s turn!";
for (let index = 0; index < squares.length; index++) {
  const square = squares[index];
  square.addEventListener("click", function() {
    if (square.textContent === "") {
      square.textContent = plrTurn;
      if (plrTurn === "x") {
        whosTurn.textContent = "its " + visitedPlrTwo + "'s turn!";
        plrTurn = "o";
        winCheck()
      } else {
        whosTurn.textContent = "its " + visitedPlrOne + "'s turn!";
        plrTurn = "x";
        winCheck()
      }
    }
  });
}




// square variables
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");

// clear boxes after win
function clearBoxes(){
  box1.textContent = ""
  box2.textContent = ""
  box3.textContent = ""
  box4.textContent = ""
  box5.textContent = ""
  box6.textContent = ""
  box7.textContent = ""
  box8.textContent = ""
  box9.textContent = ""
}
  //winning player symbol (X)
function xWon(){
  box1.textContent = "x"
  box2.textContent = "x"
  box3.textContent = "x"
  box4.textContent = "x"
  box5.textContent = "x"
  box6.textContent = "x"
  box7.textContent = "x"
  box8.textContent = "x"
  box9.textContent = "x"
  }

  //winning player symbol (O)
  function oWon(){
    box1.textContent = "o"
    box2.textContent = "o"
    box3.textContent = "o"
    box4.textContent = "o"
    box5.textContent = "o"
    box6.textContent = "o"
    box7.textContent = "o"
    box8.textContent = "o"
    box9.textContent = "o"
    }
  function xWinner(){
    xWon()
   let blinkTimer = setTimeout(clearBoxes, 1001)
   xWon()
   blinkTimer = setTimeout(clearBoxes, 1002)
  }
  
  
// win conditions X
function winCheck(){
  if (box1.textContent =="x" && box2.textContent =="x" && box3.textContent =="x") {
    whosTurn.textContent = visitedPlrOne + " won!"
    xWinner()
} else if (box4.textContent =="x" && box5.textContent =="x" && box6.textContent =="x"){
  xWinner()
  whosTurn.textContent = visitedPlrOne + " won!"
} else if (box7.textContent =="x" && box8.textContent =="x" && box9.textContent =="x"){
  xWinner()
  whosTurn.textContent = visitedPlrOne + " won!"
}
}
