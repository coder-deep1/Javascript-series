const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros = [...dc_heros, ...marvel_heros];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("coder_deep"));
console.log(Array.from("coder_deep"));
console.log(Array.from({ name: "coder_deep" })); //interesting

let score1 = 499;
let score2 = 599;
let score3 = 699;


console.log(Array.of(score1,score2,score3));