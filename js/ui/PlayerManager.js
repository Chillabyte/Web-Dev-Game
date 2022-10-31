export default class PlayerManager{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.icon = document.querySelector("#player");
    }

    log(){
        console.table(this);
    }
    
    move(x, y, initialized = true){
        // Remove player from old location.
        const oldCell = (initialized) ? 
            document.querySelector(`#cell-${this.x}-${this.y} > .fore`):
            document.querySelector(`#templates`);

        const playerElement = document.querySelector("#player");        
        oldCell.removeChild(playerElement);

        // Update Location and add player to new location.
        this.x += x;
        this.y += y;
        const newCell = document.querySelector(`#cell-${this.x}-${this.y} > .fore`);
        newCell.appendChild(playerElement);
    }


}