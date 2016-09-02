
function MathUtils(){
}

// Constructs a point with maximum x and y among the points coordinates
MathUtils.getMaxPoint = function(points){
    var coordX = [];
    var coordY = [];

    for (var i = 0; i < points.length; i++) {
        coordX.push(points[i].getX());
        coordY.push(points[i].getY());
    }

    var maxPoint = new Point2D(Math.max.apply(null, coordX), Math.max.apply(null, coordY));
    return maxPoint;
}

// Constructs a point with minimum x and y among the points coordinates
MathUtils.getMinPoint = function(points){
    var coordX = [];
    var coordY = [];

    for (var i = 0; i < points.length; i++) {
        coordX.push(points[i].getX());
        coordY.push(points[i].getY());
    }

    var minPoint = new Point2D(Math.min.apply(null, coordX), Math.min.apply(null, coordY));
    return minPoint;
}

/**
 * Генерирует случайную величину с равномерным распределением в заданных пределах.
 */
MathUtils.getUniformRandomValue = function(lowLimit, upperLimit) {
    return lowLimit + (upperLimit - lowLimit) * Math.random();
}

/**
 * Calculates the index of maximum value in an array
 *
 iMax - the best index so far (the index of the max element so far,
 on the first iteration iMax = 0 because the second argument to reduce()
 is 0, we can't omit the second argument to reduce() in our case)
 x - the currently tested element from the array
 i - the currently tested index
 arr - our array ([0, 21, 22, 7])

 http://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

 * @param array
 */
MathUtils.getIndexOfMaxValue = function(array){
    if (array.length === 0) {
        return -1;
    }

    var max = array[0];
    var maxIndex = 0;

    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            maxIndex = i;
            max = array[i];
        }
    }

    return maxIndex;
    /*
    var maxCallback = ((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    return array.reduce(maxCallback, 0);
    */
}


