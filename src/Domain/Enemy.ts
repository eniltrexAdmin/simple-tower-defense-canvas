export class Enemy {
    healthPoints: number;
    boardRow: number;
    readonly startingTurn: number;
    readonly boardColumn: number;
    isDead: boolean;
    inBoard: boolean;

    constructor(healthPoints: number, startingTurn: number, boardColumn: number) {
        this.healthPoints = healthPoints;
        this.boardColumn = boardColumn;
        this.startingTurn = startingTurn;

        this.boardRow = -1;
        this.inBoard = false;
        if (startingTurn === 0) {
            this.boardRow = 0;
            this.inBoard = true;
        }
        this.isDead = false;
    }

    hit(damage: number) {
        if (this.boardRow === -1) {
            return;
        }
        this.healthPoints -= damage
        if (this.healthPoints <= 0) {
            this.healthPoints = 0;
            this.isDead = true
        }
    }

    turn(turnCounter: number) {
        if(this.startingTurn === turnCounter) {
            this.inBoard = true;
        }
        if (this.inBoard) {
            this.boardRow++;
        }
    }

}