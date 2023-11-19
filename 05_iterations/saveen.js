let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num) => {return num * 10});

const newNums = myNums
	.map((num) => {
		return num * 2;
	})
	.map((num) => {
		return num + 10;
	})
	.filter((num) => {
		return num <= 20;
	});
console.log(newNums);
