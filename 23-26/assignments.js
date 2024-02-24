// assign 1
console.log(100000); // 100000
console.log(100_000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(5e4 * 2); // 100000
console.log(1e5); // 100000
console.log(1e1 ** 5); // 100000
console.log(Math.pow(1e1, 5)); // 100000
console.log(1_0_0_0_0_0); // 100000
console.log(Math.round(99999.9)); // 100000
console.log(1e7 / 1e2); // 100000
console.log(Math.ceil(99999.9)); // 100000
// console.log(); // 100000
// console.log(); // 100000

// assign 2
console.log(Math.abs(Number.MIN_SAFE_INTEGER));

// assign 3
console.log(Math.round(Math.log10(Number.MAX_SAFE_INTEGER)));

// assign 4
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// assign 5
let num = 10;
console.log(Math.floor(Math.log(num))); // 2

// assign 6
let flt = 10.4;
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10

// assign 7
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
