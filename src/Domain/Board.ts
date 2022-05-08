import {Enemy} from "./Enemy";
import {EnemyAttackFormation} from "./EnemyAttackFormation";

export class Board {
    readonly columns: number;
    readonly rows: number;
    map: (Enemy | null)[][]

    constructor(columns: number, rows: number = 4) {
        this.columns = columns;
        this.rows = rows;
        this.map = [];
        this.createCleanMap()
    }

    private createCleanMap() {
        for (let row = 0; row < this.rows; row++) {
            this.map[row] = [];
            for (let column = 0; column < this.columns; column++) {
                this.map[row][column] = null;
            }
        }
    }

    updateMap(enemyAttackFormation: EnemyAttackFormation) {
        this.createCleanMap()
        for (let column = 0; column < this.columns; column++) {
            enemyAttackFormation.enemies[column].forEach((enemy: Enemy) => {
                if (!enemy.inBoard) return;
                this.map[enemy.boardRow][column] = enemy;
            });
        }
    }


}