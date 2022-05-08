import {Tower} from "./Tower";

export class TowerDeck {
    towers: (Tower | null)[]
    boardColumns: number;
    initialTower: Tower | null


    constructor(boardColumns: number, initialTower?: Tower) {
        this.towers = [];
        this.boardColumns = boardColumns
        for (let i = 0; i < this.boardColumns; i++) {
            this.towers.push(null);
        }
        this.initialTower = initialTower ?? null;
    }

    moveTower(boardColumnOrigin: number, boardColumnDestination: number) {
        if (boardColumnDestination > this.boardColumns || boardColumnDestination < 0) {
            throw new Error("Cant move tower out of the board.")
        }
        if (boardColumnOrigin > this.boardColumns || boardColumnOrigin < -1) {
            throw new Error("Cant select that tower")
        }
        if (boardColumnOrigin === boardColumnDestination) return;

        const towerToMove = boardColumnOrigin === -1 ? this.initialTower : this.towers[boardColumnOrigin];
        if (towerToMove === null) {
            throw new Error("No tower to move from origin position.")
        }

        const existingTowerOnDestination = this.towers[boardColumnDestination];

        if (existingTowerOnDestination) {
            existingTowerOnDestination.merge(towerToMove);
        } else {
            this.towers[boardColumnDestination] = towerToMove;
        }

        if (boardColumnOrigin === -1) {
            this.initialTower = null;
        } else {
            this.towers[boardColumnOrigin] = null;
        }

        // to be consistent, but useless attribute this way.
        // maybe one day refactor to use this instead of using the tower deck array this way.
        towerToMove.boardColumn = boardColumnDestination

    }

    addTower(tower: Tower) {
        if (this.initialTower) {
            throw new Error("There is already a tower on the initial position.")
        }
        this.initialTower = tower;
    }
}