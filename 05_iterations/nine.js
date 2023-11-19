const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce((acc, currval) => {
//     console.log(`acc ${acc} currval${currval}`);
// 	return acc + currval;
// }, 0);

// const myTotal = myNums.reduce((acc, currval) => {
// console.log(`acc ${acc} currval${currval}`);
// return acc + currval;
// }, 5);
// console.log(myTotal);

const shoppingCart = [
	{
		itemName: "js course",
		price: 2999
	},
	{
		itemName: "py course",
		price: 999
	},
	{
		itemName: "mobile dev course",
		price: 5999
	},
	{
		itemName: "data science course",
		price: 12999
	}
];

const myTotal = shoppingCart.reduce((acc, item) => {
	return acc + item.price;
}, 0);
console.log(myTotal);
