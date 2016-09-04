/**
 * Created by Admin on 08.08.2016.
 */
/**
 *
 */
function CircleView(){
// Initialize parent's fields.
    View.apply(this, arguments);

    this.title;
    this.centerX;
    this.centerY;
    this.radius;
    this.color;

    this.setDefaultValues();
}

function CircleView(node, radius, color){

    View.apply(this, arguments);

    if (node == null){
        throw new Error("The node value is null");
    }

    this.initialize(node.getPoint().getX(), node.getPoint().getY(), radius, color, node.getText());
}

//Create inheritance
CircleView.prototype = Object.create(View.prototype);

// Save the constructor
CircleView.prototype.constructor = CircleView;

CircleView.prototype.setDefaultValues = function(){
    this.centerX = 0;
    this.centerY = 0;
    this.radius = 10;
    this.color = "red";
}

CircleView.prototype.initialize = function(centerX, centerY, radius, color, title){
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
    this.title = title;
}

// Draws a circle
CircleView.prototype.draw = function(canvasId){

    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    ctx.beginPath();

    ctx.arc(this.centerX, this.centerY, this.radius, 0, 2*Math.PI);
    ctx.stroke();

    // Fill with the color
    ctx.fillStyle = this.color;
    ctx.fill();

    // Add text
    ctx.font = '8pt Calibri';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(this.title, this.centerX, this.centerY);
}