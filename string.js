A = prompt("enter any 3 digit number:")
lenA = A.length
B = A.slice()
console.log(B) 
C = B[0]**lenA + B[1]**lenA //+ B[2]**lenA;
console.log(C)
if (C == A){
    console.log("it is a ARMSTRONG NUMBER")
}else{
     console.log("no it is not a ARMSTRONG NUMBER")
}
// the demerit of this code is that it can only takes the 3 digit number but we can modify it and can perform any kind of number



A = prompt("enter any number:")
a = A.toString()
lenA = a.length;
char_of_A = a.split("")
let sum = 0;
for (let i of char_of_A ) {
    sum += (i) ** lenA; 
    console.log(i ** lenA)
}
console.log("Sum:", sum);
if (sum == A){
    console.log("YES, it is an ARMSTRONG NUMBER")
}else{
    console.log("NO, it is not an ARMSTRONG NUMBER")
}






function isArmstrong(num) {
    const string = num.toString();
    const array = string.split('');
    const power = array.length;
    const sum = array.reduce((a,b) => a + Math.pow(b, power), 0);
    return sum === num;
  }
  
// testing the function
  console.log(isArmstrong(371));
