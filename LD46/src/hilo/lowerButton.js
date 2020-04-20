export default class LowerButton {
	constructor(game) {
		this.game = game;
		this.img = document.getElementById("spr_game_hilo_lower");
		this.width = 150;
		this.height = 100;
		this.position = {
			x: this.game.width / 3 * 2 - 40,
			y: this.game.height / 3 * 2
		};
		this.title = "b_lower";
	}
	
	update(deltaTime) {
		
	}
	
	draw(ctx) {
		ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
	}
	
	clicked() {
		this.game.hilo.clicked = true;
		let oldNum = this.game.hilo.number;
		this.game.hilo.generateNumber();
		if (this.game.hilo.number < oldNum)
			this.game.hilo.correct(this.game);
		else
			this.game.hilo.incorrect(this.game);
	}
}