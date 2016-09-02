/**
 * Автоматическое расположение узлов графа на диаграмме по алгоритму Kamada-Kawai. [1] Kamada T.,
 * Kawai S. An Algorithm for Drawing General Undirected Graphs / Information Processing Letters 31
 * (1989), p. 7 - 15.
 *
 * В графе не должно быть узлов с одинаковыми координатами.
 */

function KamadaKawaiLayout(cartesianRectangleArea, points, configuration){

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
    // this.distanceMatrix = this.formDistanceMatrix(points);

    // Матрица желаемых расстояний
    this.lengthMatrix = this.formLengthMatrix(points);

    // Матрица "коэффициентов жесткости" для "пружин"
    this.stiffnessMatrix = this.formStiffnessMatrix(points);
}

/**
 * Формирует матрицу желаемых расстояний между узлами.
 */
KamadaKawaiLayout.prototype.formLengthMatrix = function(points) {

    var width = this.cartesianRectangleArea.getWidth();
    var height = this.cartesianRectangleArea.getHeight();
    var length_factor = this.configuration.getLengthFactor();

    var desiredEdgeLength = Math.min(width, height) / this.graphDiameter() * length_factor;

    var lengthMatrix = math.zeros(points.length, points.length);
    var distanceMatrix = this.formDistanceMatrix(points);

    // Заполняем матрицу одинаковыми расстояниями
    for (var i = 0; i < points.length - 1; i++) {
        for (var j = i + 1; j < points.length; j++) {
            lengthMatrix.set([i, j], desiredEdgeLength * distanceMatrix.get([i, j]));
            lengthMatrix.set([j, i], lengthMatrix.get([i, j]));
        }
        lengthMatrix.set([i, i], 0.0);
    }
    lengthMatrix.set([points.length - 1, points.length - 1], 0.0);
    return lengthMatrix;
}

/**
 * Возвращает диаметр графа как расстояние между наиболее отдаленными узлами графа.
 */
KamadaKawaiLayout.prototype.graphDiameter = function(){
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
 * Формирует матрицу расстояний.
 */
KamadaKawaiLayout.prototype.formDistanceMatrix = function(points) {

    var distanceMatrix = math.zeros(points.length, points.length);
    var minNodesDistance = this.configuration.getMinNodesDistance();

    // Заполняем матрицу одинаковыми расстояниями
    for (var i = 0; i < points.length - 1; i++) {
        for (var j = i + 1; j < points.length; j++) {
            distanceMatrix.set([i, j], minNodesDistance);
            distanceMatrix.set([j, i], distanceMatrix.get([i, j]));
        }
        distanceMatrix.set([i, i], 0.0);
    }
    distanceMatrix.set([points.length - 1, points.length - 1], 0.0);
    return distanceMatrix;
}

/**
 * Формирует матрицу "коэффициентов жесткости".
 */
KamadaKawaiLayout.prototype.formStiffnessMatrix = function(points) {

    var stiffnessMatrix = math.zeros(points.length, points.length);
    var distanceMatrix = this.formDistanceMatrix(points);
    var springStiffness = this.configuration.getSpringStiffness();

    for (var i = 0; i < points.length - 1; i++) {
        for (var j = i + 1; j < points.length; j++) {
            stiffnessMatrix.set([i, j], springStiffness / (distanceMatrix.get([i, j]) * distanceMatrix.get([i, j])));
            stiffnessMatrix.set([j, i], stiffnessMatrix.get([i, j]));
        }
        stiffnessMatrix.set([i, i], Number.POSITIVE_INFINITY); // Бесконечность
    }
    stiffnessMatrix.set([points.length - 1, points.length - 1], Number.POSITIVE_INFINITY); // Бесконечность
    return stiffnessMatrix;
}

/**
 * Вычисление градиента функции "потенциальной энергии" для заданного узла m.
 */
KamadaKawaiLayout.prototype.potentialEnergyGradient = function(m, points) {
    var result = 0.0;

    if (m >= 0 && m < points.length) {

        var xPartial = this.partialDerivativeX(m, points);
        var yPartial = this.partialDerivativeY(m, points);

        result = Math.sqrt(xPartial * xPartial + yPartial * yPartial);
    }
    return result;
}

/**
 * Находит индекс в массиве координат узлов соответствующий узлу с максимальным градиентом потенциальной энергии.
 * Returns index and the corresponding value.
 */
KamadaKawaiLayout.prototype.findIndexMaxPotentialEnergyGradient = function(points) {
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
KamadaKawaiLayout.prototype.findDeltas = function (A, B, C, D, E) {

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
KamadaKawaiLayout.prototype.partialDerivativeX = function(m, points){

    var xPartial = 0.0;
    var dist = null;
    var deltaX = null;
    var pointA = null;
    var pointB = null;

    if (m >= 0 && m < points.length) {
        for (var i = 0; i < points.length; i++) {
            if (i != m) {
                pointA = points[i];
                pointB = points[m];
                dist = CoordinateUtils.distance(pointA, pointB);
                deltaX = (pointB.getX() - pointA.getX());
                xPartial += this.stiffnessMatrix.get([m, i]) * deltaX * (1.0 - this.lengthMatrix.get([m, i]) / dist);
            }
        }
    }
   return xPartial;
}

KamadaKawaiLayout.prototype.partialDerivativeY = function(m, points){
    var yPartial = 0.0;
    var dist = null;
    var deltaY = null;
    var pointA = null;
    var pointB = null;

    if (m >= 0 && m < points.length) {
        for (var i = 0; i < points.length; i++) {
            if (i != m) {
                pointA = points[i];
                pointB = points[m];
                dist = CoordinateUtils.distance(pointA, pointB);
                deltaY = (pointB.getY() - pointA.getY());
                yPartial += this.stiffnessMatrix.get([m, i]) * deltaY * (1.0 - this.lengthMatrix.get([m, i]) / dist);
            }
        }
    }
    return yPartial;
}

KamadaKawaiLayout.prototype.partialDerivativeXX = function(m, points){

    var xxPartial = 0.0;
    var dist = null;
    // Расстояние в 3-й степени
    var dist3 = null;
    var deltaY = null;
    var pointA = null;
    var pointB = null;

    if (m >= 0 && m < points.length) {
        for (var i = 0; i < points.length; i++) {
            if (i != m) {
                pointA = points[i];
                pointB = points[m];
                dist = CoordinateUtils.distance(pointA, pointB);
                dist3 = dist * dist *dist;
                deltaY = (pointB.getY() - pointA.getY());

                xxPartial += this.stiffnessMatrix.get([m, i]) * (1.0 - this.lengthMatrix.get([m, i]) * deltaY * deltaY / dist3);
            }
        }
    }
    return xxPartial;
}

KamadaKawaiLayout.prototype.partialDerivativeXY = function(m, points){
    var xyPartial = 0.0;
    var dist = null;
    // Расстояние в 3-й степени
    var dist3 = null;
    var deltaX = null;
    var deltaY = null;
    var pointA = null;
    var pointB = null;

    if (m >= 0 && m < points.length) {
        for (var i = 0; i < points.length; i++) {
            if (i != m) {
                pointA = points[i];
                pointB = points[m];
                dist = CoordinateUtils.distance(pointA, pointB);
                dist3 = dist * dist *dist;
                deltaX = (pointB.getX() - pointA.getX());
                deltaY = (pointB.getY() - pointA.getY());

                xyPartial += this.stiffnessMatrix.get([m, i]) * this.lengthMatrix.get([m, i]) * deltaX * deltaY / dist3;
            }
        }
    }
    return xyPartial;
}

KamadaKawaiLayout.prototype.partialDerivativeYX = function(m, points){
    // partialDerivativeXY = partialDerivativeYX
    return KamadaKawaiLayout.prototype.partialDerivativeXY();
}

KamadaKawaiLayout.prototype.partialDerivativeYY = function(m, points){
    var yyPartial = 0.0;
    var dist = null;
    // Расстояние в 3-й степени
    var dist3 = null;
    var deltaX = null;
    var pointA = null;
    var pointB = null;

    if (m >= 0 && m < points.length) {
        for (var i = 0; i < points.length; i++) {
            if (i != m) {
                pointA = points[i];
                pointB = points[m];
                dist = CoordinateUtils.distance(pointA, pointB);
                dist3 = dist * dist *dist;
                deltaX = (pointB.getX() - pointA.getX());

                yyPartial += this.stiffnessMatrix.get([m, i]) * (1.0 - this.lengthMatrix.get([m, i]) * deltaX * deltaX / dist3);
            }
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
KamadaKawaiLayout.prototype.pointDisplacement = function(m, points) {

    // Прибавка к координатам delta[0] = dx, delta[1] = dy
    var xPartial = this.partialDerivativeX(m, points);
    var yPartial = this.partialDerivativeY(m, points);
    var xxPartial = this.partialDerivativeXX(m, points);
    var xyPartial = this.partialDerivativeXY(m, points);
    var yyPartial = this.partialDerivativeYY(m, points);

    return this.findDeltas(xPartial, yPartial, xxPartial, xyPartial, yyPartial);
}

/**
 * Runs the algorithm.
 */

KamadaKawaiLayout.prototype.apply = function (){
    console.log("Started Kamada-Kawai layout...");
    var iterations = 0;
    var delta;

    // Задаем начальное расположение узлов
    // randomizeLayout();
    // circleLayout(10);

    var EPSILON = this.configuration.getAcuracy();
    var MAX_ITERATIONS = this.configuration.getMaxIterations();

    var res = this.findIndexMaxPotentialEnergyGradient(this.points);

    var indexForMaxDeltaM = res[0];
    var maxDeltaM = res[1];

    while (maxDeltaM > EPSILON && iterations < MAX_ITERATIONS) {
        while (this.potentialEnergyGradient(indexForMaxDeltaM, this.points) > EPSILON || iterations > MAX_ITERATIONS) {
            delta = this.pointDisplacement(indexForMaxDeltaM, this.points);

            this.points[indexForMaxDeltaM].setX(+this.points[indexForMaxDeltaM].getX() + +delta[0]);
            this.points[indexForMaxDeltaM].setY(+this.points[indexForMaxDeltaM].getY() + +delta[1]);
        }
        var res = this.findIndexMaxPotentialEnergyGradient(this.points);

        indexForMaxDeltaM = res[0];
        maxDeltaM = res[1];
        console.log(iterations++);
    }
  //   adjustForGravity();
  //   scaleCoordinates(width, height);
    console.log("Finished Kamada-Kawai layout");
}





