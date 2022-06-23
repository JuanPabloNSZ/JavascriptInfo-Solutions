/* Examine the following code:

const birthday = '18.04.1982';
const age = someCode(birthday);

Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).

Would it be right to use upper case for birthday? For age? Or even for both?
*/

// * My Solution:
// * Only 'const BIRTHDAY' should be uppercase, because we know it's value prior to execution.
