let countEl = document.querySelector("#count");
let contentEl = document.querySelector(".content");
let h1El = document.querySelector("h1");


let timer = 0;


function codeQuiz(){
    let infoEl = document.createElement("h5");
    let startEl = document.createElement("button");
   

    h1El.textContent = "Coding Quiz Challange";
    infoEl.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that an incorrect answer will penalize your score/time 15 seconds!";
    startEl.textContent = "Start Quiz";
    contentEl.appendChild(infoEl);
    contentEl.appendChild(startEl);

    //Start button quiz begins

    startEl.addEventListener("click", function(){
        
        
        let timer = 75;
        let timeInterval = setInterval(function(){
            countEl.textContent = timer;
            timer --;


            let choice1 = document.createElement("button");
            let choice2 = document.createElement("button");
            let choice3 = document.createElement("button");
            let choice4 = document.createElement("button");

            let correctEl = document.createElement("p");



        }, 1000)
       

     


      
    })



    
}

codeQuiz();