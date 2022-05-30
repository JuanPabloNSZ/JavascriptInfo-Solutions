/* We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy. */

// My Solution:
function superSort(arr) {
	const newArr = arr.slice().sort();
	return newArr;
}

//* Test
let arr = ['HTML', 'JavaScript', 'CSS'];
superSort(arr); // [ 'CSS', 'HTML', 'JavaScript' ]
console.log(arr); // [ 'HTML', 'JavaScript', 'CSS' ]
