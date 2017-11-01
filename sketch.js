let bubbles= []

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(600, 400); 
	let x = random(width);
	let y = random(height);
	let r = random(10,40);
	bubble = new Bubble(x,y,r);
	
}



function mousePressed() {
	bubble.clicked();
	
	
	//let r = random(10,50);
	//let b = new Bubble(mouseX, mouseY, r);
	//bubbles.push(b);
}
function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	for(let i = 0; i < bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].show();
	}
}

class Bubble {
	constructor(tempX,tempY,tempR){
		this.x = tempX;
		this.y = tempY;
		this.r = tempR;
	}
	clicked() {
		console.log("CLICKED ON BUBBLE!");
		
	}
	move(){
		this.x = this.x+random(-5,5);
		this.y = this.y+random(-5,5);
	}
	show(){
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, this.r*2,this.r*2);//rain drop bezier(80, 20, 30, 90, 130, 90, 80, 20);
	}

}