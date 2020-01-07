
let highScoreList = document.querySelector("ol");
let clearHighScores = document.getElementById("clear");
let backButton = document.getElementById("back");
let maxScore = 5;

function getStorage() {
    highScore = JSON.parse(window.localStorage.getItem("codeQuiz")) || [];
    console.log(highScore);

    highScore.sort( function (a, b){
        return b.score - a.score;
    })
    highScore.forEach(function(score){
        let highScoreItem = document.createElement("li");
        highScoreItem.textContent = score.username + ": " + score.score;
        highScoreList.appendChild(highScoreItem);
    })
}
// function maxHighScores(){
//     highScoreItem.splice(5)
// }

function goBack(event){
    document.location.href = "index.html"
}

function clear(event){
    console.log(event)
    localStorage.removeItem("codeQuiz");
    window.location.reload();
}

// maxHighScores();
getStorage();



clearHighScores.addEventListener("click", clear);
backButton.addEventListener("click", goBack);