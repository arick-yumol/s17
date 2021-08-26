// Array
// JavaScript arrays are used to store multiple related values in a single variable.  An array can hold many values under a single name, and you can access the values by referring to an index number. It is similar to a list of items.

// let movies = ["Godfather", "Mission Impossible", "Avengers", "Venom", "The Nun"];

// console.log(movies[0]); //Godfather
// console.log(movies[1]); //Mission Impossible
// console.log(movies[2]); //Avengers

// movies[1] = "Halloween";
// console.log(movies[1]); //Halloween
// console.log(movies.length); //length is 5

//We can initialize an empty array in two ways:

// let colors = [];
// let colors = new Array(); //uncommon

// //Arrays can hold any type of data

// let collection = [49, true, "Hermione", null];

//Arrays have a length property

// let nums = [45,37,89,24];
// console.log(nums.length); //4

// Array Methods
//list of thing than an array can do (e.g. .length, .push, .pop)
// .length() = measures the number of characters
// .push() - add to the last of an array
// .pop() - removes the last from an array
// .unshift() - adds to the front of an array
// .shift() - removes the first from an array

// let colors = ["red", "orange", "yellow"];

// console.log(colors) //Output is: ["red", "orange", "yellow"]

// colors.push("green");add green from the last
// console.log(colors); //Output is: ["red", "orange", "green"]

// colors.pop(); //removed yellow from the last
// console.log(colors); //Output is: ["red", "orange"]

// console.log(colors.pop()); //Output is: yellow

// colors.unshift("infrared"); //added infrared to the front
// console.log(colors); //Output is: ["infrared", "red", "orange", "yellow"]

// console.log(colors.shift()); //
// console.log(colors); //Output is: ["orange", "yellow"]


// //indexOf() - used to find the index of an item in an array
// let tuitt = ["Charles", "Paul", "Sef", "Alex", "Paul"];

// // returns the first index at which a given element can be found
// console.log(tuitt.indexOf("Sef")); //Output is:  2

// // finds the first instance of Paul 1 not 4
// console.log(tuitt.indexOf("Paul")); //Output is: 1

// // returns -1 if the element is not present
// console.log(tuitt.indexOf("Hulk")); //Output is: -1

// Array Iterations
let colors = ['red', 'orange', 'yellow', 'green'];

// // for (let i = 0; i < colors.length; i++) {
// // 	console.log(colors[i]);
// // }

// .forEach(functionName(argumentName)){code} //built-in method for iterating over an array.
colors.forEach(function(color) {
	console.log(color);
});

