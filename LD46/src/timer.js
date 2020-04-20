export default class Timer {
	constructor(game) {
		this.game = game;
		this.width = 40;
		this.height = 40;
		this.position = {
			x: 5,
			y: 5
		};
		this.time = 0;
		this.reset();
	}
	
	reset() {
		this.time = 0;
	}
	
	update(deltaTime) {
		this.time += 1/60;
	}
	
	draw(ctx) {
		ctx.font = "30px Arial";
		ctx.fillStyle = "#000";
		ctx.textAlign = "center";
		ctx.fillText(Math.floor(this.time), this.position.x + 2 + (this.width / 2), this.position.y + 10 +(this.height / 2));
	}
}