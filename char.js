//

// ✨ Imports
import fs from "fs";
import path from "path";
import axios from "axios";
import { log } from "console";

// ✅ Variables
const name = "Faisal";
let age = 21;
var isAwesome = true;

// ✅ Function with Promise + async/await
 const hello = async  fetchData(url) => {
	try {
		const res = await axios.get(url);
		console.log("Data:", res.data);
		return res.data;
	} catch (error) {
		console.error("Error:", error);
		throw new Error("Fetching failed");
	}
} 
const hel = 23;



const hellosd =  async  (hsdl) => {
  console.log('hello');
  
}

// ✅ Arrow Function
const greet = (user = "Guest") => {
	console.log(`Hello, ${user}!`);
};

// ✅ Object with methods
const user = {
	name,
	age,
	greet() {
		console.log(`Welcome ${this.name}, age: ${this.age}`);
	},
};

// ✅ Array & Loops
const nums = [1, 2, 3, 4];
for (const num of nums) {
	if (num % 2 === 0) {
		console.log(`Even: ${num}`);
	} else {
		console.log(`Odd: ${num}`);
	}
}

// ✅ Class
class Developer {
	constructor(name) {
		this.name = name;
	}

	code() {
		return `${this.name} is coding...`;
	}
}

// ✅ Export Example
export default Developer;
export { fetchData, greet };

// ✅ Commenting Practice
// TODO: Make theme check tool
// FIXME: Improve try-catch block
// NOTE: Works only in dark themes
