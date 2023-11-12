// get image
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  //   imageView.textContent = "";
}
dropArea.addEventListener("dragover", function (e) {
  e.preventDefault();
});
dropArea.addEventListener("drop", function (e) {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});

const mainForm = document.getElementById("main-form");
mainForm.addEventListener("submit", (e) => {
  // Chặn sự kiện mặc định thẻ form
  e.preventDefault();

  // Lấy các giá trị trong ô input
  const idProduct = Math.floor(Math.random() * 10000);
  const nameProduct = document.getElementById("input-name").value;
  const priceProduct = document.getElementById("price-input").value;
  const imageProduct = inputFile.value;
  //   const addBtn = document.getElementById("add-btn");

  // Tạo đối tượng mới để thêm vào giá trị ban đầu
  const newProduct = {
    id: idProduct,
    name: nameProduct,
    price: priceProduct,
    image: imageProduct,
  };

  // lấy trong local nếu chưa có sẽ set vào []
  const setItem = JSON.parse(localStorage.getItem("Product")) || [];

  setItem.push(newProduct);

  localStorage.setItem("Product", JSON.stringify(setItem));

  mainForm.reset();
  window.location.href = "Manage product.html";
});
