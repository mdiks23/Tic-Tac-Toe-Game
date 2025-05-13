let allbox = document.querySelectorAll(".box");

let reset = document.querySelector("#resetBtn");

let newGameAct = document.querySelector("#newGame");

let msgBox = document.querySelector(".msgBox");
let msg = document.querySelector("p");

let playerTurn = true; //player1,2

//winning pattern of turns
let winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
  ];
  
  allbox.forEach(box =>{
    box.addEventListener("click", () => {
      if(playerTurn){
        box.innerText = "X";
        playerTurn = false;
      }
      else{
        box.innerText = "O";
        playerTurn =true;
      }
    box.disabled = true;
      checkWin();
    });
  });
  
  const enableBtn =()=>{
    for(let box of allbox){
     box.disabled = false;
   }
  }
  
 const disableBtn = () =>{ 
   for(let box of allbox){
     box.disabled = true;
   }
 }
 
 const resetGame = () =>{
   for(let box of allbox){
     box.innerText = "";
   }
 }
 
 const newGame =()=>{
   enableBtn();
   resetGame();
   msgBox.classList.add("hideDiv");
 }
  
  const winMsg = (winner) => {
    msg.innerText =`Congratulations ${winner}, you won the game`;
    msgBox.classList.remove("hideDiv");
    disableBtn();
  }
  
const checkWin = ()=>{
  for(let pattern of winPattern){
    console.log(pattern[0],pattern[1],pattern[2]);
   let boxVal1 = allbox[pattern[0]].innerText;
   let boxVal2 = allbox[pattern[1]].innerText;
   let boxVal3 = allbox[pattern[2]].innerText;
   
   if(boxVal1 !== "" && boxVal2 !== "" && boxVal3 !== ""){
     if(boxVal1 === boxVal2 && boxVal2 === boxVal3){
       console.log("winner",boxVal1);
       winMsg(boxVal1);
     }
   }
  }
}

reset.addEventListener("click", resetGame );
newGameAct.addEventListener("click", newGame);
