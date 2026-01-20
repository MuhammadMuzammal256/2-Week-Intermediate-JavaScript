function one(name , age){
this.name = name;
this.age = age;

}
function two(fatherName , group){
    one.call(this,"Muzz",13);
    this.fatherName = fatherName;
    this.group = group;
}
function three(broName , srNo){
        two.call(this,"asss",53);
        this.broName = broName;
    this.srNo = srNo;

}
let jeoFaizMeryYaar = new three("faiz",9899);
console.log(jeoFaizMeryYaar);