/*  Arrays */

const myArray = [4, 1, 2, 3, 9, 5, 6];
// console.log(myArray);

// console.log(myArray[0]);

const myArray2 = ["apple", "orange", "mango"];

// console.log(myArray2);

/* Array Methods  */

myArray.push(9);
// console.log(myArray);

myArray.pop();
// console.log(myArray);

// myArray.unshift(7);
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

// console.log(myArray.indexOf(4));
// console.log(myArray.indexOf(9));

const NewArray = myArray.join();
// console.log(myArray);

// console.log(typeof NewArray);

/* slice  aur splice */

console.log("A   ", myArray);

const myN1 = myArray.slice(2, 6);
console.log(myN1);

console.log("B", myArray);

const myN2 = myArray.splice(2, 5)
console.log("c", myArray);
console.log(myN2);






