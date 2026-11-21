// **
//  * @param {Array<() => Promise<any>>} tasks - Array of functions returning promises
//  * @param {number} limit - Maximum concurrent executions
//  */
async function promiseAllWithConcurrencyLimit(tasks, limit) {
  // TODO: Your implementation
  if (!Number(limit) && limit <= 0) {
    return Promise.reject(new Error("Limit must be a positive integer."));
  }

  let results = new Array(tasks.length);
  let index = 0;
  let running = 0;
  let hasError = false;

  return new Promise((resolve, reject) => {
    if (tasks.length === 0) {
      resolve([]);
      return;
    }

    function runTask() {
      if (hasError) return;

      while (running < limit && index < tasks.length) {
        let currentIndex = index++;
        running++;

        Promise.resolve()
          .then(() => tasks[currentIndex]())
          .then((data) => {
            results[currentIndex] = data;
          })
          .catch((error) => {
            if (!hasError) {
              hasError = true;
              reject(error);
            }
          })
          .finally(() => {
            running--;
            if (!hasError) {
              runTask();
            }
          });
      }

      if (index === tasks.length && running === 0 && !hasError) {
        resolve(results);
      }
    }
    runTask();
  });
}

// --- Input Data for Testing ---
const createDriverTask = (id, delay) => () =>
  new Promise((resolve) => {
    console.log(` Fetching Driver ${id}...`);
    setTimeout(() => {
      console.log(` Driver ${id} loaded`);
      resolve(`Data for Driver ${id}`);
    }, delay);
  });

const tasks = [
  () => new Promise((resolve) => setTimeout(() => resolve("Task 1"), 3000)),
  () => new Promise((resolve) => setTimeout(() => resolve("Task 2"), 1000)),
  () => new Promise((resolve) => setTimeout(() => resolve("Task 3"), 2000)),
  () => Promise.resolve("Task 4"),
];

// If limit is 2, Task 1 and 2 start.
// When Task 2 finishes at 0.5s, Task 3 starts immediately.
promiseAllWithConcurrencyLimit(tasks, 2)
  .then((results) => {
    console.log("All tasks completed:", results);
  })
  .catch((error) => console.error(error));
