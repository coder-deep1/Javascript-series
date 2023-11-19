// if

// const userLoggedIn = true;
// const temperature = 38;

// if (temperature === 40) {
//     console.log("less than 50");
// }
// else {
//     console.log("temperature is grater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 300;
// if (score > 200) {
//     let power = "fly"
//     console.log(`user power is :${power}`);
// }

const balance = 1000;

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 700) {
//   console.log("less than 700");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = false;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && loggedInFromEmail  ) {
  console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail || loggedInFromGoogle) {
  console.log("User logged in");
}
