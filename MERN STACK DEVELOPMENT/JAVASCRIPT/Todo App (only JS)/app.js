let todo = [];
let req = prompt("Please enter your request:");
while (true) {
    if (req == "quit") {
        console.log("quitting App");
        break;
    } if (req == "list") {
        console.log("-------------------");
        for (let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("-------------------");
    } else if (req == "add"){
        let task = prompt("Please enter the task you want to add:");
        todo.push(task);
        console.log("Task added");
    } else if (req == "delete") {
        let idx = prompt("Give me index of task.");
        todo.splice(idx,1);
        console.log("Task deleted");
    } else {
        console.log("Wrong Request.")
    }

    req = prompt("Please enter your request:");
}


