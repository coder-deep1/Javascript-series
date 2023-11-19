/* Dates */

let date = new Date();
// console.log(date);

// console.log(date.toJSON());
// console.log(date.toLocaleString());
// console.log(date.toDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toTimeString());
// console.log(typeof date);

// let myCreateDate = new Date(2023,8,1);
// let myCreateDate = new Date(2023,8,1,10,30);
// let myCreateDate = new Date("2023-1-14");
let myCreateDate = new Date("09-01-2023");
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getTime());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString({
  weekday: "long"
});
