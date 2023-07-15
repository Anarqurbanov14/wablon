$(document).ready(function () {
  $(".slideshow-container").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  var prev = $(".slick-prev");
  prev.html('<i class="fa-solid fa-arrow-left"></i>');

  var next = $(".slick-next");
  next.html('<i class="fa-solid fa-arrow-right"></i>');

  // Checkout Page accordion
  $("#create_pwd").on("change", function () {
    $(".account-create").slideToggle("100");
  });

  //about page client feedback
  $(".client-feedback-summary").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  //cart page slick
  $(".slick-arrow-style").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // product view mode change js
  $(".product-view-mode a").on("click", function (e) {
    e.preventDefault();
    var shopProductWrap = $(".shop-product-wrap");
    var viewMode = $(this).data("target");
    $(".product-view-mode a").removeClass("active");
    $(this).addClass("active");
    shopProductWrap.removeClass("grid-view list-view").addClass(viewMode);
  });

  // product details slider active
  $(".product-large-slider").slick({
    fade: true,
    arrows: false,
    asNavFor: ".pro-nav",
  });

  // product details slider nav active
  $(".pro-nav").slick({
    slidesToShow: 4,
    asNavFor: ".product-large-slider",
    arrows: false,
    focusOnSelect: true,
  });
});

// let addToCardBtn = document.querySelectorAll(".addToCart");
// let myBasketStorage = localStorage.getItem("basket");
// let productWrapper = document.querySelector(".slick-arrow-style");
// let basket = [];
// // function basketCount() {
// //   document.querySelector("#basketCount").innerHTML = JSON.parse(
// //     localStorage.getItem("basket")
// //   ).length;
// // }
// // basketCount();

// //add to cart
// let cartTable = document.querySelector(".cart-table tbody");

// function addToCart() {
//   [...addToCardBtn].forEach((btn) => {
//     let productItem = btn.parentElement.parentElement.parentElement;
//     btn.onclick = function () {
//       let productImg = productItem
//         .getElementsByTagName("img")[0]
//         .getAttribute("src");
//       let productName = productItem.querySelector(".product-name a").innerHTML;
//       let productPrice =
//         productItem.querySelector(".product-name span").innerHTML;
//       let item = basket.find((b) => b.name === productName);
//       if (basket.some((x) => x.name === productName)) {
//         item.count++;
//       } else {
//         basket.push({
//           image: productImg,
//           name: productName,
//           price: productPrice,
//           count: 1,
//         });
//       }
//       localStorage.setItem("basket", JSON.stringify(basket));
//       console.log(basket);
//     };
//   });
// }
// addToCart();
// let basketCart = JSON.parse(localStorage.getItem("basket"));

// function renderCart() {
//   cartTable.innerHTML = "";
//   basketCart.map((data) => {
// cartTable.innerHTML += `     <tr>
// <td class="pro-thumbnail">
//     <a href="#"><img class="img-fluid"
//             src=${data.image} alt="Product" /></a>
// </td>
// <td class="pro-title">
//     <a href="#">${data.name}</a>
// </td>
// <td class="pro-price"><span>${data.price}</span></td>
// <td class="pro-quantity">
//     <div class="pro-qty" style="display:flex; gap:30px">
//         <input type="number" id="quantity" value="${data.count}"/>
//         <div class="increase-decrease">
//             <div id="increase" style="padding:0 3px; border:1px solid black">+
//             </div>
//             <div id="decrease" style="padding:0 3px; border:1px solid black">-
//             </div>
//         </div>
//     </div>
// </td>
// <td class="pro-subtotal"><span id="subtotal">$295.00</span></td>
// <td class="pro-remove">
//     <a href="#"><i class="fa-solid fa-trash-can"></i></a>
// </td>
// </tr>`;
//   });
// }
// renderCart();

// //card  delete
// let trashBin = document.querySelectorAll(".fa-trash-can");

// function removeItem() {
//   [...trashBin].forEach((btn) => {
//     btn.onclick = function () {
//       let cartItem = btn.parentElement.parentElement.parentElement;
//       let name = cartItem.querySelector(".pro-title a").innerHTML;
//       cartItem.remove();
//       basketCart = basketCart.filter((x) => x.name != name);
//       localStorage.setItem("basket", JSON.stringify(basketCart));
//     };
//   });
// }
// removeItem();
// const increaseButtons = document.querySelectorAll("#increase");
// const decreaseButtons = document.querySelectorAll("#decrease");

// function itemQuantityIncrease() {
//   [...increaseButtons].forEach((btn) => {
//     btn.onclick = () => {
//       let item = btn.parentElement.parentElement.parentElement.parentElement;
//       let count = item.querySelector("#quantity");
//       let itemName = item.querySelector(".pro-title a").innerHTML;
//       let newCount = ++count.value;
//       let subtotal = item.querySelector("#subtotal");
//       let itemPrice = item.querySelector(".pro-subtotal span").innerHTML;
//       let basketItem = basketCart.find((x) => x.name === itemName);
//       basketItem.count = newCount;
//       let itemTotalPrice = parseInt(basketItem.count) * parseInt(itemPrice);
//       subtotal.innerHTML = "$" + itemTotalPrice;
//       basketItem.price = itemTotalPrice;
//       localStorage.setItem("basket", JSON.stringify(basketCart));
//     };
//   });
// }
// itemQuantityIncrease();

// function itemQuantityDecrease() {
//   [...decreaseButtons].forEach((btn) => {
//     btn.onclick = () => {
//       let item = btn.parentElement.parentElement.parentElement.parentElement;
//       let count = item.querySelector("#quantity");
//       let itemName = item.querySelector(".pro-title a").innerHTML;
//       if (count.value > 1) {
//         let newCount = --count.value;
//         let basketItem = basketCart.find((x) => x.name === itemName);
//         basketItem.count = newCount;
//         localStorage.setItem("basket", JSON.stringify(basketCart));
//       }
//     };
//   });
// }
// itemQuantityDecrease();

const products = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/dakna_6e440c4a-f1fd-4df9-a0f3-5f05df77bc5a_600x.jpg?v=1649685159",
    name: "Product Naaame",
    price: 100,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/dakna_6e440c4a-f1fd-4df9-a0f3-5f05df77bc5a_600x.jpg?v=1649685159",
    name: "Product Naaame1",
    price: 100,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/dakna_6e440c4a-f1fd-4df9-a0f3-5f05df77bc5a_600x.jpg?v=1649685159",
    name: "Product Naaame2",
    price: 100,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/dakna_6e440c4a-f1fd-4df9-a0f3-5f05df77bc5a_600x.jpg?v=1649685159",
    name: "Product Naaame3",
    price: 100,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0027/0952/0502/products/dakna_6e440c4a-f1fd-4df9-a0f3-5f05df77bc5a_600x.jpg?v=1649685159",
    name: "Product Naaame4",
    price: 100,
  },
];

let cart = [];

const productsWrapper = document.querySelector(".slick-arrow-style");

products.map((data) => {
  productsWrapper.innerHTML += `<div class="product-item mb-50">
  <div class="product-thumb">
    <a href="product-details.html">
      <img
        src=${data.image}
        alt="">
    </a>
  </div>
  <div class="product-content">
    <h5 class="product-name">
      <a href="product-details.html">${data.name}</a>
      <p class="product-price" data-price="100">${data.price}$</span>
    </h5>
    <div class="product-action-link">
      <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip"
          title="Quick View"><i class="fa-solid fa-eye"></i></span> </a>
      <a href="#" data-toggle="tooltip" title="Wishlist"><i class="fa-solid fa-heart"></i></a>
      <a class="addToCart" data-toggle="tooltip" title="Add To Cart"><i
      class="fa-solid fa-cart-shopping"></i></a>
    </div>
  </div>
</div>`;
});

const addToCart = () => {
  let addBtns = document.querySelectorAll(".addToCart");
  [...addBtns].forEach((btn) => {
    btn.onclick = () => {
      let item = btn.parentElement.parentElement.parentElement;
      let name = item.querySelector(".product-name a").innerHTML;
      let price = item.querySelector(".product-price").innerHTML;
      let image = item.querySelector("img").getAttribute("src");
      let cartItem = cart.find((x) => x.name === name);
      if (cart.some((x) => x.name === name)) {
        cartItem.count++;
      } else {
        let cartItem = {
          name,
          price,
          image,
          count: 1,
        };
        cart.push(cartItem);
      }
      localStorage.setItem("basket", JSON.stringify(cart));
    };
  });
};

addToCart();

let cartTable = document.querySelector(".table-bordered tbody");

function renderCart() {
  cart = JSON.parse(localStorage.getItem("basket")) || [];
  cartTable.innerHTML = "";
  cart.map((data) => {
    cartTable.innerHTML += `     <tr>
    <td class="pro-thumbnail">
        <a href="#"><img class="img-fluid"
                src=${data.image} alt="Product" /></a>
    </td>
    <td class="pro-title">
        <a href="#">${data.name}</a>
    </td>
    <td class="pro-price"><span>${data.price}</span></td>
    <td class="pro-quantity">
        <div class="pro-qty" style="display:flex; gap:30px">
            <input type="number" id="quantity" value="${data.count}"/>
            <div class="increase-decrease">
                <div id="increase" style="padding:0 3px; border:1px solid black">+
                </div>
                <div id="decrease" style="padding:0 3px; border:1px solid black">-
                </div>
            </div>
        </div>
    </td>
    <td class="pro-subtotal"><span id="subtotal">${
      parseInt(data.price) * parseInt(data.count)
    }$</span></td>
    <td class="pro-remove">
        <a href="#"><i class="fa-solid fa-trash-can"></i></a>
    </td>
    </tr>`;
  });
}

renderCart();

let rmvBtns = document.querySelectorAll(".pro-remove a");

function removeCartItem() {
  [...rmvBtns].forEach((btn) => {
    btn.onclick = function () {
      let cartItem = btn.parentElement.parentElement;
      let name = cartItem.querySelector(".pro-title").innerText;
      cart = cart.filter((x) => x.name !== name);
      localStorage.setItem("basket", JSON.stringify(cart));
      cartItem.remove();
      console.log(cart);
      let subTotalAmont = document.querySelector("#sub-total-amount");
      let totalAmount = document.querySelector("#total-amount");
      let sum = 0;
      let subtotals = document.querySelectorAll(".pro-subtotal span");
      [...subtotals].forEach((sub) => {
        sum += parseInt(sub.innerHTML);
      });
      subTotalAmont.innerHTML = sum + "$";
      totalAmount.innerHTML = sum + "$";
    };
  });
}
removeCartItem();

const increaseButtons = document.querySelectorAll("#increase");
const decreaseButtons = document.querySelectorAll("#decrease");
let subTotalAmont = document.querySelector("#sub-total-amount");
let totalAmount = document.querySelector("#total-amount");
let sum = 0;
let subtotals = document.querySelectorAll(".pro-subtotal span");
[...subtotals].forEach((sub) => {
  sum += parseInt(sub.innerHTML);
});
subTotalAmont.innerHTML = sum + "$";
totalAmount.innerHTML = sum + "$";

function inreaseQuantity() {
  [...increaseButtons].forEach((btn) => {
    btn.onclick = () => {
      let item = btn.parentElement.parentElement.parentElement.parentElement;
      let count = item.querySelector("#quantity");
      count.value++;
      let name = item.querySelector(".pro-title").innerText;
      let cartItem = cart.find((x) => x.name === name);
      cartItem.count++;
      let subtotal = item.querySelector(".pro-subtotal span");
      let price = item.querySelector(".pro-price span").innerText;
      totalSubPrice = parseInt(count.value) * parseInt(price);
      subtotal.innerText = totalSubPrice + "$";
      let subTotalAmont = document.querySelector("#sub-total-amount");
      let totalAmount = document.querySelector("#total-amount");
      let sum = 0;
      let subtotals = document.querySelectorAll(".pro-subtotal span");
      [...subtotals].forEach((sub) => {
        sum += parseInt(sub.innerHTML);
      });
      subTotalAmont.innerHTML = sum + "$";
      totalAmount.innerHTML = sum + "$";
      let total = document.querySelector("span.money");
      total.innerHTML = "$" + sum;
      localStorage.setItem("total", parseInt(sum));
      localStorage.setItem("basket", JSON.stringify(cart));
    };
  });
}
function decreseQuantity() {
  [...decreaseButtons].forEach((btn) => {
    btn.onclick = () => {
      let item = btn.parentElement.parentElement.parentElement.parentElement;
      let count = item.querySelector("#quantity");
      if (count.value > 1) count.value--;
      let name = item.querySelector(".pro-title").innerText;
      let cartItem = cart.find((x) => x.name === name);
      cartItem.count--;
      let subtotal = item.querySelector(".pro-subtotal span");
      let price = item.querySelector(".pro-price span").innerText;
      totalSubPrice = parseInt(count.value) * parseInt(price);
      subtotal.innerText = totalSubPrice + "$";
      let subTotalAmont = document.querySelector("#sub-total-amount");
      let totalAmount = document.querySelector("#total-amount");
      let sum = 0;
      let subtotals = document.querySelectorAll(".pro-subtotal span");
      [...subtotals].forEach((sub) => {
        sum += parseInt(sub.innerHTML);
      });
      subTotalAmont.innerHTML = sum + "$";
      totalAmount.innerHTML = sum + "$";
      let total = document.querySelector("span.money");
      total.innerHTML = "$" + sum;
      localStorage.setItem("total", parseInt(sum));
      localStorage.setItem("basket", JSON.stringify(cart));
    };
  });
}

let total = document.querySelector("span.money");
total.innerHTML = "$" + sum;

inreaseQuantity();
decreseQuantity();


let basketCOunt = document.querySelector('#basketCount');
basketCOunt.innerHTML = cart.length;