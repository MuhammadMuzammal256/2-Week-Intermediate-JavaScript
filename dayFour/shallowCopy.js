
let user = {
  name: "Ali",

  address: {
    city: "Lahore",
    country: "Pakistan",
    location: {
      lat: 31.5204,
      lng: 74.3587
    }
  }
};

let copyUser = { ...user };
copyUser.name = "hello"

copyUser.address.location.lat="12357876"

console.log(copyUser);
console.log("im shallow copy")
user
console.log(user);