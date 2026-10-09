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

document.querySelector("#owl").onclick = () => alert("owl clicked");

// attachEvent() JavaScript ka purana event-handling method hai. Iska kaam kisi HTML element ke saath event attach karna tha, jaise click.

// jQuery - on

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
    event.stopPropagation(); // Ye event ko parent elements tak propagate hone se rokta hai.

    event.stopImmediatePropagation(); // 1. Event ko parent tak jaane se rokta hai
    // 2. Same element par attached doosre event listeners ko bhi rok deta hai
  },
  false,
);

// stopPropagation()
//        ↓
// Parent/ancestor ko event milne se rokta hai
//        ↓
// Same element ke baaki listeners chal sakte hain

// stopImmediatePropagation()
//        ↓
// Parent/ancestor ko event milne se rokta hai
//        +
// Same element ke baaki listeners bhi rokta hai

// Propagation = parent ko rokna

// Immediate propagation = parent + same element ke remaining listeners ko rokna.

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

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// 1. (type) Batata hai kaunsa event hua.

document.body.addEventListener("click", (event) => console.log(event.type)); // mouse click

document.body.addEventListener("keydown", (event) => console.log(event.type)); // keyboard click

// click
// keydown
// keyup
// submit
// input
// mouseover

// 2. (timestamp) Batata hai event kab hua, usually event ke start se elapsed time ke form mein.

document.body.addEventListener("click", (event) =>
  console.log(event.timeStamp),
);

// 3. (defaultPrevented) Ye batata hai ke event ka default browser behavior prevent hua hai ya nahi.

document.querySelector("#btn").addEventListener("click", (e) => {
  e.preventDefault();

  console.log(e.defaultPrevented);
});

// false → default behavior abhi prevent nahi hua
// true  → preventDefault() ho chuka hai

// 4. (target) Ye actual element batata hai jis par event hua.

document.querySelector("#images").addEventListener("click", (e) => {
  console.log(e.target);
});

// Shortcut: target = actually kis element par event hua?

// 5. (currentTarget) Ye batata hai: Listener kis element par laga hua hai?

document.querySelector("#images").addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
});

// target        = jahan click hua
// currentTarget = jahan listener laga hai

// 6. (toElement) Ye old / non-standard property hai, mainly old Internet Explorer events mein use hoti thi.
// Modern JavaScript mein isko normally use nahi karna.
// Mouse events mein modern alternatives situation ke hisaab se target, relatedTarget, etc. hain.

// 7. (srcElement) Ye bhi old Internet Explorer property thi.
// Modern browsers mein target use karo:

// 8. (clientX) Mouse cursor ki X position viewport/browser window ke according.

document.addEventListener("click", (e) => {
  console.log(e.clientX);
});

// 9. (clientY) Mouse cursor ki Y position viewport ke according.

document.addEventListener("click", (e) => {
  console.log(e.clientY);
});

// Visual:

//         viewport
//    0 ───────────────→ X
//    |
//    |
//    |       🖱️
//    |       (500,300)
//    |
//    ↓
//    Y

// So:

// clientX → left/right position
// clientY → up/down position

// 10. (screenX) Mouse ki X position poori physical screen ke according.

document.addEventListener("click", (e) => {
  console.log(e.screenX);
});

// 11. (screenY) Mouse ki Y position poori screen ke according.

document.addEventListener("click", (e) => {
  console.log(e.screenY);
});

// client vs screen
// clientX/Y → browser viewport ke coordinates
// screenX/Y → poori screen ke coordinates

// 12. (altKey) Check karta hai ke event ke waqt Alt key pressed thi ya nahi.

document.addEventListener("click", (e) => {
  if (e.altKey) {
    console.log("Alt Key was pressed");
  } else {
    console.log("Alt Key was not pressed");
  }
});

// 13. (ctrlKey) Check karta hai ke Ctrl key pressed thi ya nahi.

document.addEventListener("click", (e) => {
  if (e.ctrlKey) {
    console.log("Ctrl Key was pressed");
  } else {
    console.log("Ctrl Key was not pressed");
  }
});

// 14. (shiftKey) Check karta hai ke Shift key pressed thi ya nahi.

document.addEventListener("click", (e) => {
  if (e.shiftKey) {
    console.log("Shift Key was pressed");
  } else {
    console.log("Shift Key was not pressed");
  }
});

// 15. (keyCode) Ye keyboard events mein key ka numeric code batane ke liye historically use hota tha.

document.addEventListener("keydown", (e) => {
  console.log(e.keyCode); // (ye key code deta hai) Lekin important: keyCode deprecated/legacy hai.
  console.log(e.key); // (ye direct key btata hai) Modern JavaScript
});
