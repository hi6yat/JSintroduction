var ary = [5,25,10];

// 何もしないと文字列としてSORTする
console.log(ary.sort());

// 数値してSORT => 要素の差をとるのが一般的
console.log(ary.sort((x,y) => {
    return x - y;
}));
