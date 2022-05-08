import {Enemy} from "../../Domain/Enemy";

export class EnemyPO {
    readonly healthPoints: number;

    // constructor(healthPoints: number) {
    //     this.healthPoints = healthPoints
    // }

    constructor(enemy: Enemy) {
        this.healthPoints = enemy.healthPoints
    }
}