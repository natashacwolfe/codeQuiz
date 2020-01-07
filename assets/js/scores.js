
let highScoreList = document.querySelector("ol");
let clearHighScores = document.getElementById("clear");
let backButton = document.getElementById("back");
let maxScore = 5;

// or empty array if its the users first time
function getStorage() {
    highScore = JSON.parse(window.localStorage.getItem("codeQuiz")) || [];
    console.log(highScore);
// sort highscores from high to low
    highScore.sort( function (a, b){
        return b.score - a.score;
    })
// creates a li item for each username and score added
    highScore.forEach(function(score){
        let highScoreItem = document.createElement("li");
        highScoreItem.textContent = score.username + ": " + score.score;
        highScoreList.appendChild(highScoreItem);
    })
}

// takes you back to start of quiz
function goBack(event){
    document.location.href = "index.html"
}

// clearing the local storage high scores list
function clear(event){
    console.log(event)
    localStorage.removeItem("codeQuiz");
    window.location.reload();
}

// entry point
getStorage();


// event listeners for the two buttons on highscores 
clearHighScores.addEventListener("click", clear);
backButton.addEventListener("click", goBack);