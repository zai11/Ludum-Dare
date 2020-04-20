import GamesButton from './gamesButton.js'

export default class HUD {

	constructor(game) {
		this.maxHealth = 100;
		this.health = this.maxHealth;
		this.game = game;
		this.healthChangeDisplays = [];
		this.gamesButton = new GamesButton(this.game);
		this.buttons = [
			this.gamesButton,
		];
	}
	
	draw(ctx) {
		ctx.fillStyle = "#F00";
		ctx.fillRect(this.game.width - 4 - this.health, 5, this.health, 15);
		ctx.beginPath();
		ctx.rect(this.game.width - 4 - this.maxHealth, 5, this.maxHealth, 15);
		ctx.stroke();
		this.healthChangeDisplays.forEach((hcd) => hcd.draw(ctx));
		this.buttons.forEach((b) => b.draw(ctx));
	}
	
	update(deltaTime) {
		this.buttons.forEach((b) => b.update(deltaTime));
		this.health = this.game.animal.health;
		this.healthChangeDisplays.forEach(function(hcd) {
			hcd.update(deltaTime);
			if (hcd.destroy)
				hcd = null;
		});
		for (let i = 0; i < this.healthChangeDisplays.length; i++) {
			let hcd = this.healthChangeDisplays[i];
			hcd.update(deltaTime);
			if (hcd.destroy) {
				this.healthChangeDisplays.splice(i, 1);
				hcd = null;
			}
		}
	}
}