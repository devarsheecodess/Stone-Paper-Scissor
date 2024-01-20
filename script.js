let themeBtn = document.getElementById("theme")
let header = document.getElementById("header")
let headerText = document.getElementById("header-text")
let themeLogo = document.getElementById("theme-logo")
let greet = document.getElementById("greet")
let startBtn = document.getElementById("start")
let output = document.getElementById("output")
let stoneBtn = document.getElementById("stone")
let paperBtn = document.getElementById("paper")
let scissorBtn = document.getElementById("scissor")
let refreshBtn = document.getElementById("refresh")

let score = document.getElementById("output2")

let userChoice
let computerChoice

let userSec = document.getElementById("user")
let computerSec = document.getElementById("computer")

let count = 0

let userTxt = document.getElementById("user-text")
let computerTxt = document.getElementById("computer-text")

//Restrict downloading of PNG files
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

//Theme
function toggle() {
    if (count % 2 != 0) {
        // Dark-mode
        document.body.style.backgroundColor = "#0E1116"
        header.style.backgroundColor = "#161925"
        headerText.style.color = "#F1D302"
        
        themeBtn.style.backgroundColor = "#161925"
        themeBtn.style.borderColor = "#161925"
        
        themeLogo.src = 'light-mode.png'
        
        greet.style.color = "white"
        
        start.style.backgroundColor = "#828cb5"
        start.style.color = "#161925"
        start.style.borderColor = "#828cb5"
        output.style.color = "#F1D302"
        
        stoneBtn.style.color = "#828cb5"
        paperBtn.style.color = "#828cb5"
        scissorBtn.style.color = "#828cb5"
        
        score.style.color = "#374A67"

        refreshBtn.style.color = "white"

        userTxt.style.color = "#F1D302"                          
        computerTxt.style.color = "#F1D302"                          
    } else{
        // Light-mode
        document.body.style.backgroundColor = "#c2bdec"
        header.style.backgroundColor = "#828cb5"
        headerText.style.color = "#161925"
        
        themeBtn.style.backgroundColor = "#828cb5"
        themeBtn.style.borderColor = "#828cb5"
        themeLogo.src = 'dark-mode.png'
        
        greet.style.color = "#374A67"
        
        start.style.color = "#F1D302"
        start.style.backgroundColor = "#161925"
        start.style.borderColor = "#161925"
        
        output.style.color = "#161925"
        
        stoneBtn.style.color = "#F1D302"
        paperBtn.style.color = "#F1D302"
        scissorBtn.style.color = "#F1D302"
        
        score.style.color = "rgb(73, 11, 11)"
        
        refreshBtn.style.color = "#161925"
        refreshBtn.style.color = "rgb(73, 11, 11)"

        userTxt.style.color =  "#161925"               
        computerTxt.style.color =  "#161925"  
    }
    count++
}
themeBtn.addEventListener('click',toggle)


//Greet user
let date = new Date()
let time = date.getHours()

if(time >= 0 && time < 4 || time > 15 && time < 24){
    // Good evening
    greet.innerHTML = "Good Evening!"
}
else if(time > 4 && time < 12){
    // Good morning
    greet.innerHTML = "Good Morning!"
}
else if(time > 12 && time < 15){
    // Good Afternoon
    greet.innerHTML = "Good Afternoon!"
}


// Start Button 
function execute(){
    startBtn.style.display = "none"
    stoneBtn.style.display = "block"
    paperBtn.style.display = "block"
    scissorBtn.style.display = "block"
    output.style.display = "block"
    score.style.display = "block"
}
startBtn.addEventListener('click',execute)


// Stone
function stone(){
    stoneBtn.style.display = "none"
    paperBtn.style.display = "none"
    scissorBtn.style.display = "none"
    userChoice = "stone"
    userSec.src = 'stone.png'
    computerTurn()
    matchScore()
    setTimeout(function(){
        stoneBtn.style.display = "block"
        paperBtn.style.display = "block"
        scissorBtn.style.display = "block"       
    }, 1000)
}
stoneBtn.addEventListener('click',stone)

//Paper
function paper(){
    stoneBtn.style.display = "none"
    paperBtn.style.display = "none"
    scissorBtn.style.display = "none"
    userChoice = "paper"
    userSec.src = 'paper.png'
    computerTurn()
    matchScore()
    setTimeout(function(){
        stoneBtn.style.display = "block"
        paperBtn.style.display = "block"
        scissorBtn.style.display = "block"       
    }, 1000)
}
paperBtn.addEventListener('click',paper)

//Scissor
function scissor(){
    stoneBtn.style.display = "none"
    paperBtn.style.display = "none"
    scissorBtn.style.display = "none"
    userChoice = "scissor"
    userSec.src = 'scissor.png'
    computerTurn()
    matchScore()
    setTimeout(function(){
        stoneBtn.style.display = "block"
        paperBtn.style.display = "block"
        scissorBtn.style.display = "block"       
    }, 1000)
}
scissorBtn.addEventListener('click',scissor)

//Computer plays
function computerTurn(){
    let num = Math.random()
    if(num > 0 && num < 0.3){
        computerSec.src = 'stone.png'
        computerChoice = "stone"
    }
    else if(num > 0.3 && num < 0.6){
        computerSec.src = 'paper.png'
        computerChoice = "paper"
    }
    else if(num > 0.6 && num <= 1){
        computerSec.src = 'scissor.png'
        computerChoice = "scissor"
    }
}

//Scoring
let userScore = 0
let computerScore = 0

function matchScore(){
    //User wins if
if(userChoice == "scissor" && computerChoice == "paper"||
    userChoice == "stone" && computerChoice == "scissor"||
    userChoice == "paper" && computerChoice == "stone"){
    userScore++
}

//User loses if
else if(computerChoice == "scissor" && userChoice == "paper"||
        computerChoice == "stone" && userChoice == "scissor"||
        computerChoice == "paper" && userChoice == "stone"){
        computerScore++
    }
    score.innerHTML = `${userScore} - ${computerScore}`
    if(userScore >= 1 || computerScore >= 1){
        refreshBtn.style.display = "block"
        userTxt.style.display =  "block"               
        computerTxt.style.display =  "block"
    }
}

//Refresh Button
function refreshScore(){
    userScore = 0
    computerScore = 0
    score.innerHTML = `${userScore} - ${computerScore}`
}
refreshBtn.addEventListener('click', refreshScore)