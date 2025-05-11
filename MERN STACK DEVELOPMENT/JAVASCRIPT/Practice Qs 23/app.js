let body = document.querySelector("body");

let container = document.createElement("div");
container.classList.add("container");

body.append(container);

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
para1.classList.add("red");

container.append(para1);

let heading1 = document.createElement("h3");
heading1.innerText = "I'm a blue h3!";
heading1.classList.add("blue");

container.append(heading1);

let section = document.createElement("div");
section.classList.add("innerDiv");

container.append(section);

let innerHeading = document.createElement("h1");
innerHeading.innerText = "I'm in a div";

section.append(innerHeading);

let innerPara = document.createElement("p");
innerPara.innerText = "ME TOO!";

section.append(innerPara);
