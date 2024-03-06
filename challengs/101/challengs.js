console.log("Elzero JavaScript Ep. 101 Challenge");

// HTML
let allElements = document.getElementsByTagName("*");
// Create main container
let main = document.createElement("main");
main.className = "domChallenge";
document.body.prepend(main);

let container = document.createElement("div");
container.className = "container";

// All Element Reset
for (i = 0; i < allElements.length; i++) {
  let element = allElements[i];
  element.style.cssText = `
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: sans;
  `;
}

// create header + logo + nav + navLinks
// header
let header = document.createElement("header");
header.className = "header";
main.prepend(header);
header.appendChild(container);
// logo
let logo = document.createElement("h1");
logo.className = "logo";
let logoText = document.createTextNode(`Abdullah S.`);
logo.append(logoText);
container.prepend(logo);
// nav + navLinks
let nav = document.createElement("nav");
nav.className = "navbar";
let navLinkTexts = ["Home", "About", "Services", "Contact"];
for (let i = 0; i < navLinkTexts.length; i++) {
  let navLink = document.createElement("a");
  navLink.className = "navLink";
  let navLinkText = document.createTextNode(navLinkTexts[i]);
  navLink.href = "#";
  navLink.style.cssText = `
  box-sizing: border-box;
  color: #333;
  text-decoration: none;
  opacity: 0.7;
  `;
  navLink.prepend(navLinkText);
  nav.append(navLink);
}
logo.after(nav);

// Create products + productCard
let products = document.createElement("div");
products.className = "products";
let productsContainer = container.cloneNode();
header.after(productsContainer);
productsContainer.appendChild(products);
for (let i = 0; i < 15; i++) {
  // productCard
  let productCard = document.createElement("div");
  productCard.className = "productCard";
  let productNum = document.createElement("h2");
  productNum.className = "productNum";
  productNum.textContent = `${i + 1}`;
  productNum.style.cssText = `
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: royalblue;
`;
  let productTitle = document.createElement("p");
  productTitle.className = "productTitle";
  productTitle.textContent = `Product Title`;
  productCard.prepend(productNum);
  productNum.after(productTitle);
  productCard.style.cssText = `
  box-sizing: border-box;
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  `;
  products.append(productCard);
}

// create footer
let footer = document.createElement("footer");
footer.className = "footer";
let footerText = (document.createTextNode = `Copyright © 2024`);
footer.append(footerText);
main.append(footer);

// CSS

// Main
main.style.cssText = `
  box-sizing: border-box;
  background-color: #ddd;
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

// Container
container.style.cssText = `
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  height: auto;
  padding: 0 20px;
`;

productsContainer.style.cssText = `
  box-sizing: border-box;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  height: auto;
`;

// Header
header.style.cssText = `
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 10px 20px;
  background-color: white;
`;

// Logo
logo.style.cssText = `
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: royalblue;
`;

// nav
nav.style.cssText = `
  box-sizing: border-box;
  display: flex;
  gap: 20px;
`;
// products
products.style.cssText = `
height: calc(100svh - 148px);
display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  margin: 20px;
`;
// footer
footer.style.cssText = `
  background-color: royalblue;
  color: white;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

// JS

console.log("==========");
