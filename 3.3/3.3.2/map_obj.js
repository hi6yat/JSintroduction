var m = new Map();
m.set({},'hoge');

// オブジェクトのような参照型を比較した場合、参照での比較になる。
// →　同じ空のオブジェクトであっても生成された場所が異なる場合は別のオブジェクトと見做される。
console.log(m.get({}));　// undefined