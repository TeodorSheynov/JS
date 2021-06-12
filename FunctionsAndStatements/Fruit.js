function roundValues(a,b,c){
let kilos=Number(b)/1000;
let price=kilos*c;
console.log(`I need $${price.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${a}.`);
}
roundValues('orange', 2500, 1.80);