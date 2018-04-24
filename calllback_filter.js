var data = [4,9,16,25];


var result = data.filter((value,index,array) => {
    return value % 2 === 1;
});

// filterは条件に合致する要素を配列に書き戻す
console.log(result);