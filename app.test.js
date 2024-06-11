
//Importo las funciones necesarias de app.js

const {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound,
  } = require("./app.js");


test("One euro should be 1.07 dollars and the value is a number", function() {

    const dollars = fromEuroToDollar(3.5); 
    const expected = 3.5 * 1.07;
    const expectedNumber = fromEuroToDollar(); 
   
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
    expect(typeof expectedNumber).toBe("number");
})

test("One dollar should be 156.5 yens", function() {

    const {fromDollarToYen} = require ("./app.js");
    const yen = fromDollarToYen(3.5);
    const expected = 3.5 * 156.5;
    const expectedNumber = fromDollarToYen(3.5);

    expect(fromDollarToYen(3.5)).toBe(547.75);
    expect(typeof expectedNumber).toBe("number");
})

test("One yen should be 0.0051 pounds", function() {

    const {fromYenToPound} = require("./app.js");
    const pounds = fromYenToPound(1);
    const expected = (pounds / 156.5) * 0.87 
    const expectedNumber = fromYenToPound();

    expect(fromYenToPound(1)).toBeCloseTo(0.0051);
    expect(typeof expectedNumber).toBe("number");
})