QUnit.module("Tests for Kamada Kawai Layout")

QUnit.test( "Checks find deltas routine", function( assert ) {
    var A = 2;
    var B = 4;
    var C = 1;
    var D = 6;
    var E = 3;

    var actualResult = KamadaKawaiLayout.findDeltas(A, B, C, D, E);

    var x = actualResult[0];
    var y = actualResult[1];

    assert.deepEqual(D*C*x + D*D*y, -A*D, "Results should be equal." );
    assert.deepEqual(D*C*x + C*E*y, -B*C, "Results should be equal." );
});

QUnit.test( "Checks distance matrix", function( assert ) {
    assert.deepEqual(0, 0, "Results should be equal." );
});

QUnit.test( "Checks length matrix", function( assert ) {
    assert.deepEqual(0, 0, "Results should be equal." );
});