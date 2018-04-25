var m = new Map();

m.set('1','hoge');

// Mapでのキーの比較は===で行われることの確認
// keyは一致しているように見えるがデータ型が不一致なので結果はundefined
console.log(m.get(1));

// データ型が一致すると、valueが取得できる
console.log(m.get('1'));