let prompt_name = prompt("Enter your name:");
const prompt_age = prompt("Enter your age:");
alert("Hello, " + prompt_name + "! You are " + prompt_age + " years old.");

const arrow_func = (my_name) => { console.log(`Hello, ${my_name}! Welcome back.`) };
console.log(arrow_func("ZAEEM"));

const obj_zaeem = {name: "ZAEEM", age: 18, city: "ISLAMABAD"};
console.log(obj_zaeem);

const { name, age } = obj_zaeem;
console.log(name);
console.log(age);

const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((acc, n) => acc + n, 0);

console.log(doubled); 
console.log(evens);   
console.log(sum);

const obj={
    name: "ZAEEM",
    age: 18,
    city: "ISLAMABAD"
}

let arr=[...Object.values(obj), "IT", "2025"];
console.log(arr);

