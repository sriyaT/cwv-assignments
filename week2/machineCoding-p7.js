const state = {
  user: { id: 101, details: { city: "Bangalore" } },
  theme: "dark",
};

// const newState = { ...state };
// newState.user.details.city = "Chennai";

// console.log(state.user.details.city);
// Expected output? Why did it change?
//output : 'Chennai'

const newState = {
  ...state,
  user: {
    ...state.user,
    details: {
      ...state.user.details,
      city: "Chennai",
    },
  },
};

console.log(state.user.details.city); // Bangalore
console.log(newState.user.details.city); // Chennai
