// Bài 4: Cho người dùng nhập vào 1 số bất kỳ. Kiểm tra xem số đó có phải số
// nguyên tố hay không?
// input: 13
// output: true

// let numberInput = +prompt("Hay nhap 1 so");
// function nguyenTo(a){
//     let result;
// if (a == 1 || a == 2){
//        result = `${a} la so nguyen to`;
//    }  
// else {  
// for (let i = 2 ; i<a ; i++){
//      if (a%i == 0){
//      result = `${a} khong phai so nguyen to`;
//       break;
//      }
//      else {
//      result = `${a} la so nguyen to`;
//       break;
//      }
// }
// }
// return result;
// }

// console.log(nguyenTo(numberInput));



// Bài 5: Xây dựng hàm, kiểm tra chuỗi nào dài nhất
// input: ["Black", "Pink", "Green", "Blue", "Yellow"]
// output: Yellow

// let arrInput = ["Black", "Pink", "Green", "Blue", "Yellow"];
// debugger
// let findLongest = ()=> {
//     let longest = arrInput[0];
// for (let i =1 ; i<arrInput.length ; i++ ){  
//       if (arrInput[i].length > longest.length) {
//         longest = arrInput[i];
//       }
// }
// return longest;
// }
// console.log(findLongest(arrInput));

// // Nâng cao: Cho người dùng nhập vào cách nhau bằng dấu ","
// input: black, pink, green, blue, yellow
// output: yellow

// let strInput = prompt("Hay nhap cac mau khac nhau cach nhau boi dau phay:");
// let arrString = strInput.split(",");    
// // console.log(arrString);
// let findLongest = ()=> {
//     let longest = arrString[0];
// for (let i =1 ; i<arrString.length ; i++ ){  
//       if (arrString[i].length > longest.length) {
//         longest = arrString[i];
//       }
// }
// return longest;
// }
// console.log(findLongest(arrString));

// // Gợi ý: sử dụng .length để kiểm tra độ dài. black.length = 5

// Bài 6: Xây dựng hàm, tính tổng các số chẵn trong mảng
// input: [1,2,2,3,4,5,6,6,7]
// output: 20

// let arrInput = [1,2,2,3,4,5,6,6,7];
// let evenSum = () => {
//     let sum = 0;
//     for ( let i = 0 ; i < arrInput.length ; i++){
//         if (arrInput[i]%2 == 0){
//             sum += arrInput[i];
//         }
//     }
//     return sum;
// }
// console.log(evenSum(arrInput));

// Bài 7: Cho người dùng nhập vào, xây dựng hàm tìm số lớn thứ 2 trong mảng
// input: 3,5,7,6,4,8,20,55
// ouput: 20

// let strInput = prompt("Hay nhap cac so cach nhau boi dau phay");
// let arrString = strInput.split(",");
// let arrNumber = [];
// for (let i=0 ; i<arrString.length; i++ ){
//     arrNumber.push(+arrString[i]);
// }

// let secondNum = () => {
//     for (let i=0 ; i<2 ; i++){
//         // i =0 => 3
//         for (let j = i+1 ; j<arrNumber.length ; j++){
//             // j =1 => 5 ; j=2 => 7 ; j=3 => 6 ; j=4 => 4 ; j=5 => 8 ; j=6 => 20 ; j= 7 => 55
//             if (arrNumber[i]<arrNumber[j]){
//                 // 3<5 ; 5 < 7 ; 7 <6 || 7<4 || 7<8 ; 8 < 20 ; 20 <55; 
//                 let temp = arrNumber[i];
//                 // 3 ; 5 ; 7 ; 8 ; 20
//                 arrNumber[i] = arrNumber [j];
//                 // 5 ; 7 ; 8 ; 20 ; 55
//                 arrNumber [j] = temp;
//                 // 3 ; 5 ; 7 ; 8 ; 20
//             }
//              // 5 3 7,6,4,8,20,55 // 7 3 5 6,4,8,20,55 // 8 3 5 6 4 7 20 55 // 20 3 5 6 4 7 8 55 // 55 3 5 6 4 7 8 20 
//         }
       
//     }
//     return arrNumber[1];
// }
// console.log(secondNum(arrNumber));


// Bài 8: Cho người dùng nhập vào, tính trung bình cộng của các số đó
// input: 8,9,7,4,8
// output: 7.2

let strInput = prompt("Hay nhap cac so cach nhau boi dau phay:");
let arrString = strInput.split(",");
let arrNumber = [];
for (let i=0 ; i<arrString.length; i++ ){
    arrNumber.push(+arrString[i]);
}
let average = () => {
    let sum = 0;
    for (let i = 0 ; i<arrNumber.length ; i++){
        sum += arrNumber[i];
    }
    return sum/arrNumber.length;
}
console.log(average(arrNumber));