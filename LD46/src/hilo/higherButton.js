export default class HigherButton {
	constructor(game) {
		this.game = game;
		this.img = document.getElementById("spr_game_hilo_higher");
		this.width = 150;
		this.height = 100;
		this.position = {
			x: this.game.width / 3 - 80,
			y: this.game.height / 3 * 2
		};
		this.title = "b_higher";
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
		if (this.game.hilo.number > oldNum)
			this.game.hilo.correct(this.game);
		else
			this.game.hilo.incorrect(this.game);
	}
}