/**
 * 
 */
describe("pow", function() {
	
  before(function() { 
	//  alert("Начало тестов"); 
  });
  
  after(function() { 
	//   alert("Конец тестов"); 
  });

  beforeEach(function() { 
	//   alert("Вход в тест"); 
  });
  
  afterEach(function() { 
	 //  alert("Выход из теста"); 
  });

  it("возводит в 2 в 3-ю степень, результат 8", function() {
	  	assert.equal(pow(2, 3), 8);
  });
  
  it("возводит в 2 в 4-ю степень, результат 16", function() {
	    assert.equal(pow(2, 4), 16);
  });
  
  it("возводит в 2 в 5-ю степень, результат 32", function() {
	    assert.equal(pow(2, 5), 32);
  });
  
  it("возводит в 3 в 3-ю степень, результат 27", function() {
	    assert.equal(pow(3, 3), 27);
  });
  
  it("возводит в 4 в 2-ю степень, результат 16", function() {
	    assert.equal(pow(4, 2), 16);
  });
  
  function makeTest(x) {
	    var expected = x * x * x;
	    it("при возведении " + x + " в степень 3 результат: " + expected, function() {
	      assert.equal(pow(x, 3), expected);
	    });
	  }

	  for (var x = 1; x <= 5; x++) {
	    makeTest(x);
	  }
	  
  it("при возведении в отрицательную степень результат NaN", function() {
	assert(isNaN(pow(2, -1)));
  });

  it("при возведении в дробную степень результат NaN", function() {
	assert(isNaN(pow(2, 1.5)));
  });
  
});

// Tests the fibonachi formula
describe("fibonachi", function() {
	
/*	  it("fibonachi, генерирует число последовательности Фибоначи, результат 5527939700884757", function() {
		    assert.equal(fibonachi(77), 5527939700884757);
	  });*/
	  
	  it("fib, генерирует число последовательности Фибоначи, результат 5527939700884757", function() {
		    assert.equal(fib(77), 5527939700884757);
	  });
	});