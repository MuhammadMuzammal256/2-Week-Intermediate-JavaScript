const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tasks = [];

function TaskManager() {
    console.log("\n--- Welcome To Task Manager ---\n");
    showMenu();
}
function showMenu(){
     console.log("1. Add Task");
    console.log("2. View All Tasks");
    console.log("3. Delete Task");
     console.log("4. completed and pending Task");
  

rl.question("----Select Menu (1-7)----: ",function(op){
      let opation = parseInt(op)
      if(opation == 1){
        add();

      }
       if(opation == 2){
        viewTask();
showMenu();
      }

        if(opation == 3){
        deleteTask();
            showMenu();
      }
            if(opation == 4){
        completeTask();
            showMenu();
      }
      
})
function add(){
                rl.question("Enter Task Name :\n",function(taskName){
                        let taskObj =  {
                              id: Date.now(),
                              name : taskName,
                                     completed: false
                        }
                        tasks.push(taskObj);
                        showMenu();
                       
                })
                
}

function viewTask(){
    if(tasks.length == 0){
        console.log('No Task')
    }else{
    console.log("--- All Tasks ---");
    for(let i = 0 ; i<tasks.length;i++){
        console.log(tasks[i].id , tasks[i].name);
    }
    }


}
  function deleteTask() {
    if(tasks.length === 0){
        console.log("No tasks to delete 😢");
        showMenu();
        
    }else{
        rl.question("Enter index number to delete: ", function(ind){
            let delIndex = parseInt(ind) - 1;
            let remove = tasks.splice(delIndex,1);
            showMenu();   
        })
    }
}

function completeTask(){
       for(var i = 0; i < tasks.length; i++){
        var status = tasks[i].completed ? "[Completed]" : "[Pending]";
        console.log(`this is complete pending list ${tasks[i].name}`);
    }

    rl.question("\nEnter task number to mark as completed: ", function(ind){
        var i = parseInt(ind) - 1;
        if(tasks[i]){
            tasks[i].completed = true;
            console.log("\n✅ Completed: " + tasks[i].name);
        } 
        showMenu();
    



});



}
}


TaskManager();
