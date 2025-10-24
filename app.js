// console.log("hello world");

// const sum = (a,b) => {
//     return a + b
// }

// let result = sum(7, 3) 

// console.log(result);

// module.exports = { sum };


// Given conversion rates

function fromDollarToYen(dollar) {
    let oneEuroIs = {
    "JPY": 156.5, // 1 EUR = 156.5 JPY
    "USD": 1.07,  // 1 EUR = 1.07 USD
    "GBP": 0.87   // 1 EUR = 0.87 GBP
};
    return dollar * (oneEuroIs.JPY / oneEuroIs.USD);
}

function fromEuroToDollar(euro) {
    let oneEuroIs = {
    "JPY": 156.5, // 1 EUR = 156.5 JPY
    "USD": 1.07,  // 1 EUR = 1.07 USD
    "GBP": 0.87   // 1 EUR = 0.87 GBP
};
    return euro * oneEuroIs.USD;
}


function fromYenToPound(yen) {
    let oneEuroIs = {
    "JPY": 156.5, // 1 EUR = 156.5 JPY
    "USD": 1.07,  // 1 EUR = 1.07 USD
    "GBP": 0.87   // 1 EUR = 0.87 GBP
};
    return yen * (oneEuroIs.GBP / oneEuroIs.JPY);
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };


