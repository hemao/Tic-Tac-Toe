//intilaize player and turns
currentPlayer = "red"
redCounter = 0
blueCounter = 0

//Draw board
let board = document.querySelector(".board")
for(let i=0;i<9; i++){
    let tile = document.createElement("div")
    tile.classList.add("tile")
    tile.addEventListener("click",selectTile)
    board.appendChild(tile)
}
//color tile
function selectTile(){
    if(currentPlayer == red){
        alert("YOU CLICKED ME!" + currentPlayer)
        currentPlayer = "blue"
    }else {
        alert("YOU CLICKED ME!" + currentPlayer)
        currentPlayer = "blue"
    }
}



