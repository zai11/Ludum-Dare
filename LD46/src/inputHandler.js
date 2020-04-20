import {getMousePos, isInside} from './mouseChecking.js'

export default class InputHandler {
	constructor(canvas, game) {
		this.game = game;
		document.addEventListener("click", function(e) {
			var mousePos = getMousePos(canvas, e);
			
			var buttons = [...game.menu.buttons, ...game.hud.buttons, ...game.gamesMenu.gameButtons, ...game.globalObjects];
			
			buttons.forEach(function(b) {
				let buttonRect = {
					x: b.position.x,
					y: b.position.y,
					width: b.width,
					height: b.height
				};
				if (isInside(mousePos, buttonRect)) {
					if (b.title === "b_games" && game.gamestate === 1)
						game.toggleGamesMenu();
					if (b.title === "b_play" && game.gamestate === 0) {
						game.reset();
						game.toggleHome();
					}
					if (b.title === "b_game_rmt" && game.gamestate === 2)
						game.toggleRMT();
					if (b.title === "b_game_hilo" && game.gamestate === 2)
						game.toggleHiLo();
					if (b.title === "b_instructions" && game.gamestate === 0) 
						game.toggleInstructions();
					if (b.title === "b_audio")
						game.audioManager.toggleAudio();
				}
			});
			
			var options = game.rmt.options;
			
			options.forEach(function(o) {
				let buttonRect = {
					x: o.position.x,
					y: o.position.y,
					width: o.width,
					height: o.height
				};
				
				if (isInside(mousePos, buttonRect)) {
					if (game.gamestate === 4)
						o.clicked();
				}
			});
			
			var buttons = game.hilo.buttons;
			
			buttons.forEach(function(b) {
				let buttonRect = {
					x: b.position.x,
					y: b.position.y,
					width: b.width,
					height: b.height
				};
				
				if (isInside(mousePos, buttonRect)) {
					if (game.gamestate === 6 && !game.hilo.clicked)
						b.clicked();
				}
			});
		});
		
		document.addEventListener("keydown", function(e) {
			switch(e.keyCode) {
				case 27:
					if (game.gamestate === 2)
						game.toggleHome();
					else if (game.gamestate === 3 || game.gamestate === 5)
						game.toggleMenu();
					break;
			}
		});
		
		document.addEventListener("mousemove", function(e) {
			
			var mousePos = getMousePos(canvas, e);
			
			var buttons = game.globalObjects;
			
			buttons.forEach(function(b) {
				let buttonRect = {
					x: b.position.x,
					y: b.position.y,
					width: b.width,
					height: b.height
				};
				if (b.title === "b_audio") {
					if (isInside(mousePos, buttonRect))
						b.toggleHover(true);
					else
						b.toggleHover(false);
				}
			});
			
			switch(game.gamestate) {
				case 0:
					var buttons = game.menu.buttons;
					
					buttons.forEach(function(b) {
						let buttonRect = {
							x: b.position.x,
							y: b.position.y,
							width: b.width,
							height: b.height
						}
						if (b.title === "b_instructions" || b.title === "b_play") {
							if (isInside(mousePos, buttonRect))
								b.toggleHover(true);
							else
								b.toggleHover(false);
						}
					});
					break;
				case 1:
					var buttons = game.hud.buttons;
					
					buttons.forEach(function(b) {
						let buttonRect = {
							x: b.position.x,
							y: b.position.y,
							width: b.width,
							height: b.height
						}
						if (b.title === "b_games") {
							if (isInside(mousePos, buttonRect))
								b.toggleHover(true);
							else
								b.toggleHover(false);
						}
					});
				case 2:
					var buttons = game.gamesMenu.gameButtons;
					
					buttons.forEach(function(b) {
						let buttonRect = {
							x: b.position.x,
							y: b.position.y,
							width: b.width,
							height: b.height
						}
						if (b.title === "b_game_rmt" || b.title === "b_game_hilo") {
							if (isInside(mousePos, buttonRect))
								b.toggleHover(true);
							else
								b.toggleHover(false);
						}
					});
					break;
			}
		});
	}
}