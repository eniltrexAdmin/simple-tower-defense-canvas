import {Tower} from "../../Domain/Tower";

export class TowerPO {
    readonly towerType: string
    readonly damage: number
    readonly column: number

    constructor(tower: Tower, column:number) {
        this.towerType = "the only kind";
        this.damage = tower.damagePoints
        this.column = tower.boardColumn
    }
}