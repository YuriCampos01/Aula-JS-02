// Ex 01

let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length );
// Irá mostrar 4

// Ex 02

let styles = ["Jazz", "Blue"];
styles.push("Rock-n-Roll");
styles[Math.floor((style.length - 1) / 2)] = "Classic";
alert( styles.shift());
styles.unshift("Rap", "Reggae");

// Ex 03

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2]();