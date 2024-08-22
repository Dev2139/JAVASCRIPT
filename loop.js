// for(var i=1;i<=5;i++){
//     let string = ""
//     for(var j=1;j<=5;j++){
//         string+="*"
//         console.log(string)
//     }
// }
    
//     P = "*****"
//     plst = P.split("")
//     console.log(plst.join(""))
//     less = ""
//     for (i=5;i>=1;i--){
//         red = plst.pop()
//         less = plst.join("")
//         console.log(less)
//     }
 


// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = n; j > i; j--) {
//     str += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     str += "* ";
//   }
//   console.log(str);
// }
// for (let i = n - 1; i >= 1; i--) {
//   let str = "";
//   for (let j = n; j > i; j--) {
//     str += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     str += "* ";
//   }
//   console.log(str);
// }




// P = ""
// for (i=1;i<=5;i++){
//     P += i
//     console.log(P)
// }


// for (i=1;i<=5;i++){
//     P = ""
//     for(j=1;j<=5;j++){
//         P += j,i
//         console.log(P)
//     }
// }


// let shape = '';
// for (let i = 0; i < 8; i++) {
//   if (i === 0 || i === 4) {
//     shape += '# # # # #\n';
//   } else  {
//     shape += '#       #\n';
//     } 
// }
// console.log(shape);



// for (let i = 1; i <= 5; i++) {
//   let row = '';
//   for (let j = 1; j <= 5 - i; j++) {
//     row += ' ';
//   }
//   for (let k = i; k >=1; k--) {

//     row = row + "*"
//   }
  
//   console.log(row);
// }


// alpha = "ABCD"
// A = alpha.split("")
// P = console.log(String.fromCharCode(65))
// for (i=0;i<4;i++){
//   P += console.log(String.fromCharCode(65+i));
//   console.log(P)

  
// }




// string = 
// A = console.log(String.fromCharCode(65))
// Z = console.log(String.fromCharCode(90))
// pattern = 
// for (i=1;i<=pattern;i++)


    function findLargest(arr) {
        return Math.max(...arr);
      }
      console.log(findLargest([1, 5, 3, 9, 2]));