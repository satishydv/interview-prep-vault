// a promise is an object that represents future result of asynchronous operation
// it can be in one of three states: pending, fulfilled, or rejected



// creating a new promise

const myPromise = new Promise((resolve, reject) => {
    // simulate an asynchronous operation
    setTimeout(() => {
        const success = true; // Simulate a successful operation
        if (success) {
            resolve("Operation completed successfully");
        } else {
            reject("Operation failed");
        }
    }, 1000);
});


// consuming the promise using then and catch methods

myPromise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });


 //promise.all() method is used to wait for multiple promises to resolve or reject

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 resolved"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 3 resolved"), 3000);
});

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.error(error);
    });