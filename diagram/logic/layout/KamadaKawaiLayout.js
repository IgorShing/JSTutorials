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
}

/**
 * Runs the algorithm.
 */

KamadaKawaiLayout.prototype.apply = function (){
    console.log("Started Kamada-Kawai layout...");
    var iterations = 0;

    // Задаем начальное расположение узлов
    var circleLayout = new CircleLayout(this.cartesianRectangleArea, this.points);
    circleLayout.apply();

    var calculator = new KamadaKawaiCalculator(this.cartesianRectangleArea, this.points, this.configuration);

    var EPSILON = this.configuration.getAcuracy();
    var MAX_ITERATIONS = this.configuration.getMaxIterations();

    var res = calculator.findIndexMaxPotentialEnergyGradient(this.points);

    var indexForMaxDeltaM = res[0];

    var prevMaxDelta = 0;
    var curMaxDelta = res[1];
    var deltaMaxDelta = Math.abs(curMaxDelta - prevMaxDelta);
    
    console.log('Initial potential energy: ' + calculator.calculatePotentialEnergy(this.points));
    
    while (deltaMaxDelta > EPSILON && iterations < MAX_ITERATIONS) {
        calculator.movePoint(indexForMaxDeltaM, this.points);
        res = calculator.findIndexMaxPotentialEnergyGradient(this.points);

        prevMaxDelta = curMaxDelta;
        indexForMaxDeltaM = res[0];
        curMaxDelta = res[1];

        deltaMaxDelta = Math.abs(curMaxDelta - prevMaxDelta);
        
        console.log('deltaMaxDelta: ' + deltaMaxDelta);
        console.log(iterations++ + ', Potential energy: ' + calculator.calculatePotentialEnergy(this.points));
    }
    
    // TODO
    // Adjust for gravity center
    // .....
    
    console.log("Finished Kamada-Kawai layout");
}








