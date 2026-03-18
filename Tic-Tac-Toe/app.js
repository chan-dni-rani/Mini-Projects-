let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; //playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

//Reset Game
const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if (turnO) {// playerO
           box.innerText = "O"; 
           turnO = false; //for it don't return O again
        }else{
            box.innerText = "X";//playerX
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

//for gretting text
const disabledBoxes = () =>{//for disabled btn after winning
    for(let box of boxes){
        box.disabled = true;  
    }
}

const enableBoxes = () =>{//for enabled btn after winning
    for(let box of boxes){
        box.disabled = false;  
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


const checkwinner = () =>{
    for(let pattren of winPatterns){
        // value of positions
    let pos1Val = boxes[pattren[0]].innerText;   
    let pos2Val = boxes[pattren[1]].innerText;   
    let pos3Val = boxes[pattren[2]].innerText;  
    
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val &&  pos2Val === pos3Val){
                
                showWinner(pos1Val);
            }

        }
    }
}

//for reset game & btn

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
