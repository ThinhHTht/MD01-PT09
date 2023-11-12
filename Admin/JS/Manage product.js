// const productList = document.querySelector(".table");
// const getList = JSON.parse(localStorage.getItem("listProduct"));
// let VND = new Intl.NumberFormat("vi-VN", {
//   style: "currency",
//   currency: "VND",
// });

// function renderProduct() {
//   for (let i = 0; i < getList.length; i++) {
//     let value = getList[i];
//     let newTr = document.createElement("tr");
//     newTr.classList.add("user");
//     newTr.innerHTML = `
//         <td>${value.id}</td>
//         <td>${value.name}</td>
//         <td>${VND.format(value.price)}</td>
//         <td><img class="img" src="../../User/Image/Tea set/${
//           value.image
//         }"/></td>
//         <td><button class="edit">Edit</button> <button class="delete">Delete</button></td>
//         `;

//     productList.appendChild(newTr);
//   }
// }
// renderProduct();
const productList = document.querySelector(".table");
const getList = JSON.parse(localStorage.getItem("Product"));
let VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function renderProduct() {
  for (let i = 0; i < getList.length; i++) {
    let value = getList[i];
    let newTr = document.createElement("tr");
    newTr.classList.add("user");
    newTr.innerHTML = `
        <td>${i + 1}</td>
        <td>${value.name}</td>
        <td>${value.id}</td>
        <td>${VND.format(value.price)}</td>
        <td><img class="img" src="${value.image}"/></td>
        <td><button class="edit">Edit</button> <button class="delete">Delete</button></td>
        `;

    productList.appendChild(newTr);
  }
}
renderProduct();
console.log("${value.img}");
