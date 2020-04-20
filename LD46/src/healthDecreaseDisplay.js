export default class HealthDecreaseDisplay {
	constructor(game, amount) {
		this.game = game;
		this.amount = amount;
		this.displayTime = 0;
		this.destroy = false;
	}
	
	update(deltaTime) {
		this.displayTime += 1 / 30;
		if (this.displayTime >= 2) {
			this.destroy = true;
		}
	}
	
	draw(ctx) {
		ctx.font = "18px Arial";
		ctx.fillStyle = "#A00";
		ctx.textAlign = "center";
		ctx.fillText("-" + this.amount + " health", this.game.width / 5 * 4, 100);
	}
}