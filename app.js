let rangeInput = document.getElementById("inputValue");
var result = document.getElementById("result");
var result2 = document.getElementById("result2");
var total = document.getElementById("total");
var product = document.querySelectorAll("#product");
var productImage = document.querySelector(".product");

product.forEach(myFunction);
function myFunction(item) {
  item.addEventListener("click", () => {
    if (item.value == "5.99") {
        productImage.style.backgroundImage = "url('1.jpg')"
        result2.innerHTML = "Preis: 5.99 €";
    } else if (item.value == "8.99") {
        productImage.style.backgroundImage = "url('2.png')"
        result2.innerHTML = "Preis: 8.99 €";
    } else if (item.value == "23.99") {
        productImage.style.backgroundImage = "url('3.jpg')"
        result2.innerHTML = "Preis: 23.99 €";
    }

    rangeInput.addEventListener("click", () => {
        result.innerHTML = "Quantity: " + rangeInput.value;
        total.innerHTML = "Total: " + (rangeInput.value * item.value).toFixed(2)+" €";
      });
  });
 
}
