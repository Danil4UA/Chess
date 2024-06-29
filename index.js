const container = document.getElementById("container")

function createChessBoard (){
    for(let i = 0; i < 64; i++){
        const createBlock = document.createElement("div")
        createBlock.id = "item"
        container.appendChild(createBlock)
    }
}

createChessBoard()

function spreadColors(){
    let curr;

    let white = "white"
    let black = "rgb(47, 47, 47)"

    const allItems = document.querySelectorAll("#item")

    allItems.forEach((item, i)=>{
        if(i % 8 === 0){
            curr = black
            black = white
            white = curr
        }
        if(i % 2 === 0){
            item.style.backgroundColor = white
        }else{
            item.style.backgroundColor = black
        }
    })
}


spreadColors()
