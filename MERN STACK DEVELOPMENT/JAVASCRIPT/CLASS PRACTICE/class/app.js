let btns = document.querySelectorAll("button");

for (btn of btns) {
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", name);
    btn.addEventListener("dblclick", function() {
        console.log("You double clicked me....")
    } )
   
}

function sayHello() {
    console.log("Hello!");
}

function name(){
    console.log("Junaid")
}