export default class Instructions {
	constructor(game) {
		this.game = game;
	}
	
	draw(ctx) {
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, this.game.width, this.game.height);
		ctx.font = "40px Arial";
		ctx.fillStyle = "#FFF";
		ctx.textAlign = "center";
		ctx.fillText("Instructions:", this.game.width / 2, 80);
		ctx.font = "14px Arial";
		ctx.fillText("In keeping with the LD46 theme \"Keep it alive\", the goal of this game is just that.", this.game.width / 2, 120);
		ctx.fillText("By playing various minigames your task is to keep the alien alive while its health", this.game.width / 2, 145);
		ctx.fillText("continues to rapidly decline.", this.game.width / 2, 170);
		ctx.font = "18px Arial";
		ctx.fillText("The twist?", this.game.width / 2, 210);
		ctx.font = "14px Arial";
		ctx.fillText("By failing to successfully complete one of the minigames, you may in fact lose", this.game.width / 2, 235);
		ctx.fillText("health.", this.game.width / 2, 260);
		ctx.font = "18px Arial";
		ctx.fillText("What's that funny timer thing in the top left corner?", this.game.width / 2, 300);
		ctx.font = "14px Arial";
		ctx.fillText("That's your score. As you continue to help the alien prevent it's eventual demise,", this.game.width / 2, 325);
		ctx.fillText("the timer will tick away. The higher the timer, the higher your score will be!", this.game.width / 2, 350);
		ctx.font = "18px Arial";
		ctx.fillText("Press ESC to return to the main menu...", this.game.width / 2, this.game.height - 50);
	}
}