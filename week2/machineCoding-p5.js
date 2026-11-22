function debounce(func, wait, immediate = false) {
  let timeout;
  // TODO: Logic to clear timeout and handle 'this' context
  return function (...args) {
    const context = this;
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

// Usage in UI:
const onSearch = debounce(
  (e) => console.log("Searching for:", e.target.value),
  300
);
// document.getElementById("search").addEventListener("input", onSearch);
