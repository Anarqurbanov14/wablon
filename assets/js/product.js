function addToCardById() {
  const addToCartBtn = document.querySelector(".add-to-cart_btn");
  const itemName =
    addToCartBtn.parentElement.parentElement.parentElement.children[0].children[0].innerHTML.trim();
  addToCartBtn.onclick = function () {
    let productItem = products.find((x) => x.name === itemName);
    if (cart.some((x) => x.name === itemName)) {
      let cartItem = cart.find((x) => x.name === itemName);
      cartItem.count++;
    } else {
      let cartItem = {
        name: productItem.name,
        price: productItem.price,
        image: productItem.image,
        count: 1,
      };
      cart.push(cartItem);
      console.log(cart);
    }
    localStorage.setItem("basket", JSON.stringify(cart));
  };
}

addToCardById();
