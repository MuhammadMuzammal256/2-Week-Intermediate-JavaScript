let perosn =  {
    firstName : "Muhammad",
    lastName : "Muzammal",
}

let show = function (con , con1,con2) {
    console.log("\n")
   console.log(this.firstName);
   console.log(this.lastName);
   console.log(con);
   console.log(con1);
   console.log(con2);
}

let arrayCon = ["Pak","India","Uk"] 

show.apply(perosn,arrayCon);

