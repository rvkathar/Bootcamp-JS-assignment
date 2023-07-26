let Fruits = [];
Fruits.push('apple', 'banana', 'orange')
console.log("Result after adding fruits:")
console.log(Fruits);

Fruits.splice(0,1);
console.log("Result after removing first fruit:")
console.log(Fruits);

Fruits.push('grape');
console.log("Result after adding grape at end:")
console.log(Fruits);

Fruits.splice(1,1, 'pear');
console.log("Final OUTPUT:" )
console.log(Fruits)