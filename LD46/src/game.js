import Alien from './alien.js'
import HUD from './hud.js'
import InputHandler from './inputHandler.js'
import Timer from './timer.js'
import Menu from './menu.js'
import PlayButton from './playButton.js'
import GameButton from './gameButton.js'
import InstructionsButton from './instructionsButton.js'
import Instructions from './instructions.js'
import GamesMenu from './gamesMenu.js'
import GameOver from './gameOver.js'
import RMT from './rmt.js'
import HealthIncreaseDisplay from './healthIncreaseDisplay.js'
import HealthDecreaseDisplay from './healthDecreaseDisplay.js'
import HiLo from './hilo.js'
import AudioButton from './audioButton.js'

const GAMESTATES = {
	MENU: 0,
	HOME: 1,
	GAMES: 2,
	GAMEOVER: 3,
	RMT: 4,
	INSTRUCTIONS: 5,
	HILO: 6
};

export default class Game {
	constructor(canvas, gameWidth, gameHeight) {
		this.canvas = canvas;
		this.width = gameWidth;
		this.height = gameHeight;
		this.gamestate = GAMESTATES.MENU;
		this.gameObjects = [];
		this.buttons = [];
		this.globalObjects = [];
		this.alien = new Alien(this);
		this.menu = new Menu(this);
		this.hud = new HUD(this);
		this.timer = new Timer(this);
		this.playButton = new PlayButton(this);
		this.instructionsButton = new InstructionsButton(this);
		this.instructions = new Instructions(this);
		this.gamesMenu = new GamesMenu(this);
		this.gameOver = new GameOver(this);
		this.rmt = new RMT(this);
		this.hilo = new HiLo(this);
		this.healthIncreaseDisplay;
		this.healthDecreaseDisplay;
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
		this.audioButton = new AudioButton(this);
	}
	
	start() {
		this.gameObjects = [ 
			this.alien,
			this.hud,
			this.timer
		];
		this.menu.buttons = [
			this.playButton,
			this.instructionsButton,
		];
		this.globalObjects = [
			this.audioButton
		];
		this.inputHandler = new InputHandler(this.canvas, this);
	}
	
	update(deltaTime) {
		this.globalObjects.forEach((object) => object.update(deltaTime));
		if (this.gamestate === GAMESTATES.HOME)
			this.gameObjects.forEach((object) => object.update(deltaTime));
		if (this.gamestate === GAMESTATES.GAMES)
			this.gamesMenu.gameButtons.forEach((b) => b.update(deltaTime));
		if (this.gamestate === GAMESTATES.MENU)
			this.menu.buttons.forEach((b) => b.update(deltaTime));
		if (this.gamestate === GAMESTATES.RMT)
			this.rmt.update(deltaTime);
		if (this.gamestate === GAMESTATES.HILO)
			this.hilo.update(deltaTime);
	}
	
	draw(ctx) {
		if (this.gamestate !== GAMESTATES.MENU && this.gamestate !== GAMESTATES.RMT && this.gamestate !== GAMESTATES.HILO && this.gamestate !== GAMESTATES.INSTRUCTIONS)
			this.gameObjects.forEach((object) => object.draw(ctx));
		if (this.gamestate === GAMESTATES.GAMES)
			this.gamesMenu.draw(ctx);
		if (this.gamestate === GAMESTATES.GAMEOVER)
			this.gameOver.draw(ctx);
		if (this.gamestate === GAMESTATES.MENU)
			this.menu.draw(ctx);
		if (this.gamestate === GAMESTATES.RMT)
			this.rmt.draw(ctx);
		if (this.gamestate === GAMESTATES.HILO)
			this.hilo.draw(ctx);
		if (this.gamestate === GAMESTATES.INSTRUCTIONS) {
			this.instructions.draw(ctx);
		}
		this.globalObjects.forEach((object) => object.draw(ctx));
	}
	
	toggleGamesMenu() {
		this.gamestate = GAMESTATES.GAMES;
	}
	
	toggleGameOver() {
		this.gamestate = GAMESTATES.GAMEOVER;
	}
	
	toggleHome() {
		this.gamestate = GAMESTATES.HOME;
	}
	
	toggleMenu() {
		this.gamestate = GAMESTATES.MENU;
	}
	
	toggleRMT() {
		this.rmt.reset();
		this.gamestate = GAMESTATES.RMT;
	}
	
	toggleHiLo() {
		this.hilo.reset();
		this.gamestate = GAMESTATES.HILO;
	}
	
	toggleInstructions() {
		this.gamestate = GAMESTATES.INSTRUCTIONS;
	}
	
	toggleAudio() {
		if (this.audioButton.mute)
			this.audioButton.mute = false;
		else
			this.audioButton.mute = true;
	}
	
	reset() {
		this.alien.reset();
		this.timer.reset();
	}
	
	increaseHealth(amount) {
		this.healthIncreaseDisplay = new HealthIncreaseDisplay(this, amount);
		this.hud.healthChangeDisplays.push(this.healthIncreaseDisplay);
		this.alien.health += amount;
	}
	
	decreaseHealth(amount) {
		this.healthDecreaseDisplay = new HealthDecreaseDisplay(this, amount);
		this.hud.healthChangeDisplays.push(this.healthDecreaseDisplay);
		this.alien.health -= amount;
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