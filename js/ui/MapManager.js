export default class MapManager{
    constructor(message){
        this.message = message;
    }

    log(){
        console.table(this);
    }

    initializeBoard(){
        const board = document.querySelector("#game-board");
        const boardHeight = parseInt(board.dataset.height);
        const boardWidth = parseInt(board.dataset.width);
        this.updateBoardProperties();

        const cellTemplate = document.querySelector("#templates > .cell");

        for(let x=0; x<boardWidth; x++){
            for(let y=0; y<boardHeight; y++ ){
                const newCell = cellTemplate.cloneNode(true);
                newCell.id=`cell-${x}-${y}`
                board.appendChild(newCell);
            }
        }
    }

    updateBoardProperties(){
        //set the cell size to 0 first, otherwise main can never shrink.
        document.querySelector(":root").style.setProperty("--cell-size", `0`);
        const main = document.querySelector("main");
        let maxBoardHeight=window.getComputedStyle(main).height;
        maxBoardHeight=parseFloat(maxBoardHeight.replace("px", ""));

        let maxBoardWidth=window.getComputedStyle(main).width;
        maxBoardWidth=parseFloat(maxBoardWidth.replace("px", ""));

        const board = document.querySelector("#game-board");
        const boardHeight = parseInt(board.dataset.height);
        const boardWidth = parseInt(board.dataset.width);

        const cellSizeWidth = maxBoardWidth/boardWidth;
        const cellSizeHeight = maxBoardHeight/boardHeight;
        
        const finalSize = Math.floor(Math.min(cellSizeWidth, cellSizeHeight));
        document.querySelector(":root").style.setProperty("--cell-size", `${finalSize}px`);
        document.querySelector(":root").style.setProperty("--board-width", `${boardWidth}`);
    }
    
}