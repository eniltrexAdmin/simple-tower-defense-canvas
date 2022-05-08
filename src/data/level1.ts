import {CALAMAR, OCTOPUS} from "./enemies";

export const level1 = {
    "boardColumns": 5,
    "enemyAttackFormation": [
        {
            "startingTurn": 1,
            "boardColumn": 2,
            "enemy": OCTOPUS
        },
        {
            "startingTurn": 3,
            "boardColumn": 1,
            "enemy": CALAMAR
        }
    ]
}