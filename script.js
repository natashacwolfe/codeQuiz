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
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "The condition in an if / else statement is enclosed within ____.",
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
      
    })



    
}

codeQuiz();