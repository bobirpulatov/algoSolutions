/**
 * Q: What's the Nth fibonacci number
 * 
 * Fib(n) = Fib(n-1) + Fib(n-2), Fib > 2 
*/


/**
 * Find Nth fibonacci number
 * @param {number} nth
 * @returns {number} - what's the nth number in fib collection
*/

const fib = (n) => n < 2 ? n : fib(n-1) + fib(n-2);

console.log(fib(9));