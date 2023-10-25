//Bai 1: Thay doi mau nen
let button = document.getElementById("btn");
button.onclick = () => {
  let randomColor;
  let baColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    randomColor = `rgb(${r}, ${g}, ${b})`;
    return randomColor;
  };
  console.log(baColor());
  document.body.style.backgroundColor = randomColor; // không lấy ra được phần từ body bằng cách getElement by tagname...
};

// Bai 2: Thay doi text ban dau
let p = document.getElementsByTagName("p");
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  p[0].innerHTML = "Text changed";
});

// Bai 3: Phong to thu nho text // Chỉ mới làm phóng to/thu nhỏ được 1 level
let p2 = document.getElementsByTagName("p");
let buttonOut = document.getElementById("Zout");
let buttonIn = document.getElementById("Zin");
buttonOut.addEventListener("click", () => {
  p2[1].style.fontSize = "larger";
});
buttonIn.addEventListener("click", () => {
  p2[1].style.fontSize = "smaller";
});

// Muốn click lại lần nữa thì trở về text đầu, size cũ thì làm thế nào? viết tiếp 1 addevent đằng sau???

// Bai 4: onmousehover: add class // Chưa làm được
let liCl = document.getElementsByClassName("liCl");
liCl.onmouseover = () => {
  liCl.style.backgroundColor = "pink";
};
liCl.onmouseout = () => {
  liCl.style.backgroundColor = "white";
};
// Bai 5: Hien thi gia tri nhap vao o input
let input = document.getElementById("inputText");
let but = document.getElementById("but");
but.onclick = () => {
  alert(input.value);
};
