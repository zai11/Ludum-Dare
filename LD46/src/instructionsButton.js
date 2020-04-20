export default class InstructionsButton {
	constructor(game) {
		this.game = game;
		this.img = document.getElementById("spr_instructions");
		this.img_hover = document.getElementById("spr_instructions_hover");
		this.width = 150;
		this.height = 50;
		this.position = {
			x: this.game.width / 2 - this.width / 2,
			y: this.game.height / 3 * 2 + this.width / 4
		};
		this.title = "b_instructions";
		this.hover = false;
	}
	
	update(deltaTime) {
		
	}
	
	draw(ctx) {
		if (this.hover)
			ctx.drawImage(this.img_hover, this.position.x, this.position.y, this.width, this.height);
		else
			ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
	}
	
	toggleHover(value) {
		this.hover = value;
	}
}