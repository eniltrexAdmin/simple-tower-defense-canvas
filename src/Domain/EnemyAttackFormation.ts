import {Enemy} from "./Enemy";
import {Tower} from "./Tower";

export class EnemyAttackFormation {
    turnCounter: number
    boardColumns: number
    enemiesCounter: number
    enemies: Enemy[][]

    constructor(boardColumns: number) {
        this.boardColumns = boardColumns;
        this.turnCounter = 0;
        this.enemiesCounter = 0;
        this.enemies = [];
        for (let i = 0; i < this.boardColumns; i++) {
            this.enemies.push([]);
        }
    }

    addEnemy(enemy: Enemy): void {
        if (enemy.boardColumn < 0 || enemy.boardColumn > this.boardColumns) {
            throw new Error("Enemy is out of range of the board.")
        }
        this.enemies[enemy.boardColumn].push(enemy)
        this.enemies[enemy.boardColumn].sort(function (enemyA: Enemy, enemyB: Enemy): number {
            if (enemyA.startingTurn === enemyB.startingTurn) {
                throw new Error("Two enemies cant start on the same column on the same turn");
            }
            if (enemyA.startingTurn < enemyB.startingTurn) {
                return -1
            }
            return 1;
        })
        this.enemiesCounter++;
    }

    turn(turnCounter: number, attackingTowers: (Tower | null)[]): number {
        // Attack first the towers
        for (let i = 0; i < this.boardColumns; i++) {
            if (attackingTowers[i] !== null) {
                this.fireInColumn(attackingTowers[i]!.damagePoints, i);
            }
        }
        // Advance all the enemies
        // return the position of the most advanced enemy.
        let mostAdvancedEnemyPosition = 0;
        this.enemies.forEach(function (enemiesInColumn: Enemy[]) {
            enemiesInColumn.forEach(function (enemy: Enemy) {
                enemy.turn(turnCounter);
                if (enemy.boardRow > mostAdvancedEnemyPosition) {
                    mostAdvancedEnemyPosition = enemy.boardRow
                }
            });
        });
        return mostAdvancedEnemyPosition;
    }

    private fireInColumn(damagePoints: number, column: number) {
        if (this.enemies[column].length > 0) {
            //get first.
            let enemy = this.enemies[column][0];
            enemy.hit(damagePoints)
            if (enemy.isDead) {
                this.enemies[column].shift()
                this.enemiesCounter--;
            }
        }
    }

}