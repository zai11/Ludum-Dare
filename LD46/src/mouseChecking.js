/*
	The below functions are courtesy of A1rPun:
	https://stackoverflow.com/questions/24384368/simple-button-in-html5-canvas/24384882
*/

export function getMousePos(canvas, event) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	}
}

export function isInside(pos, rect) {
	return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y;
}