let count = document.querySelector("#count");
let contentBody = document.querySelector(".content");
let quizTitle = document.querySelector("h1");


let timer = 0;




function codeQuiz(){
    let info = document.createElement("h5");
    let startButton = document.createElement("button");
   

    quizTitle.textContent = "Coding Quiz Challange";
    info.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that an incorrect answer will penalize your score/time 15 seconds!";
    startButton.textContent = "Start Quiz";
    contentBody.appendChild(info);
    contentBody.appendChild(startButton);

    //Start button quiz begins

    startButton.addEventListener("click", function(){
        quizTitle.textContent = "";
        info.remove();
        startButton.remove();
        
        let timer = 75;
        let timeInterval = setInterval(function(){
            count.textContent = timer;
            timer --;

            //if (secondsLeft === 0) {
            //     clearInterval(timeInterval);
            //     alert highscore;
            // }
            
            
    }, 1000)
            
    renderQuestion();
    renderChoices();
            function renderQuestion(){
                let q = 0;
                let currentQuestion = questions[q].title;
                

                quizTitle.innerHTML = currentQuestion;

                 
            }
                function renderChoices(){  
                    let buttonDiv = document.createElement("div")
                    let choiceButtons = document.createElement("button");

                    contentBody.appendChild(buttonDiv);
                    buttonDiv.appendChild(choiceButtons);
                
                    for (let choiceOption = 0; choiceOption < questions[q].choices.length; choiceOption++){
                        let choiceText = questions[q].choice[choiceOption];
                        

                      
                        console.log(choiceText);
                        choiceButton.innerHTML = choiceText;

                    }
                }
          

            
                
                    
    
         


    })
}

codeQuiz();



// start quiz

// start timer 75--

// load question and answer choices 

// if the answer choice is correct - say correct - load next question

// if the answer is incorrect - say incorrect - minus 15 seconds - load next question

// all questions are done or timer === 0 then prompt to add initals to highscore
