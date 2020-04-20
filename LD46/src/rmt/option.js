export default class Option {
	constructor(game, qNum, id) {
		this.game = game;
		this.id = id;
		this.qNum = qNum;
		this.img = document.getElementById("spr_game_rmt_q" + this.qNum + "o" + this.id);
		this.width = 120;
		this.height = 100;
		this.position = {
			x: this.game.width / 5 * this.id - this.width / 2,
			y: this.game.height - 200
		};
		this.title = "rmt_q" + this.qNum + "o" + id;
		this.correct = false;
	}
	
	update(deltaTime) {
		
	}
	
	draw(ctx) {
		ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
	}
	
	changeOption(qNum, id, correct) {
		this.id = id;
		this.qNum = qNum;
		this.img = document.getElementById("spr_game_rmt_q" + this.qNum + "o" + this.id);
		this.position = {
			x: this.game.width / 5 * this.id - this.width / 2,
			y: this.game.height - 150
		};
		this.title = "rmt_q" + this.qNum + "o" + id;
		this.correct = correct;
	}
	
	clicked() {
		if(this.correct)
			this.game.rmt.increaseScore();
		else
			this.game.rmt.error();
	}
}