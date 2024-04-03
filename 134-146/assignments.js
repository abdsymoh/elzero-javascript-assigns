// التكليف 01
function assign1() {
  let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
  let ipRe = /(\w|\W+)+/gi;
  console.log(ip.match(ipRe));
}
assign1();
console.log("#".repeat(10));

// التكليف 02
function assign2() {
  let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
  let specialNamesRe = /os(\d+)?o/gi;
  console.log(specialNames.match(specialNamesRe));
  // Output
  // ['Os10O', 'OsO', 'Os100O']
}
assign2();
console.log("#".repeat(10));

// التكليف 03
function assign3() {
  let phone = "+(995)-123 (4567)";
  let phoneRe = /.\(\d{3}\)-\d{3}\s\(\d{4}\)/g;
  console.log(phone.match(phoneRe));
}
assign3();
console.log("#".repeat(10));

// التكليف 04
function assign4() {
  let url = "https://www.elzero.org.eg/artical?sss445511*/--";
  // let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
  /*
  https? => get http or https
  :\/\/ => get ://
  (?:[-\w]+\.)? => get www. or get website name if www. not found
  ([-\w]+) => get the website name
  \.\w+ => get the tld (com | net | org ..etc)
  (?:\.\w+)? => get the tld after the first one if found
  \/?.* => get every thing after the tld if found
  */
  let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/gi;
  console.log(url.match(re));
}
assign4();
console.log("#".repeat(10));

// التكليف 05
function assign5() {
  let date1 = "25/10/1982";
  let date2 = "25 - 10 - 1982";
  let date3 = "25 10 1982";
  let date4 = "25 10 82";

  let re = /(\d{2}\s?-?\s?\/?)+/gi; // Write Pattern Here
  console.log(date1.match(re)); // "25/10/1982"
  console.log(date2.match(re)); // "25 - 10 - 1982"
  console.log(date3.match(re)); // "25 10 1982"
  console.log(date4.match(re)); // "25 10 82"
}
assign5();
console.log("#".repeat(10));
