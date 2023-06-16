// Get the modal
var modal = document.getElementById("myModalFilter");

// Get the button that opens the modal
var btn = document.getElementById("myBtnFilter");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Make filter work
function filterProducts(distance) {
  const products = document.querySelectorAll(".productBg");
  const modal = document.querySelector(".modal");
  products.forEach((product) => {
    const productDistance = parseInt(product.getAttribute("data-distance"));

    if (distance === "<1km" && productDistance >= 1) {
      product.style.display = "none";
    } else if (distance === "<5km" && productDistance >= 5) {
      product.style.display = "none";
    } else if (distance === "<10km" && productDistance >= 10) {
      product.style.display = "none";
    } else if (distance === "<15km" && productDistance >= 15) {
      product.style.display = "none";
    } else if (distance === ">15km" && productDistance <= 15) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  });
}
