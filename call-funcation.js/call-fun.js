function setName(name, group){
    this.name = name;
    this.group = group;
}





function display (id,age,){
     setName.call(this, 'ali', 'O+');
    
    this.id = id;
    this.age = age;
}




let dis = new display(23,3);
console.log(dis)
