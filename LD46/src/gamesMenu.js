import GameButton from './gameButton.js'

export default class GamesMenu {
	constructor(game) {
		this.game = game;
		this.gameRMTButton = new GameButton(this.game, "game_rmt", {x: 1, y: 1}, true)
		this.gameHiLoButton = new GameButton(this.game, "game_hilo", {x:2, y:1}, true);
		this.gameTBC1 = new GameButton(this.game, "temp", {x: 3, y: 1}, false);
		this.gameTBC2 = new GameButton(this.game, "temp", {x: 1, y: 2}, false);
		this.gameTBC3 = new GameButton(this.game, "temp", {x: 2, y: 2}, false);
		this.gameTBC4 = new GameButton(this.game, "temp", {x: 3, y: 2}, false);
		this.gameButtons = [
			this.gameRMTButton,
			this.gameHiLoButton,
			this.gameTBC1,
			this.gameTBC2,
			this.gameTBC3,
			this.gameTBC4
		];
	}
	
	draw(ctx) {
		ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
		ctx.fillRect(0, 0, this.game.width, this.game.height);
		ctx.font = "30px Arial";
		ctx.fillStyle = "#FFF";
		ctx.textAlign = "center";
		ctx.fillText("Games", this.game.width / 2, 80);
		ctx.font = "18px Arial";
		ctx.fillText("Press ESC to return...", this.game.width / 2, this.game.height - 40);
		this.gameButtons.forEach((b) => b.draw(ctx));
	}
}