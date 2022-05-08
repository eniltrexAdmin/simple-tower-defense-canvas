import {TowerPO} from "./TowerPO";
import {Game} from "../../Domain/Game";
import {MapPO} from "./MapPO";
import {TowerDeckPO} from "./TowerDeckPO";

export class GameTimeSnapshot {
    readonly board: MapPO;
    readonly towerDeck: TowerDeckPO
    readonly initialTower: (TowerPO | null);

    constructor(game:Game) {
        this.board = new MapPO(game.board)
        this.initialTower = game.towerDeck.initialTower ? new TowerPO(game.towerDeck.initialTower, -1) : null;
        this.towerDeck = new TowerDeckPO(game.towerDeck)
    }


}