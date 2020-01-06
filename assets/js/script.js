let count = document.querySelector("#count");
let contentBody = document.querySelector(".content");
let quizTitle = document.createElement("h1");
let info = document.createElement("h5");
let startButton = document.createElement("button");
let questionTitle = document.querySelector(".questions")
let questionContent = document.createElement("h5")
let buttonDiv = document.querySelector(".buttonsDiv");
let choiceButtons = document.createElement("button");
let answerAlertDiv = document.querySelector(".answerAlertDiv");
let answerAlert = document.createElement("h6");
let choiceOption ;
let quizCompleteAlert = document.createElement("h5");
let userInitials = document.createElement("input");
let scoreAdd = document.querySelector(".scoreAdd");
let submitScore = document.createElement("button");
let userInput
let timeInterval;
let timer = 0;
let q = 0;

function finalScore(){
    quizTitle.innerHTML = "All done!";
    quizCompleteAlert.textContent = "You final score is " + timer;

    
    contentBody.appendChild(quizCompleteAlert);
    clearInterval(timeInterval);
    userName();
}

function userName(){
    userInitials.placeholder = "Enter your initials";
    submitScore.innerText = "Add Score";

    contentBody.appendChild(userInitials);
    contentBody.appendChild(submitScore);
}

function addToHighscore(event){
    event.preventDefault();    
    document.location.href = "highScore.html";
    userInput = userInitials.value; 
    localStorage.setItem("Username", userInput)
    localStorage.setItem("Score", timer)

}

function getStorage(event) {
    let highScore = JSON.parse(localStorage.getItem("Score"));
    console.log(Score);

}

function checkAnswerWait(){
    setTimeout(function() {
        deleteButton(answerAlertDiv)
}, 1000);
}

function deleteButton(element) {
    var child = element.lastElementChild
    while (child) {
        element.removeChild(child)
        child = element.lastElementChild
    }
}

function checkAnswer(answer){
    if (answer !== questions[q].answer){
        console.log("Incorrect");
        answerAlert.textContent = "Incorrect";
        answerAlertDiv.appendChild(answerAlert);
    } else {
        console.log("Correct");
        answerAlert.textContent = "Correct";
        answerAlertDiv.appendChild(answerAlert);
    }
    checkAnswerWait();
}
function processAnswer(event){
    let answer = event.target.innerText;
    let correct = checkAnswer(answer);
    if (!correct){
        timer -= 15; 
    } 
    nextQuestion();
}


function renderChoices(){  

    for (let a = 0; a < questions[q].choices.length; a++){
        choiceOption = questions[q].choices[a];
        choiceButtons = document.createElement("button");
        
        choiceButtons.setAttribute("class", "answerSelection");

        choiceButtons.innerHTML = choiceOption;
        buttonDiv.appendChild(choiceButtons);

        console.log(choiceButtons)
    }
}

function renderQuestion(){
    questionTitle.appendChild(questionContent);

    questionContent.textContent = questions[q].title;
}

function startTimer(){
    quizTitle.textContent = "";
    info.remove();
    startButton.remove();
    
    timer = 75;
    timeInterval = setInterval(countdown, 1000)
}

function countdown(){
    count.textContent = timer;
    timer --;
    if (timer < 0){
        finalScore();
        deleteButton(buttonDiv);
        deleteButton(questionTitle);
    }
}

function nextQuestion(){
    deleteButton(buttonDiv);
    deleteButton(questionTitle);
    if (q !== questions.length - 1){
        q++;
       showNextQA();
    } else {
        finalScore();
        deleteButton(buttonDiv);
        deleteButton(questionTitle);
    }
}

function codeQuiz(){
    count.textContent = timer;
    quizTitle.textContent = "Coding Quiz Challange";
    info.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that an incorrect answer will penalize your score/time 15 seconds!";
    startButton.textContent = "Start Quiz";

    contentBody.appendChild(quizTitle);
    contentBody.appendChild(info);
    contentBody.appendChild(startButton);
}

function showNextQA(){
    renderQuestion();
    renderChoices();

}

function startQuiz(){
    startTimer();    
    renderQuestion();
    renderChoices();         
}


startButton.addEventListener("click", startQuiz);
buttonDiv.addEventListener("click", processAnswer);
submitScore.addEventListener("click", addToHighscore);

//entry point
codeQuiz();




