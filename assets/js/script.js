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
let clearHighScores = document.getElementById("clear");
let scoreAdd = document.querySelector(".scoreAdd");
let submitScore = document.createElement("button");
let timeInterval;
let timer = 0;
let q = 0;


// setting attributes to use to style
info.setAttribute("class", "info");
quizTitle.setAttribute("class", "title");
startButton.setAttribute("class", "startbtn");
submitScore.setAttribute("class", "submit");


// if all questions answered or timer = 0 final score will be called
// this stops the interval and shows user their score.
function finalScore(){
    quizTitle.innerHTML = "All done!";
    quizCompleteAlert.textContent = "You final score is " + timer;
 
    contentBody.appendChild(quizCompleteAlert);
    clearInterval(timeInterval);
    
    userName();
}

// click event to add initials to high score. setting json object to codeQuiz
// this will take you to highscore.html, this will store the 
// data before going to the next page
function addToHighscore(event){
    let highScoreUser = JSON.parse(window.localStorage.getItem("codeQuiz")) ||  [];
    let playerScore = {
        username: userInitials.value,
        score: timer
    }

    highScoreUser.push(playerScore);

    localStorage.setItem("codeQuiz", JSON.stringify(highScoreUser));

    document.location.href = "highScore.html";
    event.preventDefault();    
}

// once finalScore() is called it will prompt the user
// to enter intials to add their score to high scores
function userName(){
    userInitials.placeholder = "Enter your initials";
    submitScore.innerText = "Add Score";

    contentBody.appendChild(userInitials);
    contentBody.appendChild(submitScore);
}

// correct/incorrect pauses after next question is rendered before 
// being removed from page
function checkAnswerWait(){
    setTimeout(function() {
        deleteButton(answerAlertDiv)
}, 1000);
}

//deletebutton will delete children of whatever parent el is passed in
function deleteButton(element) {
    var child = element.lastElementChild
    while (child) {
        element.removeChild(child)
        child = element.lastElementChild
    }
}
// checking the answer button text to the question answer 
//will append the answer alert of correct/incorrect 
// returns if answer is correct, if not, back to process answer
function checkAnswer(answer){
    if (answer !== questions[q].answer){
        console.log("Incorrect");
        answerAlert.textContent = "Incorrect";
        answerAlertDiv.appendChild(answerAlert);
        return false
    } else {
        console.log("Correct");
        answerAlert.textContent = "Correct";
        answerAlertDiv.appendChild(answerAlert);
        return true
    } 
}
//when the answer button is selected 
// if answer button text doesnt match questons[i].answer 
// returns false and timer is deducted
function processAnswer(event){
    let answer = event.target.innerText;
    let correct = checkAnswer(answer);
   
    if (!correct){
        timer -=15;
    } checkAnswerWait();
        nextQuestion();
    }

// appending buttons for each answer 
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

// appedning question to dom
function renderQuestion(){
    questionTitle.appendChild(questionContent);

    questionContent.textContent = questions[q].title;
}

//start timer at 75 seconds, 1 second intervals
function startTimer(){
    quizTitle.textContent = "";
    info.remove();
    startButton.remove();
    
    timer = 75;
    timeInterval = setInterval(countdown, 1000)
}

//countdown by 1 second, if timer === 0 then final score
function countdown(){  
    timer --;
    count.textContent = timer;
    if (timer < 0){
        finalScore();
        deleteButton(buttonDiv);
        deleteButton(questionTitle);
    }
}


// if last question, calls final score and removes q & a buttons from dom
// if not, calls showNext and increments q
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

//entry point leads here- loading all the main page info
function codeQuiz(){
    count.textContent = timer;
    quizTitle.textContent = "Coding Quiz Challange";
    info.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that an incorrect answer will penalize your score/time 15 seconds!";
    startButton.textContent = "Start Quiz";

    contentBody.appendChild(quizTitle);
    contentBody.appendChild(info);
    contentBody.appendChild(startButton);
}

// if there is more questions, this will be called to render the next Q&a
// to the dom
function showNextQA(){
    renderQuestion();
    renderChoices();

}

//when start is clicked - timer starts, q1 + answers load
function startQuiz(){
    startTimer();    
    renderQuestion();
    renderChoices();         
}

//event listeners
startButton.addEventListener("click", startQuiz);
buttonDiv.addEventListener("click", processAnswer);
submitScore.addEventListener("click", addToHighscore);



//entry point
codeQuiz();




