var m = new Map();

m.set(NaN,'noge');

// NaNは自分自身とも等しくない特別な値。
// 但し、Mapの場合は例外的にNaN===NaNと見做される。
console.log(m.get(NaN));