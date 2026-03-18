let userScore = 0;
let compScore = 0;

//choices
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

//Score
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score"); 

//For computerchoice
const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock, paper, scissors
};
//for drow condition
const drawGame = ()=>{
    
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#082649";
}; 

//show winner
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        //updating user-scores
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        //updating computer-score
        compScore++;
        compScorePara.innerText = compScore;
       
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

//computer choice
const playGame = (userChoice)=>{
    

    //Generate computer choice
    const compChoice = genCompChoice();
      

    //condition for win
    if(userChoice === compChoice){
      //draw condition
        drawGame();
    } else{
        //winning conditions
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
           userWin = compChoice === "paper"? false :true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors"? false : true;
        } else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }   
};

//For userchoice
choices.forEach((choice)=>{ 
    choice.addEventListener("click", ()=>{
        //for id access
        const userChoice = choice.getAttribute("id");
        // console.log("choice is clicked", userChoice);
        playGame(userChoice);
    });
});