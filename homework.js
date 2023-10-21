// Bài 1: Cho người dùng nhập vào chuỗi số bất kì. Viết hàm sắp xếp chuỗi số đó từ bé đến lớn
// input: 2,3,5,4,1
// output: 1,2,3,4,5
// let numberSort = () => {
//   let numberInput = prompt("Hay nhap vao cac so cach nhau boi dau phay");
//   let arrNumber = numberInput.split(",");
//   for (let i = 0; i < arrNumber.length; i++) {
//     for (let j = i + 1; j < arrNumber.length; j++) {
//       if (+arrNumber[i] > +arrNumber[j]) {
//         let temp = arrNumber[i];
//         arrNumber[i] = arrNumber[j];
//         arrNumber[j] = temp;
//       }
//     }
//   }
//   return arrNumber.join();
// };

// console.log(numberSort());

// // Bài 2: Viết một hàm nhận một chuỗi làm đối số và trả về độ dài của chuỗi.
// input: "Hello World"
// output: 11

// let strLength = () => {
//   let strInput = prompt("Hay nhap mot chuoi ky tu");
//   return strInput.length;
// };
// console.log(strLength());

// Bài 3: Viết một hàm nhận một mảng các chuỗi làm đối số và trả về mảng mới chứa các chuỗi viết hoa.
// input: "thịnh"
// output: "THỊNH"

// function toUppercase() {
//   let strInput = prompt("Hay nhap mot chuoi in thuong");
//   strInput = strInput.toUpperCase();
//   return strInput;
// }
// console.log(toUppercase());

// Bài 4: Viết một hàm nhận một chuỗi làm đối số và trả về chuỗi mới với các từ đảo ngược thứ tự.
// input: "Khanh"
// output: "hnahK"

// function reverseString() {
//   let stringInput = prompt("Hay nhap mot chuoi");
//   let result = "";
//   for (let i = stringInput.length - 1 ; i>=0 ; i--) {
//     //    result.push(stringInput[i]);
//     result +=  stringInput[i]
//   }
//   return result;
// }
// console.log(reverseString());

// Bài 5: Viết một hàm nhận một mảng các số làm đối số và trả về mảng mới chỉ chứa các số nguyên tố.
// input: 1,2,3,4,5,6,7,8
// output: 2,3,5,7
// */
debugger;
let isPrime = () => {
  let strInput = prompt("Hay nhap cac so cach nhau boi dau phay");
  let arr = strInput.split(",");
  // console.log(arr);
  let arrPrime = [];
  // let check = true;
  for (let i = 0; i < arr.length; i++) {
    let check = true;
    if (+arr[i] < 2) {
      check = false;
    } else if (+arr[i] > 2) {
      for (let j = 2; j < +arr[i]; j++) {
        if (+arr[i] % j == 0) {
          check = false;
          break;
        }
      }
    }
    if (check) {
      arrPrime.push(arr[i]);
    }
  }

  // if (check) {
  //   arrPrime.push(arr[i]);
  // }
  return arrPrime;
};
console.log(isPrime());
