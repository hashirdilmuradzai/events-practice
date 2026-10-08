// SMIT

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

// Code With Chaie

// document.querySelector("#owl").onclick = () => alert("owl clicked");

// attachEvent() JavaScript ka purana event-handling method hai. Iska kaam kisi HTML element ke saath event attach karna tha, jaise click.

// jQuery - on

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

document.querySelector("#images").addEventListener(
  "click",
  (event) => {
    console.log("clicked inside the ul");
  },
  false,
);

// true  → Capturing  → parent → child
// false → Bubbling   → child → parent

document.querySelector("#owl").addEventListener(
  "click",
  (event) => {
    console.log("owl clicked");
    event.stopPropagation(); // agr parent me koe event lga hoga usko bnd krdega
  },
  false,
);

document.querySelector("#google").addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("google clicked");
  },
  false,
);

document.querySelector("#images").addEventListener(
  "click",
  (event) => {
    console.log(event.target.tagName);
    console.log(event.target.id);
    if (event.target.tagName === "IMG") {
      const removeIt = event.target.parentNode;
      removeIt.remove();
      // removeIt.parentNode.removeChild(removeIt);
    }
  },
  false,
);
