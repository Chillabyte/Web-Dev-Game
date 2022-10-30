export default class PlayerManager{
    constructor(message){
        this.message = message;
        this.x = 0;
        this.y = 0;
        this.icon = document.querySelector("#player");
    }

    updatePlayerPosition(x, y){
        const newCell = document.querySelector(`#cell-${x}-${y} > .fore`);
        const oldCell = document.querySelector(`#cell-${this.x}-${this.y} > .fore`);

        const i= this.icon.cloneNode(true);
        newCell.appendChild(i);
    }

    log(){
        console.table(this);
    }
}