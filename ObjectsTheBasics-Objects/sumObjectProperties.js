// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above. If salaries is empty, then the result must be 0.

//* My solution:
function sumAllSalaries() {
	let salaries = {
		John: 100,
		Ann: 160,
		Pete: 130,
	};
	let sum = 0;
	for (key in salaries) {
		sum += salaries[key];
	}
	return sum; // 390
}

// Test
console.log(sumAllSalaries());
