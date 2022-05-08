import {GameHandler} from "../../Application/GameHandler";
import {GameTimeSnapshot} from "../../../Application/PlainObjects/GameTimeSnapshot";

export default class canvasBoard {
    private canvasContext: CanvasRenderingContext2D;
    private gameHandler: GameHandler;

    constructor(level:number, canvasContext: CanvasRenderingContext2D) {
        this.gameHandler = new GameHandler(level);
        this.canvasContext = canvasContext;
        this.drawGameSnapshot(this.gameHandler.getGameSnapshot());
    }

    private drawGameSnapshot(gameSnapshot: GameTimeSnapshot): void
    {
        for (let i = 0; i < gameSnapshot.board.map.length; i++) {
            this.canvasContext.beginPath();
            this.canvasContext.rect(20, 20, 150, 100);
            this.canvasContext.stroke();
        }
    }
}
