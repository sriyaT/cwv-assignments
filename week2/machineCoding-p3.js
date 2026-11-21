const profile = {
  userName: "Vasanth",
  greet: () => {
    console.log(`Hi, I'm ${this.userName}`);
  },
  welcome: function () {
    console.log(`Welcome, ${this.userName}`);
  },
};

const friend = { userName: "Candidate" };

profile.greet.call(friend);
profile.welcome.call(friend);
//Hi, I'm undefined
//Welcome, Candidate
/*
Arrow function: Arrow functions don't have their own this; they inherit it from the surrounding lexical scope.
Regular function:A regular function does not always bind this to the object. It depends on how the function is invoked.
*/
