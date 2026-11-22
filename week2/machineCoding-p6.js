function deepClone(value, map = new WeakMap()) {
  // 1. Base case: handle primitives
  // 2. Handle circular references using map
  // 3. Recursive cloning for Arrays and Objects

  if (value === null || typeof value !== "object") {
    return value;
  }

  if (map.has(value)) {
    return map.get(value);
  }

  let cloned = Array.isArray(value) ? [] : {};

  map.set(value, cloned);

  for (const key of Object.keys(value)) {
    cloned[key] = deepClone(value[key], map);
  }

  return cloned;
}

const original = {
  a: 1,
  b: { c: 2 },
  d: [11, 7],
};
original.self = original; // Circular reference!

const copy = deepClone(original);
console.log(copy !== original); // true
console.log(copy.b !== original.b); // true
console.log(copy.self === copy); // true (circularity preserved)
