

// TODO Add the functionality to methods that checks if the passed parameters are ok.

function KamadaKawaiLayoutConfig(){
    // Точность EPSILON
    this.acuracy;

    // Максимальное количество итераций MAX_ITERATIONS
    this.maxIterations;

    // Минимальное расстояние между узлами (в некоторых единицах измерения), которые соединены ребром
    this.minEdgeNodesDistance;

    // Минимальное расстояние между узлами (в некоторых единицах измерения), которые не соединены ребром
    this.minNodesDistance;

    // Множитель (> 1) для диаметра графа, который используется для вычисления расстояния между не
    // связанными ребром узлами
    this.disconnectedFactor;

    // Множитель (0; 1), который позволяет побирать требуюмую длину ребра между узлами.
    this.lengthFactor;

    // Желаемая длина ребра на графе
    this.desiredEdgeLength;

    // Константа (> 0) для регулирования "жесткости" пружины
    this.springStiffness;

    this.setDefaultConfiguration();
}

KamadaKawaiLayoutConfig.prototype.setDefaultConfiguration = function(){
    this.acuracy = 1e-15;
    this.maxIterations = 10000;
    this.minEdgeNodesDistance = 1;
    this.minNodesDistance = 1;
    this.disconnectedFactor = 5.0;
    this.lengthFactor = 0.7;
    this.desiredEdgeLength = 1;
    this.springStiffness = 1;
}

// Acuracy
KamadaKawaiLayoutConfig.prototype.getAcuracy = function(){
    return this.acuracy;
}

KamadaKawaiLayoutConfig.prototype.setAcuracy = function(acuracy){
    this.acuracy = acuracy;
}

// MaxIterations
KamadaKawaiLayoutConfig.prototype.getMaxIterations = function(){
    return this.maxIterations;
}

KamadaKawaiLayoutConfig.prototype.setMaxIterations = function(maxIterations){
    this.maxIterations = maxIterations;
}

// MinEdgeNodesDistance
KamadaKawaiLayoutConfig.prototype.getMinEdgeNodesDistance = function(){
    return this.minEdgeNodesDistance;
}

KamadaKawaiLayoutConfig.prototype.setMinEdgeNodesDistance = function(minEdgeNodesDistance){
    this.minEdgeNodesDistance = minEdgeNodesDistance;
}

// MinNodesDistance
KamadaKawaiLayoutConfig.prototype.getMinNodesDistance = function(){
    return this.minNodesDistance;
}

KamadaKawaiLayoutConfig.prototype.setMinNodesDistance = function(minNodesDistance){
    this.minNodesDistance = minNodesDistance;
}

// DisconnectedFactor
KamadaKawaiLayoutConfig.prototype.getDisconnectedFactor = function(){
    return this.disconnectedFactor;
}

KamadaKawaiLayoutConfig.prototype.setDisconnectedFactor = function(disconnectedFactor){
    this.disconnectedFactor = disconnectedFactor;
}

// LengthFactor
KamadaKawaiLayoutConfig.prototype.getLengthFactor = function(){
    return this.lengthFactor;
}

KamadaKawaiLayoutConfig.prototype.setLengthFactor = function(lengthFactor){
    this.lengthFactor = lengthFactor;
}

// DesiredEdgeLength
KamadaKawaiLayoutConfig.prototype.getDesiredEdgeLength = function(){
    return this.desiredEdgeLength;
}

KamadaKawaiLayoutConfig.prototype.setDesiredEdgeLength = function(desiredEdgeLength){
    this.desiredEdgeLength = desiredEdgeLength;
}

// SpringStiffness
KamadaKawaiLayoutConfig.prototype.getSpringStiffness = function(){
    return this.springStiffness;
}

KamadaKawaiLayoutConfig.prototype.setSpringStiffness = function(springStiffness){
    this.springStiffness = springStiffness;
}