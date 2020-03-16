// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
arrays.reduce((acc, cv) => acc.concat(cv), []);
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.
function loop(n, test, update, action) {
  for (let i = n; test(i); i = update(i)) {
    action(i);
  }
}
loop(
  3,
  n => n > 0,
  n => n - 1,
  console.log
);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  // Your code here.
  return array.every(test);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
