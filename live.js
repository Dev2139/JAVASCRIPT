// console.log("HELLO  COMPUTER")
// console.log("DEV PATEL")
// console.log("DWARKSDHAM SOCIETY")
// console.log("CHHOTA UDEPUR")

// const pi = 3.14;
// let radius = 2
// area_of_circle = (pi*radius*radius)
// console.log("area of the circle is" + area_of_circle)

// num1 = 12
// num2 = 12
// o = '+'
// if (o = '+'){
//     console.log(num1 + num2)
// }else if (o = '-'){
//     console.log(num1 - num2)
// }else if (o = '*'){
//     console.log(num1 * num2)
// }else if (o = '/'){
//     console.log(num1 / num2)
// }else{
//     console.log("please input valid operator")
// }



// var1 = 20
// var2 = 40

// function swapNumber1(){
//     console.log(var1 = var2)
// }
// function swapNumber2(){
//     console.log(var2 = var1)
// }
// swapNumber1()
// swapNumber2()



// a = 24
// b = 23

// if (a>b){
//     console.log("a is greater")
// }else{
//     console.log("b is greater")
// }




// a = 24
// b = 23

// if (a<b){
//     console.log("a is smaller")
// }else{
//     console.log("b is smaller")
// }




// a =14
// b =13
// c =12

// if (a>b && a>c){
//     console.log("a is greater")
// }else if (b>a && b>c){
//     console.log("b is greater")
// }else if(c>a &&c>b){
//     console.log("c is greater")
// }



// a =14
// b =13
// c =12

// if (a<b && a<c){
//     console.log("a is smalller")
// }else if (b<a && b<c){
//     console.log("b is smaller")
// }else if(c<a &&c<b){
//     console.log("c is smaller")
// }
// A = 10

// for (i=1;i<=10;i=i+1){
//     console.log(A ,"*", i, "=", A*i)
// }




// sum = 0;
// for(i=45;i<=65;i=i+1){
//     console.log(i)
//     sum += i
// }
// console.log(sum)

// month = ["jan","feb","march","apr","may","jun", "jul"]
//  m = month.indexOf("feb")
 
//  if (m = 0){
//      console.log("jan")
//  }else if (m = 1){
//      console.log("feb")
//  }else if (m = 2){
//      console.log("march")
//  }else if (m = 3){
//      console.log("apr")
//  }else if (m = 4){
//      console.log("jun")
//  }else if (m = 5){
//      console.log("jul")
//  }


// A = [1,2,3,                 
// 4,5,6,
// 7,8,9]
// console.log(A)






// a = ["dev","patel","hardik"]
// A = a.toString()
// lenA = a.length;
// console.log("the length of the string is",lenA)



// var a = ("dev","patel","hardik")
// var b =

// function copystr(){
//     b = a
//     console.log("b=", b)
// }
// copystr()


// a = ("dev")
// b = ("patel")

// console.log(a +" "+ b)




// console.log("**********")





// a = 12
// b =12


// function addition(){
//     console.log(a + b)
    
// }
// addition()


// console.log("DEV PATEL")
// function multiPly(p1,p2){
//     console.log(p1*p2)
// }
// value = console.log(multiPly(2,3))
// console.log(value)



// let my_name = "DEV PATEL"
// let age = 17
// console.log("My name is "+" "+my_name+" "+"and my age is"+" "+age)
// console.log("My name is",my_name,"and my age is",age)
// console.log(`My name is${my_name}and my age is${age}`)



// DESTRUCTURING
// let new_array = [1,2,3,4]
// let [one,two,three] = [1,2,3]
// console.log(three)

// let new_object = {name:"DEV",surname:"PATEL",age:17} 
// let{age,name,surname,} = {name:"DEV",surname:"PATEL",age:17} 
// console.log(name)
// console.log(surname)
// console.log(age)
// console.log("my name is DEV PATEL and my age is 17 ")



// const names = ["dev","dax","hardik","mahir"]
// const [firstname, , lastsecondname,lastname] = names;
// console.log(lastsecondname)


// const uniqueset = new Set()
// console.log(uniqueset.add(1))
// console.log(uniqueset.add(2))
// console.log(uniqueset.add{name:"dev"})
// console.log(uniqueset.add(function my_name(){}))
// console.log(uniqueset.add(1))
// console.log(uniqueset.add("dev"))
// console.log(uniqueset.add{name:"dev"})
// console.log(uniqueset.add(function my_name(){}))
// console.log(uniqueset.add(true))
// console.log(uniqueset.add(false))
// console.log(uniqueset.add(true))






// **Create a Simple Object**
// - Task: Create an object representing a person with properties `name`, `age`, and `city`.
// - Test:
//   ```javascript
//   const person = createPerson("John", 25, "New York");
//   console.log(person);
//   ```
// - Expected Output: `{ name: 'John', age: 25, city: 'New York' }`
// const person = {name:"DEV",age:17,city:"CHHOTA UDEPUR"}
// console.log(person)


// **Access Object Properties**
//    - Task: Write a function that returns the value of a given property from an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(getProperty(obj, 'name'));
//      ```
//    - Expected Output: `'Alice'`
// const person = {name:"DEV",age:17,city:"CHHOTA UDEPUR"}
// console.log(person.name)


// 3. **Add a New Property to an Object**
//    - Task: Write a function that adds a new property to an object.
//    - Test:
//      ```javascript
//      const car = { brand: 'Toyota', model: 'Corolla' };
//      addProperty(car, 'year', 2020);
//      console.log(car);
//      ```
//    - Expected Output: `{ brand: 'Toyota', model: 'Corolla', year: 2020 }`
// const car = { brand: 'Toyota', model: 'Corolla' }
// car.year = 2020
// console.log(car)


// . **Delete a Property from an Object**
//    - Task: Write a function that deletes a property from an object.
//    - Test:
//      ```javascript
//      const user = { username: 'john_doe', password: '12345' };
//      deleteProperty(user, 'password');
//      console.log(user);
//      ```
//    - Expected Output: `{ username: 'john_doe' }`
// const user = { username: 'john_doe', password: '12345' }
// delete user.password;
// console.log(user)







// **Check if an Object has a Property**
//    - Task: Write a function that checks if an object has a specific property.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(hasProperty(obj, 'age'));
//      ```
//    - Expected Output: `true`
// const obj = { name: 'Alice', age: 30 }
// console.log(obj["name"])




// **Merge Two Objects**
// - Task: Write a function that merges two objects into one.
// - Test:
//   ```javascript
//   const obj1 = { a: 1, b: 2 };
//   const obj2 = { b: 3, c: 4 };
//   console.log(mergeObjects(obj1, obj2));
//   ```
// - Expected Output: `{ a: 1, b: 3, c: 4 }`
// const user = { username: 'john_doe', password: '12345' }
// const obj = { name: 'Alice', age: 30 }
// console.log(user.Merge(obj))







