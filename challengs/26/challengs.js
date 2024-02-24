// Elzero JavaScript Ep. 30 Challenge

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Smallest number
console.log(Math.trunc(Math.min(a, b, c, d)));

// use a + d one time to get the output
console.log(Math.pow(a, Math.trunc(d))); // 10000

// return integer "2" from d with 4 method
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(+d.toFixed(0));

// use b + d one time to get the output
console.log(`${Math.trunc(b / Math.ceil(d))}.${Math.round(b / Math.ceil(d))}`); // 66.67 => string
console.log(Math.round(b / Math.ceil(d))); // 67 => number
