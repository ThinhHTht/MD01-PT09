// Bai 1: myColor = ["Red", "Green", "White", "Black"];
// Đầu ra mong đợi:
// "Red, Green, White, Black"
// "Red + Green + White + Black"

// let arrString = ["Red", "Green", "White", "Black"];
// // let String = arrString.join();
// let String = arrString.join(" + ");
// console.log(String);


// Bài 2: Viết chương trình JavaScript chấp nhận một số làm đầu vào và chèn dấu gạch
// ngang (-) vào giữa hai số chẵn. Ví dụ: nếu bạn chấp nhận 025468, đầu ra phải là
// 0-254-6-8.

// let numberInput = [0, 2, 5, 4, 6, 8];
// for (let i= 0; i<numberInput.length; i++ ){
//     if (numberInput[i]%2 == 0 && numberInput[i++]%2 == 0){
//         numberInput.splice(i++,0,"-");
//     }
// }
// console.log(numberInput.join());

// let strInput = "025468";


// Bài 3: Viết một chương trình JavaScript chấp nhận một chuỗi làm đầu vào và hoán
// đổi trường hợp của mỗi ký tự. Ví dụ: nếu bạn nhập 'The Quick Brown Fox', đầu ra phải
// là 'tHE qUICK bROWN fOX'.

// let strInput = "The Quick Brown Fox";
// let result = "";

// for (let i = 0; i < strInput.length; i++) {
//   let arr = strInput[i];
//   if (arr === arr.toLowerCase()) {
//     // arr[3] =
//     // "" === "".toLowerCase()
//     result += arr.toUpperCase();
//   } else {
//     result += arr.toLowerCase();
//   }
// }

// console.log(result);

// Bài 4: Viết kịch bản yêu cầu người dùng nhập một dãy số, Các số được phân tách
// bằng dấu phẩy, tính tổng các số và hiển thị cho người dùng

// Input: 1,2,3,12,4
// Output: 22
// debugger
// let strInput = prompt("Hay nhap mot day so, cac so phan cach nhau boi dau phay");
// let arr = [];
// arr = strInput.split(",");
// console.log(arr);
// let sum = 0;

// for (let i=0; i<arr.length; i++ ){
//         sum = sum + +arr[i];
//     }
// console.log(sum);


// Bài 5: Viết script yêu cầu người dùng nhập một dãy số, các số được phân tách bằng
// dấu phẩy, tìm số nhỏ nhất và đăng xuất cho người dùng

// let strInput = prompt("Hay nhap mot day so, cac so phan cach nhau boi dau phay");
// let arr = [];
// arr = strInput.split(",");
// console.log(arr);
// let min = +arr[0];
// for (let i=1; i<arr.length; i++ ){
//         if (+arr[i]<min){
//             min = +arr[i];
//         }
//     }
// console.log(min);



// Bài 7: Bạn là một người chăn cừu sở hữu một đàn cừu. Mỗi con cừu trong đàn của
// bạn có kích thước khác nhau:


// let arrSheep = [5, 7, 300, 90, 24, 50, 75];
// document.write("Xin chao, day la kich thuoc dan cuu cua toi:" + arrSheep);
// let maxSize = arrSheep[0];
// let month = 0;
// for (let month=0; month <3; month++){
// for (let i=1; i<arrSheep.length; i++){
//     if (arrSheep[i] > maxSize){
//         maxSize = arrSheep[i];
//         arrSheep[i] = 8;
//     }
// }
// document.write(`Con cuu lon nhat cua toi co kich thuoc ${maxSize}, hay cao no`);
// document.write(`Sau khi cao long, day la dan cuu cua toi: ${arrSheep}`);
// for (let i=0; i<arrSheep.length; i++){
//     arrSheep[i] = arrSheep[i] + 50;
// }
// document.write(`Day la kich thuoc dan cuu sau 1 thang: ${arrSheep} `);
// }

let arrSheep = [5, 7, 300, 90, 24, 50, 75];
document.write("Xin chao, day la kich thuoc dan cuu cua toi:" + arrSheep);

let month = 0;
for (let month=0; month <3; month++){
    let maxSize = arrSheep[0];
for (let i=1; i<arrSheep.length; i++){
    if (arrSheep[i] > maxSize){
        maxSize = arrSheep[i];
        // arrSheep[i] = 8;
    }
}
let index = arrSheep.indexOf(maxSize);
console.log(index);
arrSheep[index] = 8;
document.write(`Con cuu lon nhat cua toi co kich thuoc ${maxSize}, hay cao no`);
document.write(`Sau khi cao long, day la dan cuu cua toi: ${arrSheep}`);
for (let i=0; i<arrSheep.length; i++){
    arrSheep[i] = arrSheep[i] + 50;
}
document.write(`Day la kich thuoc dan cuu sau 1 thang: ${arrSheep} `);
}
// Ko hieu tai sao lai ko hien 2 dong maxsize va kich thuoc sau khi cao cua thang thu 3