

function createCounter() {
    let count = 0; 
    return function() {
        count++;
     return count;
    
        
    }
}



const counter =  createCounter();

console.log(counter());
console.log(`hrllpo conn ${counter()}`);
console.log(counter());console.log(counter());console.log(counter());


counter();
counter();
counter();
