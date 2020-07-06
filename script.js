//intilaize player and turns
let currentPlayer = "red" 
let clicks =0              
let boardState = ["0","0","0","0","0","0","0","0","0"]
let winState = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

let winner = "";
let showPlayer = document.querySelector(".showPlayer")
let resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", reset)
//Draw board
let board = document.querySelector(".board")
for(let i=0;i<9; i++){
    let tile = document.createElement("div")
    tile.classList.add("tile")
    tile.setAttribute("id",i)
    tile.addEventListener("click",selectTile)
    board.appendChild(tile)
}
//color tile
function selectTile(e){
    if(currentPlayer === "red"){
        if(e.target.className === "tile"){
            showPlayer.innerText = "  Current Player : " + currentPlayer
            e.target.classList.remove("tile")
            e.target.classList.add("red")
            let index = e.target.getAttribute("id")
            boardState[index] = "red"
            currentPlayer = "blue"
            clicks += 1
        } 
    } else {
        if(e.target.className === "tile"){ 
            showPlayer.innerText = "  Current Player : " + currentPlayer 
            e.target.classList.remove("tile")
            e.target.classList.add("blue")
            let index = e.target.getAttribute("id")
            boardState[index] = "blue"
            currentPlayer = "red"
            clicks += 1
        }
    }

    if(clicks > 4){
        checkWinner()
    }
}

function reset(){
    let redTiles = document.querySelectorAll(".red")
    for(let i=0; i< redTiles.length; i++){
        redTiles[i].classList.remove("red")
        redTiles[i].classList.add("tile")
    }

    let blueTiles = document.querySelectorAll(".blue")
    for(let i=0; i< blueTiles.length; i++){
        blueTiles[i].classList.remove("blue")
        blueTiles[i].classList.add("tile")
    }

    //reset boardState array
    for(let i =0; i< boardState.length; i++){
        boardState[i] ="0"
    }

    //reset clicks counter
    clicks = 0
}

function checkWinner(){

   let flag = false
   for(let i=0; i < winState.length; i++){
       flag = isWinner(winState[i])
       if(flag){
            showPlayer.innerText = "The winner is : " + winner + "!!" 
            setTimeout(reset, 500)
            break
       }
   }
}

function isWinner(list){
    console.log(winState)
    if((boardState[list[0]] == boardState[list[1]]) && (boardState[list[1]] == boardState[list[2]])){
        if(boardState[list[0]] !== "0"){
            winner = boardState[list[0]]
            return true
        }
    } else {
        return false
    }
    
}



