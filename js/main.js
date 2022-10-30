import DataRepo from "./data-access/DataRepo.js";
import MapManager from "./ui/MapManager.js";

const repo = new DataRepo("Data!!!");
repo.log();

const mm = new MapManager("Maps!!!");
mm.log();
mm.initializeBoard();

window.addEventListener('resize', () => {
    mm.updateBoardProperties();
});