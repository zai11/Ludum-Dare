export default class GameButton {
	constructor(game, id, pos, available) {
		this.img = document.getElementById("spr_" + id);
		this.img_hover = document.getElementById("spr_" + id + "_hover");
		this.img_tbc = document.getElementById("spr_game_tbc");
		this.game = game;
		this.width = 120;
		this.height = 120;
		this.position = {
			x: ((this.game.width / 3) * pos.x) - this.width / 2 * 3,
			y: ((this.game.height / 6) * 2 * pos.y) - this.height / 3
		};
		this.title = "b_" + id;
		this.hover = false;
		this.available = available;
	}
	
	update(deltaTime) {
		
	}
	
	draw(ctx) {
		if (this.available) {
			if (this.hover)
				ctx.drawImage(this.img_hover, this.position.x, this.position.y, this.width, this.height);
			else
				ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
		}
		else {
			ctx.drawImage(this.img_tbc, this.position.x, this.position.y, this.width, this.height);
			ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
			ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
			ctx.fillStyle = "#000";
			ctx.beginPath();
			ctx.moveTo(this.position.x, this.position.y);
			ctx.lineTo(this.position.x + this.width, this.position.y + this.height);
			ctx.moveTo(this.position.x + this.width, this.position.y);
			ctx.lineTo(this.position.x, this.position.y + this.height);
			ctx.stroke();
		}
	}
	
	toggleHover(value) {
		this.hover = value;
	}
}