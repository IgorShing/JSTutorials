function GraphLayout(layout){
    this.layout = layout;
}

GraphLayout.prototype.getLayout = function(){
    return this.layout;
}

GraphLayout.prototype.setLayout = function(layout){
    this.layout = layout;
}

GraphLayout.prototype.apply = function(){
    if (this.layout != null){
        this.layout.apply();
    } else {
        throw new Error("Error! Layout is null.");
    }
}
