/**
 * Автоматическое расположение узлов графа на диаграмме по алгоритму Kamada-Kawai. [1] Kamada T.,
 * Kawai S. An Algorithm for Drawing General Undirected Graphs / Information Processing Letters 31
 * (1989), p. 7 - 15.
 *
 * В графе не должно быть узлов с одинаковыми координатами.
 */

function KamadaKawaiLayout(cartesianRectangleArea, points, configuration){

    this.configuration = configuration;

    this.acuracy = configuration.getAcuracy();
    this.maxIterations = configuration.getMaxIterations();
    this.minEdgeNodesDistance = configuration.getMinEdgeNodesDistance();
    var disconnectedFactor = configuration.getDisconnectedFactor();
    var lengthFactor = configuration.getLengthFactor();
    var desiredEdgeLength = configuration.getDesiredEdgeLength();

    // Область, которая содержит декартовы координаты
    this.cartesianRectangleArea = cartesianRectangleArea;

    this.points = points;

    // Матрица расстояний
    this.distanceMatrix = this.formDistanceMatrix(points);

    // Матрица желаемых расстояний
    this.lengthMatrix = this.formLengthMatrix(points);

    // Матрица "коэффициентов жесткости" для "пружин"
    this.stiffnessMatrix = this.formStiffnessMatrix(points);

    // Для оптимизации
    var maxDeltaM;
    var indexForMaxDeltaM;
}

/**
 * Формирует матрицу желаемых расстояний между узлами.
 */
KamadaKawaiLayout.prototype.formLengthMatrix = function(points) {

    var width = this.cartesianRectangleArea.getWidth();
    var height = this.cartesianRectangleArea.getHeight();
    var length_factor = this.configuration.getLengthFactor();

    var desiredEdgeLength = Math.min(width, height) / this.graphDiameter * length_factor;

    var lengthMatrix = null;
    var distanceMatrix = this.formDistanceMatrix(points);

    // Заполняем матрицу одинаковыми расстояниями
    for (var i = 0; i < points.length - 1; i++) {
        lengthMatrix[i] = [];
        for (var j = i + 1; j < points.length; j++) {
            lengthMatrix[i][j] = desiredEdgeLength * distanceMatrix[i][j];
            lengthMatrix[j][i] = lengthMatrix[i][j];
        }
        lengthMatrix[i][i] = 0.0;
    }
    lengthMatrix[points.length - 1][points.length - 1] = 0.0;
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
            dist = CoordinateUtils.distance(this.points[i].getPoint(), this.points[j].getPoint());
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

    var distanceMatrix = null;
    var minNodesDistance = this.configuration.getMinNodesDistance();

    // Заполняем матрицу одинаковыми расстояниями
    for (var i = 0; i < points.length - 1; i++) {
        distanceMatrix[i] = [];
        for (var j = i + 1; j < points.length; j++) {
            distanceMatrix[i][j] = minNodesDistance;
            distanceMatrix[j][i] = distanceMatrix[i][j];
        }
        distanceMatrix[i][i] = 0.0;
    }
    distanceMatrix[points.length - 1][points.length - 1] = 0.0;
    return distanceMatrix;
}

/**
 * Формирует матрицу "коэффициентов жесткости".
 */
KamadaKawaiLayout.prototype.formStiffnessMatrix = function(points) {

    var stiffness = null;
    var distanceMatrix = this.formDistanceMatrix(points);
    var springStiffness = this.configuration.getSpringStiffness();

    for (var i = 0; i < points.length - 1; i++) {
        for (var j = i + 1; j < points.length; j++) {
            stiffness[i][j] = springStiffness / (distanceMatrix[i][j] * distanceMatrix[i][j]);
            stiffness[j][i] = stiffness[i][j];
        }
        stiffness[i][i] = Number.POSITIVE_INFINITY; // Бесконечность
    }
    stiffness[points.length - 1][points.length - 1] = Number.POSITIVE_INFINITY; // Бесконечность
}

/**
 * Вычисляет необходимые коэффициенты и прибавку к координатам для заданной
 * точки, после ее взаимодействия через "пружины" с остальными точками.
 *
 */

KamadaKawaiLayout.pointMoving = function(){

}


/**
 * Find deltas.
 *
 * Решает систему уравнений вида, специфичную для данного алгоритма:
 *     C*x + D*y = -A
 *     D*x + E*y = -B
 *  where x = array[0], y = array[1]
 */
KamadaKawaiLayout.findDeltas = function (A, B, C, D, E) {

    var x = 0.0;
    var y = 0.0;

    try {
        y = (B * C - A * D) / (D * D - C * E);
        x = (-A - D * y) / C;
    }
    catch (err) {
        console.log(err.message());
    }

    return [x, y];
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
                xPartial += this.stiffnessMatrix[m][i] * deltaX * (1.0 - length[m][i] / dist);
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
                yPartial += this.stiffnessMatrix[m][i] * deltaY * (1.0 - length[m][i] / dist);
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

                xxPartial += this.stiffnessMatrix[m][i] * (1.0 - length[m][i] * deltaY * deltaY / dist3);
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

                xyPartial += this.stiffnessMatrix[m][i] * length[m][i] * deltaX * deltaY / dist3;
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

                yyPartial += this.stiffnessMatrix[m][i] * (1.0 - length[m][i] * deltaX * deltaX / dist3);
            }
        }
    }
    return yyPartial;
}

private double[] pointMoving(int m) {
    // Прибавка к координатам delta[0] = dx, delta[1] = dy
    double delta[];
    double xPartial = 0.0;
    double yPartial = 0.0;
    double xxPartial = 0.0;
    double xyPartial = 0.0; // xyPartial = yxPartial
    double yyPartial = 0.0;
    double dist;
    // Расстояние в 3-й степени
    double dist3;
    double deltaX;
    double deltaY;

    if (m >= 0 && m < nNodes) {

        for (int i = 0; i < nNodes; i++) {
            if (i != m) {

                dist = CoordinateUtils.distance(xPos[i], yPos[i], xPos[m], yPos[m]);
                dist3 = dist * dist * dist;
                deltaX = (xPos[m] - xPos[i]);
                deltaY = (yPos[m] - yPos[i]);

                xPartial += stiffness[m][i] * deltaX * (1.0 - length[m][i] / dist);
                yPartial += stiffness[m][i] * deltaY * (1.0 - length[m][i] / dist);
                xxPartial += stiffness[m][i] * (1.0 - length[m][i] * deltaY * deltaY / dist3);
                xyPartial += stiffness[m][i] * length[m][i] * deltaX * deltaY / dist3;
                yyPartial += stiffness[m][i] * (1.0 - length[m][i] * deltaX * deltaX / dist3);
            }
        }
    }
    delta = findDeltas(xPartial, yPartial, xxPartial, xyPartial, yyPartial);
    return new double[] { delta[0], delta[1] };
}

/**
 * Runs the algorithm.
 */

KamadaKawaiLayout.apply = function (){

}





