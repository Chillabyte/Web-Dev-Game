import DataRepo from "./data-access/DataRepo.js";
import MapManager from "./ui/MapManager.js";
import PlayerManager from "./ui/PlayerManager.js";

const repo = new DataRepo("Data!!!");
repo.log();

const mm = new MapManager("Maps!!!");
mm.log();
mm.initializeBoard();

const pm = new PlayerManager("Player!!!");
pm.log();

pm.updatePlayerPosition(0,0);

window.addEventListener('resize', () => {
    mm.updateBoardProperties();
});