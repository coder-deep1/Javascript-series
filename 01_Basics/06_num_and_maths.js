const score = 500;
console.log(score);

const balance = new Number(200);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.03802998;
console.log(otherNumber);

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

/* Mathematics */

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.ceil(46.2));
console.log(Math.floor(37.8));
console.log(Math.round(48.8));
console.log(Math.max(4,5,2,6,8));
console.log(Math.min(4,5,2,6,8));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));
console.log(Math.ceil(Math.random() * 10 + 1));

const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min+ 1) )+min);
