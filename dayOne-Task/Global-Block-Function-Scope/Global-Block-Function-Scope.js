console.log("----global------")


let name = "Muzammal";
function display(){
    console.log(name)
}

display();
   console.log(name);




   console.log("-----block-----")
var x = 10 ;
var x = 11;
var x = 13;
console.log(x);

let a = 10;
 a = 11;
console.log(a);

function hello(abc = "yaar"){
      var x = 3434
    console.log(abc)
    console.log(x)
}

hello("dafsdffsdfs");    
   console.log("-----now-----")
{var z = 30;
  

}

console.log(z); // ✅ 30
 console.log("-----Hoisting-----") 

//  console.log(a); // error
// var a = 5;

// console.log(b); // Error
// let b = 10;


myNew();

function myNew(){
    console.log("hello to the future")
}


console.log("-----Closures and practical usage-----") 
function add() {
    let count = 0;
    return function() {
        count++;            
        console.log(count);  
    }
}

const counter = add();

counter(); // 1
counter(); // 2
counter(); // 3

hello();