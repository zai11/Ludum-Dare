export default class GameOver {
	constructor(game) {
		this.game = game;
	}
	
	draw(ctx) {
		ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
		ctx.fillRect(0, 0, this.game.width, this.game.height);
		ctx.font = "42px Arial";
		ctx.fillStyle = "#A00";
		ctx.textAlign = "center";
		ctx.fillText("GAME OVER!", this.game.width / 2, 80);
		ctx.font = "30px Arial";
		ctx.fillStyle = "#FFF";
		ctx.fillText("Score: " + Math.floor(this.game.timer.time), this.game.width / 2, this.game.height / 2);
		ctx.font = "18px Arial";
		ctx.fillText("Press ESC to return to the main menu...", this.game.width / 2, this.game.height - 40);
	}
}