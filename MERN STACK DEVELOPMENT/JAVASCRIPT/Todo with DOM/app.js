let input = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");

btn.addEventListener("click", function () {
  let newli = document.createElement("li");
  newli.innerText = input.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.classList.add("delete");
  
  newli.append(deleteBtn);
  ol.append(newli);
  newli.style.color = getRandomColor();
  
  input.value = "";
});

ol.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    };
});


function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}