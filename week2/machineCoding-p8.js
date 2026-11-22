Function.prototype.myCall = function (context, ...args) {
  context = context ?? globalThis;

  context.tempFunction = this;
  let result = context.tempFunction(...args);

  delete context.tempFunction;

  return result;
};
const person = {
  name: "Sriya",
};

function greet(city, country) {
  return `Hello ${this.name} from ${city}, ${country}`;
}

// TEST 1: myCall()
const callResult = greet.myCall(person, "Bangalore", "India");

console.log("CALL:", callResult);

Function.prototype.myApply = function (context, args) {
  context = context ?? globalThis;
  // Step 2: Attach current function using Symbol
  const fnKey = Symbol();
  context[fnKey] = this;

  // Step 3: Execute function with arguments
  let result = context[fnKey](...(args ?? []));
  // Step 4: Delete temporary property
  delete context[fnKey];
  // Step 5: Return result
  return result;
};

// TEST 2: myApply()
const applyResult = greet.myApply(person, ["Bangalore", "India"]);

console.log("APPLY:", applyResult);

Function.prototype.myBind = function (context, ...args) {
  let temp = this;
  // Step 1: Save the original function

  // Step 2: Return a new function
  // Step 3: Combine previously supplied and newly supplied arguments
  // Step 4: Execute the original function with the correct context

  return function (...newArgs) {
    const combinedArgs = [...args, ...newArgs];
    return temp.apply(context, combinedArgs);
  };
};
// TEST 3: myBind()
const person1 = { name: "Sriya" };

function greet(city, country) {
  return `Hello ${this.name} from ${city}, ${country}`;
}

const newGreet = greet.myBind(person1, "Bangalore");

console.log(newGreet("India"));
