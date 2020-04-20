export default class CorrectDisplay {
	constructor(game) {
		this.game = game;
		this.width = 80;
		this.height = 80;
		this.position = {
			x: this.game.width / 3 * 2,
			y: this.game.height / 2 - 40
		};
		this.visible = false;
	}
	
	update(deltaTime) {
		
	}
	
	draw(ctx) {
		if (this.visible) {
			ctx.font = "30px Arial";
			ctx.fillStyle = "#0A0";
			ctx.fillText("Correct!", this.position.x, this.position.y, this.width, this.height);
		}
	}
}