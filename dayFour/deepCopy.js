
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


let deepuser = JSON.parse(JSON.stringify(user));

deepuser.name = "Muzammal";
deepuser.address.location.lat = "12357876";
deepuser.name = color = "red"; 

console.log(deepuser);
console.log("im Deep copy");
