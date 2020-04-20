export default class Alien {
	constructor(game) {
		this.img1 = document.getElementById('spr_alien1');
		this.img2 = document.getElementById('spr_alien2');
		this.img3 = document.getElementById('spr_alien3');
		this.width = 225;
		this.height = 375;
		this.game = game;
		this.position = {
			x: this.game.width / 2 - this.width / 2,
			y: this.game.height - this.height - 5
		};
		this.maxHealth = 100;
		this.health = 75;
		this.healthDec = 1;
		this.reset();
		this.state = 0;
	}
	
	reset() {
		this.health = 75;
	}
	
	draw(ctx) {
		switch (this.state) {
			case 0:
				ctx.drawImage(this.img1, this.position.x, this.position.y, this.width, this.height);
				break;
			case 1:
				ctx.drawImage(this.img2, this.position.x, this.position.y, this.width, this.height);
				break;
			case 2:
				ctx.drawImage(this.img3, this.position.x, this.position.y, this.width, this.height);
				break;
		}
	}
	
	update(deltaTime) {
		this.health -= this.healthDec / 60;
		if (this.health <= 0) {
			this.health = 0;
			this.game.toggleGameOver();
		}
		if (this.health >= this.maxHealth)
			this.health = this.maxHealth;
		if ((Math.floor(this.game.timer.time % 60) === 0) && (Math.floor(this.game.timer.time) !== 0))
			setTimeout(function() {
				this.healthDec *= 3;
			}, 500);
			
		if (this.health <= 50 && this.health > 25) {
			this.state = 1;
		}
		else if (this.health <= 25) {
			this.state = 2;
		}
		else {
			this.state = 0;
		}
	}
}