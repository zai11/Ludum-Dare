export default class AudioButton {
	constructor(game) {
		this.game = game;
		this.img_playing = document.getElementById("spr_audio_playing");
		this.img_playing_hover = document.getElementById("spr_audio_playing_hover");
		this.img_mute = document.getElementById("spr_audio_mute");
		this.img_mute_hover = document.getElementById("spr_audio_mute_hover");
		this.width = 50;
		this.height = 50;
		this.position = {
			x: 10,
			y: this.game.height - this.height - 10
		};
		this.mute = true;
		this.isPlaying = false;
		this.title = "b_audio";
		this.hover = false;
	}
	
	update(deltaTime) {
		if (!this.mute && !this.isPlaying)
			this.game.playMusic();
		else
			this.game.stopMusic();
	}
	
	draw(ctx) {
		if (this.mute) {
			if (this.hover)
				ctx.drawImage(this.img_mute_hover, this.position.x, this.position.y, this.width, this.height);
			else
				ctx.drawImage(this.img_mute, this.position.x, this.position.y, this.width, this.height);
		}
		else {
			if (this.hover)
				ctx.drawImage(this.img_playing_hover, this.position.x, this.position.y, this.width, this.height);
			else
				ctx.drawImage(this.img_playing, this.position.x, this.position.y, this.width, this.height);
		}
	}
	
	toggleHover(value) {
		this.hover = value;
	}
}