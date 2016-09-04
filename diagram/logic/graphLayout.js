/**
 * Все координаты представляют собой декартовы координаты. Затем они могут быть трансформированы в
 * требуемые в данной задаче.
 */
public abstract class GraphLayoutImpl<T extends Widget> implements IGraphLayout<T> {

    // Граф, для которого делается более удобное визуальное представление
    protected final Graph<T>                       graph;
protected final IRectangleArea                 rectangleArea;

// Соотносит узел графа и индекс массива
protected final HashMap<GraphNode<T>, Integer> nodeToIndex = new HashMap<GraphNode<T>, Integer>();
// Соотносит индекс массива и узел графа
protected final HashMap<Integer, GraphNode<T>> indexToNode = new HashMap<Integer, GraphNode<T>>();

// Массивы с координатами узлов
protected double[]                             xPos;
protected double[]                             yPos;

// Число узлов
protected int                                  nNodes;

/**
 * Конструктор.
 */
public GraphLayoutImpl(Graph<T> graph, IRectangleArea rectangleArea) {
    this.graph = graph;
    this.rectangleArea = rectangleArea;
    nNodes = graph.getNodes().size();
    initMaps();
    initCoordinateArrays();

    // test();
    // testConvert();
}

// Инициализация вспомогательных массивов
private void initCoordinateArrays() {
    if (nNodes > 0) {
        // make arrays corresponding to the coords of each node
        xPos = new double[nNodes];
        yPos = new double[nNodes];

        // Инициализация массивов координат
        setArraysByNodesCoordinates();
    }
}

/**
 * Инициализация координат узлов на основе массивов
 */
protected void setNodesCoordinatesByArrays() {

    for (int i = 0; i < nNodes; i++) {
        indexToNode.get(i).setX(xPos[i]);
        indexToNode.get(i).setY(yPos[i]);
    }
}

/**
 * Инициализация массивов координат на основе координат узлов графа
 */
protected void setArraysByNodesCoordinates() {
    for (int i = 0; i < nNodes; i++) {
        xPos[i] = indexToNode.get(i).getX();
        yPos[i] = indexToNode.get(i).getY();
    }
}

// Заполняем вспомогательные карты
private void initMaps() {
    if (graph != null && graph.getNodes().size() != 0) {
        int i = 0;
        for (GraphNode<T> node : graph.getNodes()) {
            Integer index = new Integer(i++);
            nodeToIndex.put(node, index);
            indexToNode.put(index, node);
        }
    }
}

/**
 * Randomly positions nodes on layout. Called internally before update layout is called for the
 * first time to insure that nodes have starting coordinates. This uses a random generator stream
 * separate from the default RePast random stream. You can set the seed for this stream using the
 * setRandomSeed method.
 */
public void randomizeLayout() {
    for (int i = 0; i < nNodes; i++) {
        xPos[i] = DiagramMathUtils.getUniformRandomValue(rectangleArea.getCornerBottomLeft().getX(),
            rectangleArea.getCornerBottomRight().getX());
        yPos[i] = DiagramMathUtils.getUniformRandomValue(rectangleArea.getCornerBottomLeft().getY(),
            rectangleArea.getCornerTopLeft().getY());
    }
}

/**
 * Создает начальное случайное положение узлов.
 */
public void putNodesInRandomPosition() {
    randomizeLayout();
    setNodesCoordinatesByArrays();
}

/**
 * Экранные координаты имеют ось ординат направленную вниз с нарастающими положительными
 * значениями. Метод преобразует координаты так, чтобы они соответствовали оси ординат
 * направленной вверх. Тогда значения координат будут отрицательными и увеличивающимися по модулю.
 * Значения координат должными быть заданы для экранной системы координат.
 */
public void fromScreenCoordinates() {
    // Берем все узлы графа и у каждого выставляем координаты
    for (int i = 0; i < nNodes; i++) {
        yPos[i] = -yPos[i];
    }
}

/**
 * Экранные координаты имеют ось ординат направленную вниз с нарастающими положительными
 * значениями. Метод преобразует координаты так, чтобы они соответствовали оси ординат
 * направленной вниз. Тогда значения координат будут положительными и увеличивающимися по модулю.
 * Значения координат должны быть заданы для нижней полуплоскости декартовых координат (с
 * отрицательными ординатами)
 */
public void toScreenCoordinates() {
    // Берем все узлы графа и у каждого выставляем координаты
    for (int i = 0; i < nNodes; i++) {
        yPos[i] = -yPos[i];
    }
}

/**
 * Осуществляет поиск координат элементов для их оптимального расположения.
 */
@Override
public void formLayout() {

}

/**
 * Преобразует координаты узлов для отображения в окне заданного размера.
 */
protected void scaleCoordinates(double width, double height) {
    // Предполагается, что начало координат в (0;0)
    // find largest coords
    double xMax = xPos[0];
    double yMax = yPos[0];
    double xMin = xPos[0];
    double yMin = yPos[0];

    for (int i = 1; i < nNodes; i++) {
        xMax = Math.max(xMax, xPos[i]);
        yMax = Math.max(yMax, yPos[i]);
        xMin = Math.min(xMin, xPos[i]);
        yMin = Math.min(yMin, yPos[i]);
    }

    System.out.println(xMax);
    System.out.println(xMin);
    System.out.println(yMax);
    System.out.println(yMin);

    // rescale coords of nodes to fit inside frame
    double xDiff = xMax - xMin;
    double yDiff = yMax - yMin;
    // Коэффициент масштаба
    double Kx = width / xDiff;
    double Ky = height / yDiff;

    for (int i = 0; i < nNodes; i++) {
        xPos[i] = (xPos[i] - xMin) * Kx - 0.5 * width;
        yPos[i] = (yPos[i] - yMin) * Ky - 0.5 * height;
    }

    System.out.println("Kx :" + Kx);
    System.out.println("Ky :" + Ky);
}

/**
 * Убирает из рассмотрения петли - ребра графа, у которых на концах содержится один и тот же узел.
 *
 * @param edges
 * @return
 */

protected Set<IEdge<T>> removeLoops(Set<IEdge<T>> edges) {
    Set<IEdge<T>> returnSet = new HashSet<IEdge<T>>();
    Iterator<IEdge<T>> iter = edges.iterator();
    while (iter.hasNext()) {
        IEdge<T> edge = iter.next();
        if (edge == null) {
            continue;
        }
        if (edge.getFirstNode() != edge.getSecondNode()) {
            returnSet.add(edge);
        }
    }
    return returnSet;
}
}
