// var a=10
// let a = 400
//  if (true) {
//      let a = 30
//      let b = 40
//      console.log("INNER" ,a);
// }

// console.log(a);

function one() {
    const username = "Deepansh";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();

if (true) {
    const username = "Deepansh";
    if (username === "Deepansh") {
        const website = " github";
        // console.log(username + website);
    }

    //   console.log(website);
}
// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

// console.log(addone(5));

function addone(num) {
    return num + 1;
}

console.log(addTwo(5))
const addTwo = function (num) {
    return num + 2;
};
