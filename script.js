//intilaize player and turns
let currentPlayer = "red"
let redCounter = 0
let blueCounter = 0
let squares = [0,0,0,0,0,0,0,0,0]
//Draw board
let board = document.querySelector(".board")
for(let i=0;i<9; i++){
    let tile = document.createElement("div")
    tile.classList.add("tile")
    tile.addEventListener("click",selectTile)
    board.appendChild(tile)
}
//color tile
function selectTile(e){
    if(currentPlayer === "red"){
        if(e.target.className === "tile"){
            e.target.classList.remove("tile")
            e.target.classList.add("red")
            currentPlayer = "blue"
        } 
    } else {
        if(e.target.className === "tile"){  
            e.target.classList.remove("tile")
            e.target.classList.add("blue")
            currentPlayer = "red"
        }
    }
}



