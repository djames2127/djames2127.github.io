class Bubbles {
	constructor(_settings) {
		this.bRuning = false;
		this.canvas = document.getElementById("bubbles1");
		this.ctx = this.canvas.getContext("2d");
		this.canvas.height = window.innerHeight;
		this.canvas.width = window.innerWidth;
		this.canvasbg = document.getElementById("bubbles2");
		this.ctxbg = this.canvasbg.getContext("2d");
		this.canvasbg.height = window.innerHeight;
		this.canvasbg.width = window.innerWidth;
		this.aBubbles = [];
		this.aBgBubbles = [];
	}

	addBubble() {
		this.aBubbles.push(new Bubble());
	}
	addBgBubble() {
		this.aBgBubbles.push(new Bubble("rgb(236, 198, 223)", 3.5));
	}

	update() {
		for (let i = this.aBubbles.length - 1; i >= 0; i--) {
			this.aBubbles[i].update();

			if (!this.aBubbles[i].life) this.aBubbles.splice(i, 1);
		}

		for (let i = this.aBgBubbles.length - 1; i >= 0; i--) {
			this.aBgBubbles[i].update();

			if (!this.aBgBubbles[i].life) this.aBgBubbles.splice(i, 1);
		}

		if (this.aBubbles.length < window.innerWidth / 4) this.addBubble();

		if (this.aBgBubbles.length < window.innerWidth / 12) this.addBgBubble();
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctxbg.clearRect(0, 0, this.canvas.width, this.canvas.height);

		for (let i = this.aBgBubbles.length - 1; i >= 0; i--) {
			this.aBgBubbles[i].draw(this.ctxbg);
		}

		for (let i = this.aBubbles.length - 1; i >= 0; i--) {
			this.aBubbles[i].draw(this.ctx);
		}
	}

	run() {
		this.update();
		this.draw();

		if (this.bRuning) requestAnimationFrame(this.run.bind(this));
	}

	start() {
		this.bRuning = true;
		this.run();
	}
	stop() {
		this.bRuning = false;
	}
}

class Bubble {
	constructor(_c = "rgb(255,255,255)", _y = 0) {
		this.r = rand(30, 120);
		this.life = true;
		this.x = rand(-this.r, window.innerWidth);
		this.y = rand(window.innerHeight + this.r, window.innerHeight + this.r + 20);
		this.vy = rand(0.1, 0.5) + _y;
		this.vr = 0;
		this.vx = rand(-3, 3);
		this.c = _c;
	}

	update() {
		this.vy += 0.07;
		this.vr += 0.012;
		this.y -= this.vy;
		this.x += this.vx;

		if (this.r > 1) this.r -= this.vr;

		if (this.r <= 1) this.life = false;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.fillStyle = this.c;
		ctx.fill();
	}
}

let rand = (min, max) => {
	return Math.random() * (max - min) + min;
};
let onresize = function() {
	oBubbles.canvasbg.width = window.innerWidth;
	oBubbles.canvasbg.height = window.innerHeight;
	oBubbles.canvas.width = window.innerWidth;
	oBubbles.canvas.height = window.innerHeight;
};
let oBubbles;
let init = () => {
	oBubbles = new Bubbles();
	oBubbles.start();
};
window.onresize = onresize;
window.onload = init;
