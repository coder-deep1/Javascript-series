const user = {
    username: 'deep',
    price: 499,
    welcomeMessage: function () {
        console.log(`${this.username} Welcome to your Website `)
        console.log(this);
    }
}

// console.log(user.welcomeMessage());
// user.username = "harry";
// console.log(user.welcomeMessage());

// console.log(this)

// function chai () {
//     let username = "Hari"
//    console.log(this.username)
// }

// chai();


const chai = () => {
    let username = " harry"
    console.log(this)
    
};
// chai()

// const addnum = (num1 , num3 ) => {
//     return num1+num3
// };

// const addNumTwo = (num1, num3) => num1 + num3;


const addTwo = (num1, num2) => ({username: "deep"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()