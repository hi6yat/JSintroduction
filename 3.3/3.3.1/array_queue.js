var data = [];
data.push(1);
data.push(2);
data.push(3);

console.log(data.shift());
console.log(data.shift());
console.log(data.shift());

// 空のqueueに対してshift()すると"undefined"
console.log(data.shift());