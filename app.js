let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector(".msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const drawGame=()=>{
    console.log("Game was draw.");
    msg.textContent = "It's a Draw..Play Again...";
    msg.style.backgroundColor="antiquewhite";
};
const showWin=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("Congrats!! You Won:)");
        msg.innerText = `Congrats!! You Won:) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("Sorry better luck next time:(");
        msg.innerHTML = "Sorry better luck next time:(";
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
};

const playGame=(userChoice)=>{
    console.log("User choice=",userChoice);
    // Generate comp choice
    const compChoice=genCompChoice();
    console.log("Computer choice=",compChoice);

    if(userChoice===compChoice){
        // Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper"?false:true;
        }
        else if(userChoice==="Paper"){
            userWin= compChoice === "Scissors"?false:true;
        }
        else{
            userWin= compChoice === "Rock"?false:true;
        }
        showWin(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log(userChoice,"was clicked");
        playGame(userChoice);
    });
});
