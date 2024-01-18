let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

const winningPattern = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6],];


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.classList.add("redText");
            box.innerHTML = "O";
            turnO=false;
        } else {
            // box.classList.remove("redText");
            // box.classList.add("blueText");
            box.innerHTML = "X";
            // box.classList.remove("blueText");
            turnO=true;
        }
        box.disabled = true;

        checkWinner();

    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for(pattern of winningPattern) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if(pos1Val != "" && pos2Val !="" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }

        }
    }
};


newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
