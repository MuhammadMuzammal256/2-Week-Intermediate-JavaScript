let user1 = {

    name : "Ali",
    age : 23,
        disply : function(){
        console.log(  `my name is "${this.name}" and my age is ${this.age} `)
        }
}


setTimeout(function() {
    user1.disply();
}, 1000);


