// Reverse a String: Write a function that takes a string as input and returns the string reversed.
A = "hello world"
console.log(A)
B = A.split("")
console.log(B)
rev = B.reverse()
console.log(rev)
revjn = rev.join("")
console.log(revjn)
// console.log(typeof(revjn))


// Factorial Calculation: Write a function that calculates the factorial of a number.
A = 4
fact = 1;
 for (i=A;i>0;i--){
    fact *= i;
    console.log(fact)
 }
 console.log(fact,"this is the factorial of",A)


 // Check for Palindrome: Write a function to check whether a given string is a palindrome.
A = "dev"
B = A.split("")
rev = B.reverse()
revjn = rev.join("")
if (A == revjn){
    console.log("it is a palindrome")
}else{
    console.log("it is not a palindrome")
}