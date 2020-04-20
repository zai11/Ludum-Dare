import Option from './rmt/option.js'

export default class RMT {
	constructor(game) {
		this.game = game;
		this.score = 0;
		this.riddle = "Test riddle";
		this.option1 = new Option(this.game, 1, 1);
		this.option2 = new Option(this.game, 1, 1);
		this.option3 = new Option(this.game, 1, 1);
		this.option4 = new Option(this.game, 1, 1);
		this.options = [
			this.option1,
			this.option2,
			this.option3,
			this.option4
		];
		this.passedNums;
	}
	
	update(deltaTime) {
		this.options.forEach((o) => o.update(deltaTime));
	}
	
	draw(ctx) {
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, this.game.width, this.game.height);
		ctx.font = "42px Arial";
		ctx.fillStyle = "#FFF";
		ctx.textAlign = "center";
		ctx.fillText(this.score, 80, 80);
		ctx.fillText("Riddle me this", this.game.width / 2, 80);
		ctx.fillStyle = "#FFF";
		ctx.font = "16px Arial";
		ctx.textAlign = "center";
		ctx.fillText(this.riddle, this.game.width / 2, this.game.height / 2 - 20);
		this.options.forEach((o) => o.draw(ctx));
	}
	
	generateRiddle() {
		let rand = Math.floor(Math.random() * 6 + 1);
		while (this.passedNums.includes(rand))
			rand = Math.floor(Math.random() * 6 + 1);
		this.passedNums.push(rand);
		switch(rand) {
			case 1:
				this.riddle = "Pick me up and scratch my head. I'll turn red and then black. What am I?";
				this.option1.changeOption(rand, 1, true);
				this.option2.changeOption(rand, 2, false);
				this.option3.changeOption(rand, 3, false);
				this.option4.changeOption(rand, 4, false);
				break;
			case 2:
				this.riddle = "I can be broken without being touched or even being seen. What am I?";
				this.option1.changeOption(rand, 1, false);
				this.option2.changeOption(rand, 2, false);
				this.option3.changeOption(rand, 3, true);
				this.option4.changeOption(rand, 4, false);
				break;
			case 3:
				this.riddle = "I have a neck, but I don’t have a head, and I wear a cap. What am I?";
				this.option1.changeOption(rand, 1, false);
				this.option2.changeOption(rand, 2, true);
				this.option3.changeOption(rand, 3, false);
				this.option4.changeOption(rand, 4, false);
				break;
			case 4:
				this.riddle = "If you have it, you want to share it. If you share it, you don’t have it anymore. What is it?";
				this.option1.changeOption(rand, 1, false);
				this.option2.changeOption(rand, 2, false);
				this.option3.changeOption(rand, 3, true);
				this.option4.changeOption(rand, 4, false);
				break;
			case 5:
				this.riddle = "Adriana's mom had four kids: Marta, Anna, Justina, and...";
				this.option1.changeOption(rand, 1, false);
				this.option2.changeOption(rand, 2, false);
				this.option3.changeOption(rand, 3, true);
				this.option4.changeOption(rand, 4, false);
				break;
			case 6:
				this.riddle = "A woman is walking, then suddenly dies in the middle of the street. How?";
				this.option1.changeOption(rand, 1, true);
				this.option2.changeOption(rand, 2, false);
				this.option3.changeOption(rand, 3, false);
				this.option4.changeOption(rand, 4, false);
				break;
			case 7:
				this.riddle = "What walks on four legs in the morning, two in the afternoon and three in the evening?";
				this.option1.changeOption(rand, 1, false);
				this.option2.changeOption(rand, 2, true);
				this.option3.changeOption(rand, 3, false);
				this.option4.changeOption(rand, 4, false);
				break;
		}
	}
	
	reset() {
		this.score = 0;
		this.passedNums = [];
		this.generateRiddle();
	}
	
	error() {
		this.game.decreaseHealth(5);
		this.game.audioManager.playFailAudio();
		this.game.toggleHome();
	}
	
	increaseScore() {
		this.game.audioManager.playScoreAudio();
		this.score++;
		if (this.score >= 3) {
			this.game.increaseHealth(5);
			this.game.toggleHome();
		}
		else
			this.generateRiddle();
	}
}