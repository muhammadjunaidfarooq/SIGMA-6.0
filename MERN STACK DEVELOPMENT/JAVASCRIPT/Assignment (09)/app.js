let box = document.querySelector("#box");
box.addEventListener("mouseout", function(){
    console.log("The cursor is out of the BOX...")
});

let keyBord = document.querySelector("#key");
keyBord.addEventListener("keypress", function(event) {
    console.log(`${event.key} is pressed.`)
});

let scroll = document.querySelector("#box2");
scroll.addEventListener("scroll", function() {
    console.log("You are scrolling the page...")
})

// let load = document.querySelector("#load");
// load.addEventListener("click", function () {
//     console.log("Loading....")
//     if (document.readyState == "complete") {
//         alert("Page is fully loaded.")
//     } else {
//         console.log("Page is still loading.")
//     }
// })

// ----------------------------------------------------------------------------

let box3 = document.querySelector("#box3");

let bttn = document.createElement("button");
box3.append(bttn);
let btn = document.querySelector("button");
btn.innerText = "Button";
btn.addEventListener("click", function () {
    btn.style.backgroundColor = "green";
    console.log("Color of button is now Green...")
})

// ------------------------------------------------------------------------------

let heading = document.querySelector("h1");
let input = document.querySelector("#input");
input.addEventListener("input", function (){
    let userName = input.value;
    heading.innerText = userName.replace(/[^a-zA-Z\s]/g, '');
})

