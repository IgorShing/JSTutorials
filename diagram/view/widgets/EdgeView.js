/**
 * Created by Admin on 08.08.2016.
 */
function EdgeView(edge, color) {
    // Initialize parent's fields.
    View.apply(this, arguments);

    this.edge = edge;
    this.color = color;
}

//Create inheritance
EdgeView.prototype = Object.create(View.prototype);

// Save the constructor
EdgeView.prototype.constructor = EdgeView;

EdgeView.prototype.getEdge = function() {
    return this.edge;
}

EdgeView.prototype.setEdge = function(edge) {
    this.edge = edge;
}

EdgeView.prototype.getColor = function() {
    return this.color;
}

EdgeView.prototype.setColor = function(color) {
    this.color = color;
}

EdgeView.prototype.draw = function(canvasId){

    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    ctx.beginPath();

    ctx.moveTo(this.edge.getLeftNode().getX(), this.edge.getLeftNode().getY());
    ctx.lineTo(this.edge.getRightNode().getX(), this.edge.getRightNode().getY());

    ctx.strokeStyle = this.color;
    ctx.stroke();
}

