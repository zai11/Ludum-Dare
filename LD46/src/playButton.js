export default class PlayButton {
	constructor(game) {
		this.img = document.getElementById("spr_play");
		this.img_hover = document.getElementById("spr_play_hover");
		this.game = game;
		this.width = 150;
		this.height = 50;
		this.position = {
			x: this.game.width / 2 - this.width / 2,
			y: this.game.height / 3 * 2 - this.width / 4
		}
		this.title = "b_play";
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