function guestNAme() {
  console.log(" c");
  console.log(" o");
  console.log(" d");
  console.log(" e");
  console.log(" r");
}

// guestNAme()

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
  //   return number1 + number2;
}
const result = addTwoNumbers(4, 6);
// console.log("Result", result);

function loginUserMessage(username = "coder_deep") {
  if (!username) {
    console.log("Please Enter a username");
    return;
  }
  return `Welcome Admin to ${username} `;
}
// console.log(loginUserMessage());
// console.log(loginUserMessage("Deepansh"));

function totalCardPrice(val1, val2, ...num3) {
  return num3;
}
console.log(totalCardPrice(300, 599, 399));

const user = {
  username: "admin",
  price: 299
};
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handleObject(user);

// handleObject({
//     username: 'admin',
//     price:299
// })

const oldArray = [300, 400, 600, 689];
function returnSecondValue(getArray) {
  return getArray[3];
}
// console.log(returnSecondValue(oldArray));
  
