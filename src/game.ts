export default class Game {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private height: number = window.innerHeight;
    private width: number = window.innerWidth;

    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('game-canvas');

        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext("2d");
        if(null === this.context) {
            throw new Error('could not start canvas');
        }
    }

    public render(): void {
        console.log('rendering');
    }
}
