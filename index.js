let element = document.createElement("div");

//to set properties
element.innerHTML = "Hello, DOM!";
element.style.backgroundColor = "#f9f9f9";

//to get an element to appear in the DOM
document.body.appendChild(element);
element.style.textAlign = "center";

//append elements to that element
var ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  let li = document.createElement("li");
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);
ul.style.textAlign = "left";

//remove one of those lis.
ul.removeChild(ul.querySelector("li:nth-child(2)"));

//to remove the whole unordered list (ul)
ul.remove();
