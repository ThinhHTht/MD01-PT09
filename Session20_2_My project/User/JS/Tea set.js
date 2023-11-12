const list = document.querySelector(".list");
// Format tiền
let VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
const listProduct = JSON.parse(localStorage.getItem("Product"));

function renderItem() {
  // const listProduct = JSON.parse(localStorage.getItem("Product"));
  for (let i = 0; i < listProduct.length; i++) {
    let value = listProduct[i];
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="../image/Tea set/${value.image}"/>
      <div class="title">${value.name}</div>
      <div class="price">${VND.format(value.price)}</div>
      <button onclick="addToCart(${i})">Thêm vào giỏ hàng</button>
      `;
    list.appendChild(newDiv);
  }
}
renderItem();

// Gio hang

const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const quantity = document.querySelector(".quantity");

const listCart = JSON.parse(localStorage.getItem("listCart")) || [];
function addToCart(index) {
  //   console.log(index);
  if (listCart[index] == null) {
    // spread
    listCart[index] = { ...listProduct[index], quantity: 1 };
  } else {
    listCart[index].quantity += 1;
  }
  localStorage.setItem("listCart", JSON.stringify(listCart));
  window.location.href = "Cart.html";
}

quantity.innerHTML = localStorage.getItem("quantity");
