// console.log("test")

// var new_object = {key:"value"}
// console.log(new_object)

// var new_array = [1,2,3]
// console.log(new_array)


// function for_loop(){
//     for(i=0;i<=10;i++){
//         console.log(i)
//     }
// }
// for_loop()




let number = 2139;
let sum = 0;
while (number > 0) {
  let rem = number % 10;
  sum = sum + rem;
  number = Math.floor((number / 10));
}
console.log("The sum of digits of the number is", sum);