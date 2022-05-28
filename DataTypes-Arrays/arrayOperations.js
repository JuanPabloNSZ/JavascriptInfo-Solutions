// Let’s try 5 array operations:

//1. Create an array styles with items “Jazz” and “Blues”.
let styles = ['Jazz', 'Blues'];
// 2. Append “Rock-n-Roll” to the end.
styles.push('Rock-n-Roll');
// 3. Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
styles.length % 2 !== 0
	? (styles[Math.floor(styles.length / 2)] = 'Thrash')
	: false;
// 4. Strip off the first value of the array and show it.
console.log(styles.shift());
// 5. Prepend Rap and Reggae to the array.
styles.unshift('Rap, Reggae');
