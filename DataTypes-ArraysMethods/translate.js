/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition'; */

function camelize(str) {
	// newString is a variable that takes the string str
	let newString = str
		// split every word from the original string into an array
		.split('-')
		// transform the first character from every word to upper case, and concatenate with the rest of the word
		.map((item) => {
			return item.charAt(0).toUpperCase() + item.substring(1);
		})
		// join the array into a new string
		.join('');
	// transform the first character and concatenate with the rest of the string
	return newString.charAt(0).toLowerCase() + newString.substring(1);
}

//* I need to refactor the code so the following case can work:
// camelize("-webkit-transition") == 'WebkitTransition'
