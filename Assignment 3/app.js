let cars = [];

let car1 = {
    make: "vw",
    model: "camry",
    year: 2018
}
cars.push(car1);

/*
cars.push(car1.make);
cars.push(car1.model);
cars.push(car1.year);
*/
let car2 = {
    make: "toyota",
    model: "camry",
    year: 2018
}

cars.push(car2);
/*cars.push(car2.make);
cars.push(car2.model);
cars.push(car2.year);
*/


let car3 = {
    make: "toyota",
    model: "camry",
    year: 2018
}

cars.push(car3);

/*
cars.push(car3.make);
cars.push(car3.model);
cars.push(car3.year);
*/
console.log("Original Array:")
console.log(cars);

cars.splice(0,1);
console.log("after removing car1")
console.log(cars);




let car4 ={
    make:"Honda",
    model:"Civic",
    year:2020
}
cars.push(car4);


console.log(cars)
cars[1].model ="Accord";
console.log(cars);






