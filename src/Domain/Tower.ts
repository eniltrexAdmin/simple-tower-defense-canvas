export class Tower {
    damagePoints: number;
    boardColumn: number;

    constructor(damagePoints: number) {
        this.damagePoints = damagePoints;
        this.boardColumn = -1;
    }

    moveTower(boardColumn: number) {
        this.boardColumn = boardColumn;
    }

    merge(tower: Tower) {
        this.damagePoints +=tower.damagePoints;
    }

}