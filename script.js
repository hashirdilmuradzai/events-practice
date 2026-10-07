const heading = document.querySelector("h1");
const btn = document.querySelector("#btn");
const para = document.querySelector("p");

btn.addEventListener("mousedown", () => {
  console.log("click horaha hai");

  heading.innerHTML = "click horaha hai";

  btn.style.color = "red";

  btn.style.backgroundColor = "blue";

  btn.textContent = "Hogya click";
});

document.body.addEventListener("mousemove", (event) => {
  console.log(`x: ${event.x} y: ${event.y}`);

  para.innerHTML = `x: ${event.x} y: ${event.y}`;
});
