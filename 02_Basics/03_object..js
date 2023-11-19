// singletons
// object.create => This is singleton object

//  object.iterator

const mySym = Symbol("key5");

const JsUser = {
  name: "Deepansh",
  "full name": "Deepansh Gangwar",
  [mySym]: "mykey5",
  age: 18,
  location: "Delhi",
  email: "deepansh@gangwar.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
};
// console.log(jsUser.name());
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(JsUser["full name"]);
// console.log(JsUser["isLoggedIn"]);

JsUser.email = "coder@deep.com";
// Object.freeze(JsUser);

// JsUser.email = "deep@gmail.com";

// console.log(JsUser["email"]);
// console.log(JsUser)

JsUser.greetingOne = function () {
  console.log("Hello Js User");
};
JsUser.greetingTwo = function () {
  console.log(`Hello Js User, ${this.name}`);
};

console.log(JsUser.greetingOne());
console.log(JsUser.greetingTwo());
