function toggleFavorite(event) {
  const heartIcon = event.target;

  // Toggle the filled/unfilled appearance of the heart icon
  heartIcon.classList.toggle("filled");

  // Get the product div associated with the clicked heart icon
  const productDiv = heartIcon.closest(".productBg");

  // Toggle the favorite status of the product
  const isFavorite = productDiv.classList.toggle("favorite");

  // Add or remove the product from the favorites page
  if (isFavorite) {
    addToFavoritesPage(productDiv);
  } else {
    removeFromFavoritesPage(productDiv);
  }
}

// These functions will handle adding and removing products from the "Favorites" page.
function addToFavoritesPage(productDiv) {
  // Retrieve the "Favorites" page document
  const favoritesPage = window.open("favorites.html", "_blank").document;

  // Create a clone of the product div and add it to the favorites page
  const favoriteProduct = productDiv.cloneNode(true);
  favoritesPage.body.appendChild(favoriteProduct);
}

function removeFromFavoritesPage(productDiv) {
  // Retrieve the "Favorites" page document
  const favoritesPage = window.open("favorites.html", "_blank").document;

  // Find and remove the corresponding product div from the favorites page
  const favoriteProduct = favoritesPage.querySelector(
    `.product[data-id="${productDiv.dataset.id}"]`
  );
  favoritesPage.body.removeChild(favoriteProduct);
}
