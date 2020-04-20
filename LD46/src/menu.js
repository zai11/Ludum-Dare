export default class Menu {
	constructor(game) {
		this.game = game;
		this.buttons = [];
	}
	
	draw(ctx) {
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, this.game.width, this.game.height);
		ctx.font = "42px Arial";
		ctx.fillStyle = "#FFF";
		ctx.textAlign = "center";
		ctx.fillText("Stayin' Alive", this.game.width / 2, this.game.height / 5 * 2 + 20);
		this.buttons.forEach((b) => b.draw(ctx));
	}
}