let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function () {
  console.log("Div is clicked..");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation();
  console.log("Ul is clicked...");
});

for (li of lis) {
  li.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Li is clicked....");
  });
}
