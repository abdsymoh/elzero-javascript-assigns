/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

let cards = document.createElement("section");
for (i = 0; i < 100; i++) {
  // Create Elements
  let productCard = document.createElement("div");
  let productTitle = document.createElement("h2");
  let productDescription = document.createElement("p");

  // Create text for the title and description
  let productTitleText = document.createTextNode(`Product Title ${i + 1}`);
  let productDescriptionText = document.createTextNode("Description");

  // add the text to the title and description
  productTitle.appendChild(productTitleText);
  productDescription.appendChild(productDescriptionText);

  // add the title to the card
  productCard.appendChild(productTitle);

  // add the description to the card
  productCard.appendChild(productDescription);

  // add the productCard to cards
  cards.appendChild(productCard);

    // add Classes to the Elements
    cards.className = "cards"
    productCard.className = "product-card";
    productTitle.className = "product-title";
    productDescription.className = "product-desc";

  // add the cards to the body
  document.body.appendChild(cards);
}
