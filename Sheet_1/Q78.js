//Sort First half in Ascending and Second half in descending order in an array
let arr = [5, 2, 8, 7, 1, 3];
let n = arr.length;

// split
let first = arr.slice(0, n/2);
let second = arr.slice(n/2);

// sort
first.sort((a,b)=>a-b);
second.sort((a,b)=>b-a);

// merge
let result = [...first, ...second];

console.log(result);
