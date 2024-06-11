// One euro is:
let oneEuroIs = {
    JPY: 156.5, // japan yen
    USD: 1.07, // us dollar
    GBP: 0.87, // british pound 
  };
  
  const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
  };
  const fromDollarToYen = (valueInDollars) => {
    let valueInYen = valueInDollars * oneEuroIs.JPY;
    return valueInYen;
  };
  const fromYenToPound = (valueInYen) => {
    let valueInPound = (valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;
    return valueInPound;
  };
  module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };