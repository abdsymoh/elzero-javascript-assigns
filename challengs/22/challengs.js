// Elzero JavaScript Ep. 22 Challenge

/*
  Operators in JS:
  [+] => Addition
  [-] => Subtraction
  [*] => Multiplication
  [**] => Exponentiation
  [/] => Division
  [%] => Modulus
  [++] => Increment 
  [post Increment] => num++ [بيتم وضع العلامة + بعد المتغير] [بيتم طباعة المتغير بعد ذلك يتم الإضافة عليه]
  [pre Increment] => ++num [بيتم وضع العلامة + قبل المتغير] [بيتم الإضافة وبعد ذلك يتم طباعة المتغير]
  [--] => Decrement
  []
*/

// Challenge 1

console.log("=== Challenge 1 ===");

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // 100
/*
[++a] [+] [+b++] [+] [+c++] [-] [+a++]
[++a]
- value: 11
- explain: [++] pre Increment
[+]
- explain: Addition
[+b++]
- value: 20
- explain: [+] unary plus  / [++] post Increment
[+]
- explain: Addition
[+c++]
- value: 80
- explain: [+] unary plus  / [++] post Increment
[-]
- explain: Subtraction
[+a++]
- value: 10
- explain: [+] unary plus  / [++] post Increment
*/

console.log(++a + -b + +c++ - -a++ + +a); // 100

/*
[++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
[++a]
- value: 13
- explain: [++] pre Increment
[+]
- explain: Addition
[-b]
- value: -21
- explain: [-] unary minus
[+]
- explain: Addition
[+c++]
- value: 81
- explain: [+] unary plus  / [++] post Increment
[-]
- explain: Subtraction
[-a++]
- value: -12
- explain: [-] unary minus / [++] post Increment
[+]
- explain: Addition
[+a]
- value: 12
- explain: [+] unary plus
*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 100
/*
[--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
[--c]
- value: 81
- explain: [--] pre Decrement
[+]
- explain: Addition
[+b]
- value: 21
- explain: [+] unary plus
[+]
- explain: Addition
[--a]
- value: 13
- explain: [--] pre Decrement
[*]
- explain: Multiplication
[+b++]
- value: 21
- explain: [+] unary plus  / [++] post Increment
[-]
- explain: Subtraction
[+b]
- value: 21
- explain: [+] unary plus
[*]
- explain: Multiplication
[a]
- value: 14
- explain:
[+]
- explain:
[--a]
- value: 13
- explain: [--] pre Decrement
[-]
- explain: Subtraction
[+true]
- value: 1
- explain: [+] unary plus
*/

console.log("===================");

// Challenge 2

console.log("=== Challenge 2 ===");

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// only use variables values
// do not use variable twice

console.log(-d * +e); // 2000
console.log(-d + ++e * ++g + ++f); // 173

console.log("===================");
