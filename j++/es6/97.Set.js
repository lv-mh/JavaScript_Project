 const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
} 

const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log([...items]) 
console.log("items.size="+items.size)  // 5

const str = new Set("abbbc");
console.log([str].join(''))

