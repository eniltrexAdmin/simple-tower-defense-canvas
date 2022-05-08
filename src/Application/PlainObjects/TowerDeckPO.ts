import {TowerPO} from "./TowerPO";
import {TowerDeck} from "../../Domain/TowerDeck";

export class TowerDeckPO {
    towerDeck: (TowerPO|null)[];

    constructor(towerDeck: TowerDeck)
    {
        let towersPO:(TowerPO|null)[] = [];
        for (let column=0; column < towerDeck.towers.length; column++) {
            let towerOrNull = towerDeck.towers[column];
            towersPO[column] = towerOrNull ? new TowerPO(towerOrNull, column): null;
        }
        this.towerDeck = towersPO;
    }
}