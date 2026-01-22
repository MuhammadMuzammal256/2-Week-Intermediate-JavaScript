
let Person = {
    fName : "Muzammal",
    lName : "No Name"
}


function naming(city){
    console.log(`you "${this.fName}" and your "${this.lName}"`);
    console.log(city);

}

const newFile = naming.bind(Person);
newFile("oasdaffsd");

// Function.prototype.myBind = function(context , ...args1){
//     const self = this;
//     return function(...args2){
//             self.call(context, ...args1, ...args2);
//     }
// }
// const newMyFile = naming.myBind(Person);
// newMyFile('mmmmmm');

console.log(a)

var a = 10