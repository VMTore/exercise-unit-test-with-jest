
//Importo las funciones necesarias de app.js

const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js');


test("One euro should be 1.07 dollars", function() {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 156.5 yens", function() {
    const yen = fromDollarToYen(3.5);
    // Si 1 dollar son 156.5 yenes, entonces 3.5 dollares debe ser (3.5 * 156.5)
    const expected = 3.5 * 156.5;
    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(547.75); // 1 dolar son 156.5 yenes, entonces 3.5 dolares deberían ser = (3.5 * 156.5)
})

test("One yen should be 0.0051 pounds", function() {
    const pounds = fromYenToPound(3.5);
    // Si 1 yen son 0.0051 pounds, entonces 3.5 yenes debe ser (3.5 * 0.0051)
    const expected = 3.5 * 0.0051;
    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.01785); // 1 yen son 0.0051 pounds, entonces 3.5 yenes deberían ser = (3.5 * 0.0051)
})