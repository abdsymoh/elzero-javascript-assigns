/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

// Create Elements
let productCard = document.createElement("div");
let productTitle = document.createElement("h2");
let productDescription = document.createElement("p");

// Create text for the title and description
let productTitleText = document.createTextNode("Product Title");
let productDescriptionText = document.createTextNode("Description");

// add the text to the title and description
productTitle.appendChild(productTitleText);
productDescription.appendChild(productDescriptionText);

// add the title to the card
productCard.appendChild(productTitle);

// add the description to the card
productCard.appendChild(productDescription);

// add Classes to the Elements
productCard.className = "product-card"
productTitle.className = "product-title"
productDescription.className = "product-desc"

// add the productCard to the body

document.body.appendChild(productCard)
