let countEl = document.querySelector("#count");
let contentEl = document.querySelector(".content");
let h1El = document.querySelector("h1");


let questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "2 The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "3 Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        title: "4 The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "5 The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      }
  
  ];
  

let timer = 75;



function codeQuiz(){
    let infoEl = document.createElement("h5");
    let startEl = document.createElement("button");
   

    h1El.textContent = "Coding Quiz Challange";
    infoEl.innerHTML = "Try to answer the following code-related questions within the time <br> limit. Keep in mind that an incorrect answer will penalize your score/time <br> br ten seconds!";
    startEl.textContent = "Start Quiz";
    h1El.appendChild(infoEl);
    h1El.appendChild(startEl);

    //Start button quiz begins

    startEl.addEventListener("click", function(){
        let choice1 = document.createElement("button");
        let choice2 = document.createElement("button");
        let choice3 = document.createElement("button");
        let choice4 = document.createElement("button");



        let correctEl = document.createElement("p");

        for (let i = 0; i < questions.length; i++){
            let currentQuestion = questions[i];
                

        }
     


      
    })



    
}

codeQuiz();