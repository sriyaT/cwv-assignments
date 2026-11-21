console.log("1 - Sync");

setTimeout(() => {
  console.log("2 - Macrotask");
}, 0);

async function asyncFn() {
  console.log("3 - Inside Async");
  await Promise.resolve();
  console.log("4 - After Await");
}

asyncFn();

Promise.resolve().then(() => {
  console.log("5 - Microtask");
});

console.log("6 - Sync End");

//1 - Sync
//3 - Inside Async
//6 - Sync End
//4 - After Await
//5 - Microtask
//2 - Macrotask

/* 
JavaScript first executes all synchronous code on the call stack (1 - Sync, 3 - Inside Async, 6 - Sync End); 
setTimeout schedules a macrotask, 
await suspends the async function and schedules its continuation as a microtask, 
and Promise.resolve().then() also schedules a microtask; 
once synchronous execution finishes, 
microtasks execute in FIFO order (4 - After Await, 5 - Microtask), 
followed by the macrotask (2 - Macrotask).
*/
