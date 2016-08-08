/**
 * Created by Admin on 08.08.2016.
 */
function Edge(leftNode, rightNode){

    this.leftNode = leftNode;
    this.rightNode = rightNode;

}

Edge.prototype.getLeftNode = function(){
    return this.leftNode;
}

Edge.prototype.getRightNode = function(){
    return this.rightNode;
}

