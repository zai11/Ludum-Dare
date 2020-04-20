import HigherButton from './hilo/higherButton.js'
import LowerButton from './hilo/lowerButton.js'
import CorrectDisplay from './hilo/correctDisplay.js'
import IncorrectDisplay from './hilo/incorrectDisplay.js'

export default class HiLo {
	constructor(game) {
		this.game = game;
		this.number = 5;
		this.higher = new HigherButton(this.game);
		this.lower = new LowerButton(this.game);
		this.buttons = [
			this.higher,
			this.lower
		];
		this.correctDisplay = new CorrectDisplay(this.game);
		this.incorrectDisplay = new IncorrectDisplay(this.game);
		this.clicked = false;
	}
	
	update(deltaTime) {
		this.buttons.forEach((b) => b.update(deltaTime));
		this.correctDisplay.update(deltaTime);
		this.incorrectDisplay.update(deltaTime);
	}
	
	draw(ctx) {
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, this.game.width, this.game.height);
		ctx.font = "42px Arial";
		ctx.fillStyle = "#FFF";
		ctx.textAlign = "center";
		ctx.fillText("Hi Lo", this.game.width / 2, 80);
		ctx.font = "38px Arial";
		ctx.fillText(this.number, this.game.width / 2, this.game.height / 2 - 40);
		ctx.font = "30px Arial";
		ctx.fillText("Will the next number be higher or lower?", this.game.width / 2, this.game.height / 2 + 30);
		this.buttons.forEach((b) => b.draw(ctx));
		this.correctDisplay.draw(ctx);
		this.incorrectDisplay.draw(ctx);
	}
	
	generateNumber() {
		let oldNum = this.number;
		this.number = Math.floor(Math.random() * 11);
		while (this.number === oldNum) {	
			this.number = Math.floor(Math.random() * 11);
		}
	}
	
	correct(game) {
		this.correctDisplay.visible = true;
		this.game.playScoreAudio();
		setTimeout(function() {
			game.increaseHealth(10);
			game.toggleHome();
		}, 3000);
	}
	
	incorrect(game) {
		this.incorrectDisplay.visible = true;
		this.game.playFailAudio();
		setTimeout(function() {
			game.decreaseHealth(5);
			game.toggleHome();
		}, 3000);
	}
	
	reset() {
		this.number = 5;
		this.correctDisplay.visible = false;
		this.incorrectDisplay.visible = false;
		this.clicked = false;
	}
}