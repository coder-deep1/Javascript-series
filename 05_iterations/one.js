// for Loop

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//     console.log(element);
//     if (element === 6) {
//         console.log("5 is best Number")
//     }
// }

for (let i = 15; i < 34; i++) {
  const element = i;
  // console.log(element);
  if (element <= 20) {
    // console.log(`22 is the best number `);
  }
}

for (let i = 0; i <= 100; i++) {
  const element = i;
  // console.log( `${i} I Miss You  `);
}

let myArray = ["Hitesh", "Harry", "Love Babbr"];


for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}
/* 
for (let i = 1; i <= 20; i++) {
  const element = i;
  if (i ==13) {
    console.log(`value of i Detected 13 `);
    break
  }
  console.log(`value of i is ${i}`);
  
} */
for (let i = 1; i <= 20; i++) {
  const element = i;
  if (i ==13) {
    console.log(`value of i Detected 13 `);
    continue
  }
  console.log(`value of i is ${i}`);
  
}