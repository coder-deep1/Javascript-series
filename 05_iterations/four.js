const myObj = {
	Js: "Javascript",
	cpp: "C++",
	Jsx: "React Js",
	Py: "Python",
	Rb: "Ruby"
};
for (const key in myObj) {
	// console.log(`${myObj[key]} File Extension is  ${key} `);
}

const programming = ["React Js", "Javascript", "cpp", "ruby", "Python"];
for (const key in programming) {
	console.log(programming[key]);
}
