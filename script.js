let board = document.querySelector(".board");
for(let i=0;i<9; i++){
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.addEventListener("click",selectTile)
    board.appendChild(tile);
}

function selectTile(){
    alert("YOU CLICKED ME!");
}