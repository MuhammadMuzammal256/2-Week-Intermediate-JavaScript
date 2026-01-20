let user1 = {
    id: 1,
    name: "Ali Khan",
    age: 25,
    email: "ali.khan@example.com",
};

let user2 = {
    id: 2,
    name: "Sara Ahmed",
    age: 23,
    email: "sara.ahmed@example.com",

};

let display = function (state,country) {
    console.log(this.id);
    console.log(this.name);
    console.log(this.age);
    console.log(this.email);
    console.log(state);
    console.log(country);
};

display.call(user1, "Pakistan","asdfasd");
display.call(user2, "India","muuuuuu");
