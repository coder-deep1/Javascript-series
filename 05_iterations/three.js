// for of loops

const arr = [2, 4, 5, 6, 6];
for (const value of arr) {
  // console.log(value);
}

const greetings = "Welcome ! Have a nice day";
for (const greet of greetings) {
  // console.log(`Each Characters ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "Rupees");
map.set("US", "Dollar");
map.set("USA", "United states of America");

// console.log(map);
for (const [key, value] of map) {
//   console.log(key, ":- ", value);
}



const myObj = {
    'Game1': "Nfs",
    "Game2":"Ps5"
};
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }