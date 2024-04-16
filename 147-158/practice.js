// Object Oriented Programming
// Constructor

class User {
  constructor(id, username, city, eSalary) {
    this.i = "u" + id;
    this.u = username;
    this.c = city;
    this.e = eSalary;
  }
  userData() {
    return `ID: ${this.i} | Username: ${this.u} | City: ${this.c} | eSalary: ${this.userES()} EGP`;
  }
  userES() {
    return parseInt(this.e) * 0.3;
  }
}

let u1 = new User(100, "Abdullah", "Cairo", "5000 EGP");
console.log(u1.userData());
// console.log(u1.e * 0.3);
