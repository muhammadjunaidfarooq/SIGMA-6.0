let body = document.querySelector("body");

let text = document.createElement("input");

body.prepend(text);

let btn = document.createElement("button");
btn.innerText = "Click me";

body.append(btn);

// ----------------------------------------------------------

text.setAttribute("placeholder", "Username");
btn.setAttribute("id", "btn")

// ---------------------------------------------------------

let accessBtn = document.querySelector("#btn");
accessBtn.style.backgroundColor = "blue";
accessBtn.style.color = "white";

// ----------------------------------------------------------

let heading = document.createElement("h1");
heading.innerText = "DOM Practice";
heading.classList.add("purple");
heading.classList.add("underline");

body.prepend(heading);

// ----------------------------------------------------------

let paragraph = document.createElement("p");
paragraph.innerHTML = "Apna College <b>Sigma</b> Practice.";

body.append(paragraph)