const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const quantity = document.querySelector(".quantity");

const listCart = JSON.parse(localStorage.getItem("listCart")) || [];

// Format tiền
let VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  for (let i = 0; i < listCart.length; i++) {
    let value = listCart[i];
    if (value !== null) {
      let newLi = document.createElement("li");
      newLi.classList.add("cart-style");
      newLi.innerHTML = `
      <div class="id-cart">${value.id}</div>
      <img class="img-cart" src=""/>
                <div  class="name-cart">${value.name}</div>
                <div  class="price-cart">${VND.format(value.price)}</div>
                <div class="updateQuantity">
                <button onclick="changeQuantity(${i}, ${
        value.quantity - 1
      })">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${i}, ${
        value.quantity + 1
      })">+</button>
            </div>
            `;
      listCard.appendChild(newLi);
      totalPrice += value.price * value.quantity;
      count += value.quantity;
    }
  }
  total.innerText = VND.format(totalPrice);
  quantity.innerHTML = count;
  let cartQuantity = localStorage.setItem("quantity", count);
}

function changeQuantity(index, newQuantity) {
  if (newQuantity <= 0) {
    delete listCart[index];
  } else {
    listCart[index].quantity = newQuantity;
  }

  localStorage.setItem("listCart", JSON.stringify(listCart));
  reloadCard();
}
reloadCard();

if (!localStorage.getItem("listCart")) {
  localStorage.setItem("listCart", JSON.stringify(listCart));
}
