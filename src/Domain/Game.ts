import {Board} from "./Board";
import {TowerDeck} from "./TowerDeck";
import {EnemyAttackFormation} from "./EnemyAttackFormation";
import {Tower} from "./Tower";

export class Game {
    readonly levelNumber: number;
    readonly board: Board;
    readonly columnsNumber: number;
    turnCounter: number;
    gameWon: boolean;
    gameLost: boolean;
    towerDeck: TowerDeck;
    enemyAttackFormation: EnemyAttackFormation;

    constructor(enemyAttackFormation: EnemyAttackFormation, boardColumns: number, levelNumber:number = 1)
    {
        // the columns number I got it from the enemy attack formation FTM.
        this.levelNumber = levelNumber;
        this.gameWon = false;
        this.gameLost = false;
        this.turnCounter = 0;
        this.columnsNumber = boardColumns;
        this.enemyAttackFormation = enemyAttackFormation;
        this.towerDeck = new TowerDeck(this.columnsNumber);
        this.board = new Board(this.columnsNumber);

    }

    static clone(game: Game) {
        return new Game(game.enemyAttackFormation, game.columnsNumber, game.levelNumber);
    }

    public addTower(tower: Tower): void
    {
        this.towerDeck.addTower(tower)
        this.turn();
    }

    public moveTower(boardColumnOrigin: number, boardColumnDestination:number): void
    {
        this.towerDeck.moveTower(boardColumnOrigin, boardColumnDestination);
        this.turn();
    }

    public gameOver(): boolean
    {
        return this.gameWon || this.gameLost;
    }

    private turn(): void
    {
        this.turnCounter++;
        if (this.gameOver()) {
            throw new Error("Game is Over can't keep playing");
        }
        let mostAdvancedEnemyRow = this.enemyAttackFormation.turn(this.turnCounter, this.towerDeck.towers);
        if (mostAdvancedEnemyRow > this.board.rows) {
            this.gameLost = true;
        }
        if (this.enemyAttackFormation.enemiesCounter <= 0) {
            this.gameWon = true;
        }
        if (this.gameOver()) {
            throw new Error("Game OVER");
        }
        this.board.updateMap(this.enemyAttackFormation)
    }



}