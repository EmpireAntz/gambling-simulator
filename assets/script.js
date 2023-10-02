var btn = document.querySelector("#btn")
var creditValue = document.querySelector("#creditValue")
var oddsArr = ["L", "L", "L", "L", "W"]
var credits;

function startGame() {
    credits = 10
    creditValue.textContent = credits
}

function spinToWin() {
    credits --
    alert("You have spent 1 credit, if you win you will get 5 back!")
    console.log(credits)
    creditValue.textContent = credits
    
    alert("spinning...")
    var randomIndex = Math.floor(Math.random() * oddsArr.length)
    var outcome = oddsArr[randomIndex]

    if (outcome === "W") {
        alert("You Won! Heres 5 more credits!")
        credits += 5
        creditValue.textContent = credits
    }
    else {
        alert("You lose! 😜")
    }
    if (credits === 0) {
        alert("Game Over")
        var anotherGame = confirm("Would you like to play again?")
        if (anotherGame) {
            startGame()
        }
        else {
            window.close()
        }
    }
}

startGame()

btn.addEventListener("click", spinToWin)

