let count = document.querySelector("#count");
let contentBody = document.querySelector(".content");
let quizTitle = document.querySelector("h1");


let timer = 0;
let q = 0;



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

            function renderQuestion(){
               
                let currentQuestion = questions[q].title;
                
                quizTitle.innerHTML = currentQuestion;

    renderChoices();
                 
           
                function renderChoices(){  
                    let buttonDiv = document.createElement("div")
                    
                    for (let a = 0; a < questions[q].choices.length; a++){
                        let choiceOptions = questions[q].choices[a];
                    
                        let choiceButtons = document.createElement("button");

                        choiceButtons.textContent = choiceOptions;

                        console.log(choiceOptions);
                        contentBody.appendChild(buttonDiv);
                        buttonDiv.appendChild(choiceButtons);
                     }


                    // for (let choiceOptions of questions[q].choices){
                    //     console.log(choiceOptions)
                    //     choiceButtons.textContent = choiceOptions;
                       

                    // }
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
