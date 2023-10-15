// 1: Hàm là gì?
// 2: Cách khai báo hàm:

// function nameFunction(){
//     // statements
// }

// function sum(a,b){ //a,b la tham so
//     console.log(a);
// }
// sum(10,20); // argument


// Cac cach dinh nghia ham:
// Cach 1: Function expression - Bieu thuc ham
// let upCount = function () {
//     console.log("abc");
// }
// upCount();

// Cach 2: IIFE: it dung

// Cach 3: Arrow function

// let downCount = () => {
//     console.log("Hello world");
// };

// downCount();

// 3. Rest Parameters
function sum (){
    let result = 0;
    for (let i = 0; i<arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(sum(1,2,3,4,5));


//Closures

// function

//Bai 1: Cho nguoi dung nhap vao so tuoi:
// + Neu tuoi > 18 : alert ok 
// + tuoi < 18 

// let numberInput = +prompt("hay nhap so tuoi");
// function yearsOld (num){
//   if (num > 18){
//     alert("OK");  
//   }
//   else {
//     alert("Stop");
//   }
// }

// yearsOld(numberInput);

// let numberInput = +prompt("hay nhap so tuoi");
// let yearsOld = (num) =>{
//   if (num > 18){
//     alert("OK");  
//   }
//   else {
//     alert("Stop");
//   }
// }

// yearsOld(numberInput);

// Bai 2: C = (F - 32)/1.8

// let doF = +prompt("hay nhap so do F");
// function transfer (){
//   let C = (doF - 32)/1.8;
//   return C;
// }

// console.log(transfer());


// let doF = prompt("Nhập độ F");
// let doC = () => {
//   let tinhToan = (doF - 32) / 1.8;
//   return tinhToan;
// };

// console.log(doC());



// Bai 3: Tinh giai thua cua 5
// debugger
// let numberInput = +prompt("Hay nhap 1 so");
// let result = 1;
// function giaiThua(a){
    
//     for (let i = 1; i<=a; i++){
//         result = result*i;
       
//     }
//     console.log(result);
// }

// giaiThua(numberInput);

// let numberInput = +prompt("Hay nhap 1 so");
// let result = 1;
// let giaiThua = ()=>{
//    for (let i=1 ; i<=numberInput ; i++){
//         result *=i;
//    }
//    return result;
// }
// console.log(giaiThua());

// Bai 4: Kiem tra so nguyen to
// debugger
// let numberInput = +prompt("Hay nhap 1 so");
// function nguyenTo(a){
//    if (a == 1){
//        console.log(`${a} la so nguyen to`);
//    }
//   else if (a%!a == 0){
//     console.log(`So ${a} khong phai so nguyen to`)
//  } else {
//     console.log(`So ${a} la so nguyen to`);}
// }

// nguyenTo(numberInput);


// let numberInput = +prompt("Hay nhap 1 so");
// function nguyenTo(a){
// if (a == 1 || a == 2){
//        console.log(`${a} la so nguyen to`);
//    }  
// else {  
// for (let i = 2 ; i<a ; i++){
//      if (a%i == 0){
//       console.log(`${a} khong phai so nguyen to`);
//       break;
//      }
//      else {
//       console.log(`${a} la so nguyen to`);
//       break;
//      }
// }
// }
// }

// nguyenTo(numberInput);




