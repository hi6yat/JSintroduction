let m = new Map();

m.set('dog','ワンワン');
m.set('cat','ニャー');
m.set('mouse','チュー');

console.log(m.size);
console.log(m.get('dog'));
console.log(m.has('cat'));

// keyを順に取得
for (let key of m.keys()) {
    console.log(key);
    
}

// valueを順に取得
for (let value of m.values()) {
    console.log(value);
}

// key/valueを取得
for (let [key,value] of m) {
    console.log(value);
    
}

// key('dog')を削除
m.delete('dog');
console.log(m.size);

// key/value全て削除
m.clear();
console.log(m.size);