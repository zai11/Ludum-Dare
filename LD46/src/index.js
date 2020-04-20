import Game from './game.js'

let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 720;
const GAME_HEIGHT = 480;

let game = new Game(canvas, GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

game.start();

function gameLoop(timestamp) {
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	
	game.update(deltaTime);
	game.draw(ctx);
	
	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);