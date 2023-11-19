// Foreach loop

const coding = ["Js", "Jsx", "Ruby", "Py", "cpp"];

coding.forEach(function (value) {
    console.log(value);
})

coding.forEach((items) => {
    console.log(items);
});

coding.map((items) => {
    console.log(items);
})

function printMe(items) {
    console.log(items);
}
coding.forEach(printMe)

coding.forEach((items, index, arr) => {
        console.log(items,index,arr);
});

const myCodings = [
  {
    languageName: "Javascript",
    languageFileName: "Js"
  },
  {
    languageName: "python",
    languageFileName: "py"
  },
  {
    languageName: "C++",
    languageFileName: "cpp"
  },
  {
    languageName: "Ruby",
    languageFileName: "Ry"
  }
];
myCodings.forEach((item) => {
    console.log(item.languageName);
});
