export default class GamesButton {
	constructor(game) {
		this.img = document.getElementById('spr_games');
		this.img_hover = document.getElementById('spr_games_hover');
		this.game = game;
		this.width = 50;
		this.height = 50;
		this.position = {
			x: this.game.width - this.width - 5,
			y: this.game.height - this.height - 5
		}
		this.title = "b_games";
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