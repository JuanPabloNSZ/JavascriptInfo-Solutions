/* Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1 */

//* My solution:
function min(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

// Using question mark operator
function min(a, b) {
	return a < b ? a : b;
}
