body = document.querySelector("body");

hed = document.querySelector("h2");
hed.append(" - Welcome to JavaScript DOM Manipulation");
h2 = document.createElement("h2");
h2.innerHTML = "<h2> This is an append Example </h2>";
// document.querySelector("body").append(h2);
body.prepend(h2);



btn = document.createElement("button");
btn.innerText = "Click Me";

btn.style.backgroundColor = "red";
btn.style.color = "white";

body.prepend(btn);


// use of classList to add multiple classes to an element

para = document.querySelector("p");

para.classList.add("classTwo");