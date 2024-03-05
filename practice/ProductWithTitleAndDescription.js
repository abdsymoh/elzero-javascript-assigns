/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

for (i = 0; i < 100; i++) {
  // Create Elements
  let productCard = document.createElement("div");
  let productTitle = document.createElement("h2");
  let productDescription = document.createElement("p");
  let hr = document.createElement("hr")

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

  // add the hr to the card
  productCard.appendChild(hr)

  // add Classes to the Elements
  productCard.className = "product-card";
  productTitle.className = "product-title";
  productDescription.className = "product-desc";

  // add the productCard to the body

  document.body.appendChild(productCard);
}
