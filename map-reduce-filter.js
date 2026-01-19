let arr = [1,2,3,4];
let newArr = arr.map(function(x){
    return x * 4;

});  console.log(newArr);


let redArr = arr.reduce(function(a,b){

return a + b;

})
console.log(redArr);


let mergeArr = arr.concat(newArr);

console.log("------merge-----");
console.log(arr);
console.log(newArr);
console.log("------merge-----");

console.log(mergeArr);
console.log("------merge sum-----");
let mergeSum = mergeArr.reduce(function(k,l){
    return k+l;
});

console.log(mergeSum);
