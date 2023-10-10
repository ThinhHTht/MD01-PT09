//Bài tập 1: Tính tổng các phần tử trong mảng
// Cho mảng ban đầu. Tính tổng các phẩn tử trong mảng. Ví dụ:
// Input: [1,2,3]
// Ouput: 6
// let arrNumber = [1,2,3];
// let arrSum = arrNumber[0] + arrNumber[1] + arrNumber[2];
// console.log(`Tổng các phần tử trong mảng là: ${arrSum}`);


// Bài tập 2: Tìm phần tử lớn nhất trong mảng
// Cho mảng ban đầu. Tìm phần tử lớn nhất. ví dụ:
// Input: [1,2,3]
// Output: 3
// let arrNumber = [1,2,3];
// let max = arrNumber[0];
// for (let i=0; i<arrNumber.length; i++){
//     if(arrNumber[i]> max){
//         max = arrNumber[i];
//     }
// }
// console.log(`So lon nhat la: ${max}`);


// Bài tập 3: Tìm phần tử nhỏ nhất trong mảng
// Cho mảng ban đầu. Tìm phần tử nhỏ nhất. ví dụ:
// Input: [10,8,2,6]
// Output: 2
// let arrNumber = [10,8,2,6];
// let min = arrNumber[0];
// for (let i=0; i<arrNumber.length; i++){
//     if(arrNumber[i]<min){
//         min = arrNumber[i];
//     }
// }
// console.log(`So nho nhat la: ${min}`);


// Bài tập 4: Kiểm tra xem phần tử có tồn tại trong mảng hay không
// Cho mảng ban đầu, làm theo 2 cách:
// + Cách 1: Không sử dụng hàm có sẵn
// + Cách 2: Sử dụng hàm có sẵn

// + Cách 1
// Input: [1, 2, 3, 4, 5];
// Output: true/false
// let arrNumber = [1, 2, 3, 4, 5];
// let numberInput = +prompt("Hay nhap so bat ky");
// let check = false;
// for (let i=0; i<arrNumber.length; i++){
//     if(numberInput == arrNumber[i]){
//         check = true;
//     }
// }
// if(check){
//     console.log(true);
// }
// else{
//     console.log(false);
// }
// + Cách 2: dùng hàm includes 
// let arrNumber = [1, 2, 3, 4, 5];
// let numberInput = +prompt("Hay nhap so bat ky");
// console.log(arrNumber.includes(numberInput));


// Bài tập 5: Đảo ngược giá trị trong mảng
// Input: [1, 2, 3, 4, 5]
// Ouput: [5, 4, 3, 2, 1]
// let arrNumber = [1, 2, 3, 4, 5];
// console.log(arrNumber.reverse());


// Bài tập 6: Lọc các phần tử chẵn trong mảng:
// Input: [1, 2, 3, 4, 5]
// Ouput: [2, 4]
// let arrNumber = [1, 2, 3, 4, 5];
// let evenNumber = [];
// for (let i=0; i<arrNumber.length; i++){
//     if ((arrNumber[i]%2) == 0) {
//         evenNumber.unshift(arrNumber[i]);
//     }
// }
// console.log(evenNumber.reverse());


// Bài tập 7: Tìm số lần xuất hiện của một phần tử trong mảng
// + Cho mảng ban đầu và cho người dùng nhập 1 giá trị bất kỳ. Nếu có giá trị trong mảng thì sẽ báo số lần phần tử xuất hiện trong mảng
// Input: [1, 2, 3, 2, 4, 2, 5] => người dùng nhập 2
// Output: 3
// let arrNumber = [1, 2, 3, 2, 4, 2, 5];
// let numberInput = +prompt("Hay nhap so bat ky");
// let count = 0;
// let check = false;
// for (let i = 0; i<arrNumber.length; i++){
//     if(numberInput == arrNumber[i]){
//         check = true;
//         count = count + 1;
//     }
// }
// if (check){
//     console.log(`So lan xuat hien cua ${numberInput} = ${count}`);
// }
// else{
//     console.log("Gia tri da nhap khong co trong mang");
// }

// Bài tập 8: Sắp xếp lại mảng theo giá trị tăng dần
// Input: [4, 2, 9, 5, 1]
// Output: [1, 2, 4, 5, 9]

// let arrNumber = [4, 2, 9, 5, 1];
// console.log(arrNumber.sort());

// function selectionSort
let arr = [4, 4, 9, 5, 1];
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        // Swap
        ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
      }
    }
    return arr
  }
  console.log(selectionSort(arr)); 



