var data = [4,9,16,25];

//　3で除算して余りが0となる要素があれば trueが返る
var result = data.some((value,index,array) => {
    return value % 3 === 0;
});

result ? console.log("3の倍数が見つかった") : console.log("3の倍数が見つからない");