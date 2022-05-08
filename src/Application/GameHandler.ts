import {Game} from "../Domain/Game";
import {GameTimeSnapshot} from "./PlainObjects/GameTimeSnapshot";
import {EnemyAttackFormation} from "../Domain/EnemyAttackFormation";
import {level1} from "../data/level1";
import {level2} from "../data/level2";
import {Enemy} from "../Domain/Enemy";
import {Tower} from "../Domain/Tower";

export class GameHandler {
    private game: Game

    constructor(level: number = 1) {
        const dataLevel = this.getLevelData(level)
        let enemyAttackFormation: EnemyAttackFormation = new EnemyAttackFormation(dataLevel.boardColumns);
        let boardColumns = dataLevel.boardColumns;
        dataLevel.enemyAttackFormation.forEach((dataEnemyAttackFormation)=> {
            enemyAttackFormation.addEnemy(
                new Enemy(
                    dataEnemyAttackFormation.enemy.healthPoints,
                    dataEnemyAttackFormation.startingTurn,
                    dataEnemyAttackFormation.boardColumn,
                )
            )
        })
        this.game = new Game(enemyAttackFormation, boardColumns, level)
    }

    private getLevelData(level:number)
    {
        if(level ===1) {
            return level1;
        } else{
            return level2;
        }
    }

    getGameSnapshot(): GameTimeSnapshot
    {
        return new GameTimeSnapshot(this.game);
    }

    CreateTower(): GameTimeSnapshot
    {
        let tower = new Tower(1);
        this.game.addTower(tower);
        return this.getGameSnapshot()
    }

    MoveTower(originColumn:number, destinationColumn: number): GameTimeSnapshot
    {
        this.game.moveTower(originColumn, destinationColumn);
        return this.getGameSnapshot()
    }
}