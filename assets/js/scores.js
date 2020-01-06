let clearHighScores = document.getElementById("clear");
let highScoreItem = document.createElement("li");
let highScoreList = document.querySelector("ol");

let highScoreUser;
let mostRecentScore;
let maxScore = 5;
let score = {
    username: userInitials.value,
    score: mostRecentScore
}



function userSubmit(){
    document.location.href = "highScore.html";
    console.log("score submitted!")
}

function setStorage(){
    mostRecentScore = timer;
    localStorage.setItem("username", (userInitials.value));
    localStorage.setItem("score", JSON.stringify(mostRecentScore));

    console.log(JSON.parse(localStorage.getItem("score")))
    console.log(localStorage.getItem("username"));
}

function getStorage() {
    highScoreUser = localStorage.getItem("username");
    score.username.push(userInitials.value);
    highScore = JSON.parse(localStorage.getItem("score"));
    score.score.push(highScore);
    console.log(score)

  
}

// function saveScore(){
//     for (let i = 0; i < score.length; i++){
//         score = score[i];
//         highScoreItem.textContent = score;

//         highScoreList.appendChild(highScoreItem);
//     }
// }

function goBack(event){
    document.location.href = "index.html"
}

function clear(event){
    localStorage.clear();
}



function addToHighscore(event){
    event.preventDefault();    
    userSubmit();
    setStorage();
    getStorage();
    // saveScore();
}


submitScore.addEventListener("click", addToHighscore);
back.addEventListener("click", goBack);
clearHighScores.addEventListener("click", clear);