import DataRepo from "./data-access/DataRepo.js";
import MapManager from "./ui/MapManager.js";
import PlayerManager from "./ui/PlayerManager.js";
import InputController from "./controllers/InputController.js";

const repo = new DataRepo();
const mm = new MapManager();
const pm = new PlayerManager();
const ic = new InputController(pm, mm);

mm.initializeBoard();
pm.move(0,0, false);

window.addEventListener('resize', () => {
    mm.updateBoardProperties();
});

document.addEventListener('keydown', e =>{
    ic.manageKeyPress(e.code);
});