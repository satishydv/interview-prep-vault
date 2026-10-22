//higher order function is a function that takes another function as an argument or returns a function as a result.

function Calculate(num1, num2, operation) {
    return operation(num1, num2);
}

const add = (a, b) => a + b;
console.log(Calculate(5, 3, add)); // Output: 8


// Callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.

function processUser (name, callback) {
    console.log(`Processing user: ${name}`);
    callback();
}

function completed() {
    console.log("User processing completed.");
}

processUser("John Doe", completed);


// Closure is a function that has access to its own scope, the outer function's scope, and the global scope.

function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(`Count: ${count}`);
    }
}



//async function is a function that can perform task without blocking the rest of the task while waiting for a result. It allows for non-blocking code execution, making it easier to work with asynchronous operations.
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

//callback hell happens when multiple asynchronous operations are nested within each other, making the code difficult to read and maintain.

getUser((user) => {
    getOrders(user, (orders) => {
        getPayment(orders, (payment) => {
            getDetails(payment, (details) => {
                console.log(details);
            });
        });
    });
});