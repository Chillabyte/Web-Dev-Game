export default class InputController {
    constructor(player, map) {
        this.player = player;
        this.map = map
    }

    log() {
        console.log("Input Controller Working");
    }

    movePlayer(xChange, yChange){
        const cellId = `cell-${this.player.x + xChange}-${this.player.y + yChange}`;
        if(this.map.checkCell(cellId))
            this.player.move(xChange, yChange);
    }

    manageKeyPress(keyPressed) {
        console.log(keyPressed);
        switch (keyPressed) {
            case 'ArrowDown': case 'Numpad2': case 'KeyJ': case 'KeyS':
                this.movePlayer(1, 0);
                break;
            case 'ArrowUp': case 'Numpad8': case 'KeyK': case 'KeyW':
                this.movePlayer(-1, 0);
                break;
            case 'ArrowRight': case 'Numpad6': case 'KeyL': case 'KeyD':
                this.movePlayer(0, 1);
                break;
            case 'ArrowLeft': case 'Numpad4': case 'KeyH': case 'KeyA':
                this.movePlayer(0, -1);
                break;
            case 'Numpad7': case 'KeyY':
                this.movePlayer(-1, -1);
                break;
            case 'Numpad9': case 'KeyU':
                this.movePlayer(-1, 1);
                break;
            case 'Numpad1': case 'KeyB':
                this.movePlayer(1, -1);
                break;
            case 'Numpad3': case 'KeyN':
                this.movePlayer(1, 1);
                break;
            // case "Space":
            //     let oneOrZero = (Math.random() >= 0.5) ? 1 : 0;
            //     if (oneOrZero) {
            //         this.models.player.updateArtifactPoints();
            //     }
            //     else {
            //         this.models.player.updateWonderPoints();
            //     }
            //     break;
            // case 'KeyM':
            //     this.models.muted = !this.models.muted;
            //     this.models.updateBackgroundMusic();
            //     break;
            default:
                break;
        }
    }
}
