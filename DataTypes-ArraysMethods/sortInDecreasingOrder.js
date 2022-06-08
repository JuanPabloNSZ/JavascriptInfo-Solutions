// Order an Array in decreasing order

// My solution:
function superSort(arr) {
	return arr.sort((a, b) => b - a);
}

//* Test
// superSort([5, 2, 1, -10, 8])
//* Output
// [ 8, 5, 2, 1, -10 ]
