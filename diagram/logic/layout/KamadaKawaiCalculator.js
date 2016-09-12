function KamadaKawaiCalculator(cartesianRectangleArea, points, configuration){
    if (configuration == null || configuration == undefined){
        // Use default configuration
        this.configuration = new KamadaKawaiLayoutConfig();
    } else {
        this.configuration = configuration;
    }

    // Область, которая содержит декартовы координаты
    this.cartesianRectangleArea = cartesianRectangleArea;

    this.points = points;

    // Матрица расстояний
    //this.distanceMatrix = this.formDistanceMatrix(points);

    // Матрица желаемых расстояний
    this.lengthMatrix = this.formLengthMatrix(this.points);

    // Матрица "коэффициентов жесткости" для "пружин"
    this.stiffnessMatrix = this.formStiffnessMatrix(this.points);
}

/**
 * Формирует матрицу расстояний.
 */
KamadaKawaiCalculator.prototype.formDistanceMatrix = function(points) {

    var distanceMatrix = math.zeros(points.length, points.length);
    // Минимальное расстояние между узлами (в некоторых единицах измерения), которые не соединены ребром
    var minNodesDistance = this.calculateMinNodesDistance();

    // Заполняем матрицу одинаковыми расстояниями
    for (var i = 0; i <= points.length - 1; i++) {
        for (var j = i + 1; j < points.length; j++) {
            distanceMatrix.set([i, j], minNodesDistance);
            distanceMatrix.set([j, i], minNodesDistance);
        }
        distanceMatrix.set([i, i], 0.0);
    }
    return distanceMatrix;
}

/**
 * Формирует матрицу желаемых расстояний между узлами.
 */
KamadaKawaiCalculator.prototype.formLengthMatrix = function(points) {
    var desiredEdgeLength = this.calculateDesiredEdgeLength();

    var lengthMatrix = math.zeros(points.length, points.length);
    var distanceMatrix = this.formDistanceMatrix(points);

    // Заполняем матрицу одинаковыми расстояниями
    for (var i = 0; i <= points.length - 1; i++) {
        for (var j = i + 1; j < points.length; j++) {
            var value = desiredEdgeLength * distanceMatrix.get([i, j]);
            lengthMatrix.set([i, j], value);
            lengthMatrix.set([j, i], value);
        }
        lengthMatrix.set([i, i], 0.0);
    }
    return lengthMatrix;
}

/**
 * Формирует матрицу "коэффициентов жесткости".
 */
KamadaKawaiCalculator.prototype.formStiffnessMatrix = function(points) {

    var stiffnessMatrix = math.zeros(points.length, points.length);
    var distanceMatrix = this.formDistanceMatrix(points);
    var springStiffness = this.configuration.getSpringStiffness();

    for (var i = 0; i <= points.length - 1; i++) {
        for (var j = i + 1; j < points.length; j++) {
            var value = springStiffness / (distanceMatrix.get([i, j]) * distanceMatrix.get([i, j]));

            stiffnessMatrix.set([i, j], value);
            stiffnessMatrix.set([j, i], value);
        }
        stiffnessMatrix.set([i, i], Number.POSITIVE_INFINITY); // Бесконечность
    }
    return stiffnessMatrix;
}

/**
 * Возвращает диаметр графа как расстояние между наиболее отдаленными узлами графа.
 */
KamadaKawaiCalculator.prototype.graphDiameter = function(){
    var diameter = 0;
    var dist;

    // Вычисляем расстояния между всеми парами узлов и возвращаем максимальное расстояние.
    for (var i = 0; i < this.points.length - 1; i++) {
        for (var j = i + 1; j < this.points.length; j++) {
            dist = CoordinateUtils.distance(this.points[i], this.points[j]);
            if (dist > diameter) {
                diameter = dist;
            }
        }
    }
    return diameter;
}

/**
 * Вычисление градиента функции "потенциальной энергии" для заданного узла m.
 */
KamadaKawaiCalculator.prototype.potentialEnergyGradient = function(m, points) {

    if (!(m >= 0 && m < points.length)){
        throw new Error("Error! Not valid parameters for Potential Energy Gradient");
    }

    var xPartial = this.partialDerivativeX(m, points);
    var yPartial = this.partialDerivativeY(m, points);
    return Math.sqrt(xPartial * xPartial + yPartial * yPartial);
}

/**
 * Находит индекс в массиве координат узлов соответствующий узлу с максимальным градиентом потенциальной энергии.
 * Returns index and the corresponding value.
 */
KamadaKawaiCalculator.prototype.findIndexMaxPotentialEnergyGradient = function(points) {
    var gradients = [];

    for (var i = 0; i < points.length; i++) {
        gradients.push(this.potentialEnergyGradient(i, points));
    }

    var indexOfMaxValue = MathUtils.getIndexOfMaxValue(gradients);
    var maxValue = gradients[indexOfMaxValue];

    return [indexOfMaxValue, maxValue];
}

/**
 * Find deltas.
 *
 * Решает систему уравнений вида, специфичную для данного алгоритма:
 *     C*x + D*y = -A
 *     D*x + E*y = -B
 *  where x = array[0], y = array[1]
 */
KamadaKawaiCalculator.prototype.solveEquations = function (A, B, C, D, E) {

    var dx = 0.0;
    var dy = 0.0;

    try {
        dy = (B * C - A * D) / (D * D - C * E);
        dx = (-A - D * dy) / C;
    }
    catch (err) {
        console.log(err);
    }
    return [dx, dy];
}

/**
 * Calculates the partial derivative for x-coordinate.
 * @param m - index of a point for witch partial derivatives are calculated.
 * @param points
 */
KamadaKawaiCalculator.prototype.partialDerivativeX = function(m, points){
    if (!(m >= 0 && m < points.length)){
        throw new Error("Error! Not valid parameters for Partial Derivative X");
    }

    var xPartial = 0.0;
    var dist = null;
    var deltaX = null;
    var pointA = null;
    var pointB = null;

    for (var i = 0; i < points.length; i++) {
        if (i != m) {
            pointA = points[i];
            pointB = points[m];
            dist = CoordinateUtils.distance(pointA, pointB);
            deltaX = (pointB.getX() - pointA.getX());
            xPartial += this.stiffnessMatrix.get([m, i]) * deltaX * (1.0 - this.lengthMatrix.get([m, i]) / dist);
        }
    }
    return xPartial;
}

KamadaKawaiCalculator.prototype.partialDerivativeY = function(m, points){
    if (!(m >= 0 && m < points.length)){
        throw new Error("Error! Not valid parameters for Partial Derivative Y");
    }

    var yPartial = 0.0;
    var dist = null;
    var deltaY = null;
    var pointA = null;
    var pointB = null;

    for (var i = 0; i < points.length; i++) {
        if (i != m) {
            pointA = points[i];
            pointB = points[m];
            dist = CoordinateUtils.distance(pointA, pointB);
            deltaY = (pointB.getY() - pointA.getY());
            yPartial += this.stiffnessMatrix.get([m, i]) * deltaY * (1.0 - this.lengthMatrix.get([m, i]) / dist);
        }
    }
    return yPartial;
}

KamadaKawaiCalculator.prototype.partialDerivativeXX = function(m, points){

    if (!(m >= 0 && m < points.length)){
        throw new Error("Error! Not valid parameters for Partial Derivative XX");
    }

    var xxPartial = 0.0;
    var dist = null;
    // Расстояние в 3-й степени
    var dist3 = null;
    var deltaY = null;
    var pointA = null;
    var pointB = null;

    for (var i = 0; i < points.length; i++) {
        if (i != m) {
            pointA = points[i];
            pointB = points[m];
            dist = CoordinateUtils.distance(pointA, pointB);
            dist3 = dist * dist * dist;
            deltaY = (pointB.getY() - pointA.getY());

            xxPartial += this.stiffnessMatrix.get([m, i]) * (1.0 - this.lengthMatrix.get([m, i]) * deltaY * deltaY / dist3);
        }
    }
    return xxPartial;
}

KamadaKawaiCalculator.prototype.partialDerivativeXY = function(m, points){
    if (!(m >= 0 && m < points.length)){
        throw new Error("Error! Not valid parameters for Partial Derivative XY");
    }

    var xyPartial = 0.0;
    var dist = null;
    // Расстояние в 3-й степени
    var dist3 = null;
    var deltaX = null;
    var deltaY = null;
    var pointA = null;
    var pointB = null;

    for (var i = 0; i < points.length; i++) {
        if (i != m) {
            pointA = points[i];
            pointB = points[m];
            dist = CoordinateUtils.distance(pointA, pointB);
            dist3 = dist * dist * dist;
            deltaX = (pointB.getX() - pointA.getX());
            deltaY = (pointB.getY() - pointA.getY());

            xyPartial += this.stiffnessMatrix.get([m, i]) * this.lengthMatrix.get([m, i]) * deltaX * deltaY / dist3;
        }
    }
    return xyPartial;
}

KamadaKawaiCalculator.prototype.partialDerivativeYX = function(m, points){
    // partialDerivativeXY = partialDerivativeYX
    return this.partialDerivativeXY();
}

KamadaKawaiCalculator.prototype.partialDerivativeYY = function(m, points){
    if (!(m >= 0 && m < points.length)){
        throw new Error("Error! Not valid parameters for Partial Derivative YY");
    }

    var yyPartial = 0.0;
    var dist = null;
    // Расстояние в 3-й степени
    var dist3 = null;
    var deltaX = null;
    var pointA = null;
    var pointB = null;

    for (var i = 0; i < points.length; i++) {
        if (i != m) {
            pointA = points[i];
            pointB = points[m];
            dist = CoordinateUtils.distance(pointA, pointB);
            dist3 = dist * dist * dist;
            deltaX = (pointB.getX() - pointA.getX());

            yyPartial += this.stiffnessMatrix.get([m, i]) * (1.0 - this.lengthMatrix.get([m, i]) * deltaX * deltaX / dist3);
        }
    }
    return yyPartial;
}

/**
 * Calculates the displacement of a point.
 * The positions of other points are taken into account.
 *
 * Вычисляет необходимые коэффициенты и прибавку к координатам для заданной
 * точки, после ее взаимодействия через "пружины" с остальными точками.
 *
 * @param m
 * @param points
 */
KamadaKawaiCalculator.prototype.pointDisplacement = function(m, points) {

    // Прибавка к координатам delta[0] = dx, delta[1] = dy
    var xPartial = this.partialDerivativeX(m, points);
    var yPartial = this.partialDerivativeY(m, points);
    var xxPartial = this.partialDerivativeXX(m, points);
    var xyPartial = this.partialDerivativeXY(m, points);
    var yyPartial = this.partialDerivativeYY(m, points);

    return this.solveEquations(xPartial, yPartial, xxPartial, xyPartial, yyPartial);
}

KamadaKawaiCalculator.prototype.movePoint = function (indexForMaxDeltaM, points) {
    var delta;
    var prevEnergyPotential = 0;
    var curEnergyPotential = this.potentialEnergyGradient(indexForMaxDeltaM, points);
    var deltaPotential = Math.abs(curEnergyPotential - prevEnergyPotential);

    var iterations = 0;
    var MAX_ITERATIONS = this.configuration.getMaxIterations();
    var EPSILON = this.configuration.getAcuracy();

    while (deltaPotential > EPSILON || iterations > MAX_ITERATIONS) {
        delta = this.pointDisplacement(indexForMaxDeltaM, points);

        var newX = points[indexForMaxDeltaM].getX() + delta[0];
        var newY = points[indexForMaxDeltaM].getY() + delta[1];

        points[indexForMaxDeltaM].setX(newX);
        points[indexForMaxDeltaM].setY(newY);

        prevEnergyPotential = curEnergyPotential;
        curEnergyPotential = this.potentialEnergyGradient(indexForMaxDeltaM, points);
        deltaPotential = Math.abs(curEnergyPotential - prevEnergyPotential);
        iterations++;
    }
}

KamadaKawaiCalculator.prototype.calculateMinNodesDistance = function(){
    // Расстояние между узлами, не соединенными ребрами должно быть больше, чем между соединенными.
    var disconnectedFactor = this.configuration.getDisconnectedFactor();
    var minEdgeNodesDistance = this.configuration.getMinEdgeNodesDistance();
    return disconnectedFactor * minEdgeNodesDistance;
}

KamadaKawaiCalculator.prototype.calculateDesiredEdgeLength = function(){
    var length_factor = this.configuration.getLengthFactor();

    return Math.min(this.cartesianRectangleArea.getWidth(), this.cartesianRectangleArea.getHeight()) /
           this.graphDiameter()* length_factor;
}

KamadaKawaiCalculator.prototype.calculatePotentialEnergy = function(points){
    var result = 0.0;
    // Вычисляем расстояния между всеми парами узлов и возвращаем максимальное расстояние.
    for (var i = 0; i < points.length - 1; i++) {
        for (var j = i + 1; j < points.length; j++) {
            var dist = CoordinateUtils.distance(points[i], points[j]);
            var factor = dist - this.lengthMatrix.get([i, j]);
            result += this.stiffnessMatrix.get([i, j]) * factor * factor;
        }
    }
    return 0.5 * result;
}


