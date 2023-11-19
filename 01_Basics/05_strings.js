const name = "coder_deep.in";
const repoCount = 10;
// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("coder_deep");

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));

console.log(gameName.indexOf("p"));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-9, 6);
console.log(anotherString);

const newStringOne = "   coder    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.coder%20deep.in";
console.log(url.replace("%20", "_"));

console.log(url.includes("developer"));

console.log(gameName.split("_"));
