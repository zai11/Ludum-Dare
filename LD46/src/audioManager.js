export default class AudioManager {
	constructor(game) {
		this.game = game;
		this.musicPlaying = false;
		this.music = new Howl({
			src: ['./assets/audio/bgmusic.ogg'],
			autoplay: false,
			loop: true,
			volume:0.3
		});
		this.scoreAudio = new Howl({
			src: ['./assets/audio/score.ogg'],
			autoplay: false,
			loop: false,
			volume:0.5
		});
		this.failAudio = new Howl({
			src: ['./assets/audio/fail.ogg'],
			autoplay: false,
			loop: false,
			volume:0.5
		});
	}
	
	toggleAudio() {
		if (this.game.audioButton.mute)
			this.game.audioButton.mute = false;
		else
			this.game.audioButton.mute = true;
	}
	
	playMusic() {
		if (!this.music.playing()) {
			this.music.play();
		}
	}
	
	playScoreAudio() {
		if (!this.scoreAudio.playing()) {
			this.scoreAudio.play();
		}
	}
	
	playFailAudio() {
		if (!this.failAudio.playing()) {
			this.failAudio.play();
		}
	}
	
	stopMusic() {
		this.music.pause();
	}
}