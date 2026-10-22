//function as a declaration
function add(a, b) {
    return a + b;
}
const result1 = add(5, 3);
console.log(result1); // Output: 8



//function as an expression
const multiply = function(a, b) {
    return a * b;
};

const result2 = multiply(5, 3);
console.log(result2); // Output: 15


//arrow function
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8


//argument vs parameter
// Parameter is a variable that is defined in the function declaration and is used to receive values when the function is called.
function greet(name) { // 'name' is a parameter
    console.log(`Hello, ${name}!`);
}

// Argument is the actual value that is passed to the function when it is called.
greet("John"); // 'John' is an argument