

var ary1 = ['Sato','Takae','Osada','Hio','Saitoh','Sato'];
var ary2 = ['Yabuki','Aoki','Moriyama','Yamada'];

console.log(ary1.length);
console.log(Array.isArray(ary1));
console.log(ary1.toString());
console.log(ary1.indexOf('Sato'));
console.log(ary1.lastIndexOf('Sato'));

console.log(ary1.concat(ary2));

//　各elementを引数で指定された文字でつなぐ。
console.log(ary1.join('／'));
// slice(index)
// index+1番目からend番目elementを抽出
console.log(ary1.slice(1));
// slice(index,end)
// index+1番目のelementからend番目まで抽出
console.log(ary1.slice(1,2));

//splice(index,end,replace...) ※ 戻りは置換対象文字列(配列の内容は書き換えられる)
console.log(ary1.splice(1,2,'Kakeya','Yamaguchi'));
console.log(ary1);

console.log(Array.of(20,40,60));

// 4・5番目の要素を2~3番目の位置へコピー　 copyWithin(target,start,end)
console.log(ary1.copyWithin(1,3,5));

console.log(ary1);

// ary2 = ['Yabuki','Aoki','Moriyama','Yamada']
// fill(val,start,end) -> start+1番目～end番目の要素をvalで置換
//　※　endはend"番目"。つまり、配列上のindexはend-1(ex. end=3 -> index 2)
console.log(ary2.fill('Suzuki',1,3));
console.log(ary2);

// 配列から最終要素を削除(破壊的メソッド)
console.log(ary1.pop());

// 削除後の配列
console.log(ary1);

// 要素追加 -> 戻り値は追加された後の要素数
console.log(ary1.push('Kondo'));

// 追加後の配列
console.log(ary1);

// 先頭要素の削除
console.log(ary1.shift());

// 削除後の配列
console.log(ary1);

// 先頭に追加 -> 戻り値は追加された後の要素数
console.log(ary1.unshift('Ozawa','Kuge'));

// 追加後の配列
console.log(ary1);

// 順序を反転
console.log(ary1.reverse());

// 順序を入れ替え
console.log(ary1.sort());