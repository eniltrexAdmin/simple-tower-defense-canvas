import {CALAMAR, OCTOPUS} from "./enemies";

export const level2 = {
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
        },
        {
            "startingTurn": 4,
            "boardColumn": 2,
            "enemy": OCTOPUS
        },
        {
            "startingTurn": 5,
            "boardColumn": 3,
            "enemy": OCTOPUS
        },
        {
            "startingTurn": 6,
            "boardColumn": 4,
            "enemy": OCTOPUS
        },
        {
            "startingTurn": 7,
            "boardColumn": 0,
            "enemy": OCTOPUS
        },
        {
            "startingTurn": 8,
            "boardColumn": 0,
            "enemy": OCTOPUS
        }
    ]
}