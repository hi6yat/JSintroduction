var data =['Sato','Takae','Osada','Hio','Saitoh'];

console.log(data.splice(3,2,'Yamada','Suzuki'));
//3 はindex 2はcnt。indexが3から初めて2番目の要素までをReplace。
console.log(data);

//置換要素を指定しなかった場合は削除する。=>　指定箇所から複数要素を削除できるのが、shift(queue)/pop(stack)とは異なる。
console.log(data.splice(3,2));

console.log(data);

//置換する要素数を0にした場合、indexで指定した位置に要素を挿入
console.log(data.splice(1,0,'Tanaka'));

console.log(data);
