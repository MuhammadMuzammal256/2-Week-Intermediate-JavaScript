console.log('\n-------Map Funcation-------\n');

//current elemetn , inndex off array , 3rd array

let nameArray = ['Ali','Ahmed','Hassan','Hamza','Bilal','Usman','Zain','Fahad','Adeel','Salman'];
let numberArray1 = [1, 2, 3, 4, 5];
let numberArray2 = [6, 7, 8, 9, 10];


function printName() {
  let newNameArray = nameArray.map(function(x) {
    return x;
  
  });
      console.log(newNameArray);
}

function sumArrayPrint(m){
let sumArray = numberArray1.map(function(a,i){
return a+numberArray2[i];
})
console.log(m)
 console.log(sumArray);

}

function doubleArray (){
    /// method 1
    // let newArray = numberArray1.map(function(d){
    //     console.log(d * 2);
    // })

    //method 2

let newArray = numberArray1.map(function(d){
        return d * 2
    })

console.log(newArray);
 
}

function uppercaseEg (u){
    let newNameArray = nameArray.map(function(up){
        return up.toLocaleUpperCase();
    })
        console.log(u);
    console.log(newNameArray)
 

}

function printIndex() {
    // Use regular function inside map
    let nameArrayList = nameArray.map(function(value, ind) {
        return `Index: ${ind}, Value: ${value}`;
    });

  
    console.log(nameArrayList.join("\n"));
}

function addObj(){
    let students = [
  {name: "Ali", marks: 40},
  {name: "Sara", marks: 50}
];
     let newStudet = students.map(function(stu){
        let nnewStudet= stu.marks >= 50 ? true : false;
       return nnewStudet;
     })
console.log(newStudet);
}
function printTwoArray(){
    let printArrays = numberArray1.map(function(a, i){
        return [a, numberArray2[i]];
    });
    console.log(printArrays.join('\n'));
}

function sumArrayElement(){
    let arrSum = numberArray1.map(function(a,b){
        return  a + numberArray2[b];
    })
    console.log(arrSum);
}

// sumArrayElement();
// printTwoArray();
// printName()
// sumArrayPrint('Print :');
// doubleArray ();
// uppercaseEg ('Upper Case :')
// printIndex();
// addObj();



function resultAdd (){
function add(a,b){
return { a: a, b: b };
}
console.log(add(45,5));

function newAdd(a,b){
return [a,b];
}
console.log(newAdd(45,5));
}


