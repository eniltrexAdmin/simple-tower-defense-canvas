import {EnemyPO} from "./EnemyPO";
import {Board} from "../../Domain/Board";

export class MapPO {
    map: (EnemyPO|null)[][];

    constructor(board: Board)
    {
        let mapPo = []
        for (let row=0; row < board.map.length; row++) {
            let mapPORow = []
            for (let column=0; column< board.map[row].length; column++) {
                let enemyOrNull = board.map[row][column];
                mapPORow[column] = enemyOrNull ? new EnemyPO(enemyOrNull) : null;
            }
            mapPo[row] = mapPORow;
        }
        this.map = mapPo;
    }
}