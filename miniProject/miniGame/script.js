let box = document.getElementById("box");
let x = 0;
let y = 0;
let movement = 5;

document.addEventListener("keydown", function () {
  box.textContent = "😨";
  box.style.background = "tomato";
});

document.addEventListener("keyup", function () {
  box.textContent = "😊";
  box.style.background = "lightblue";
});

window.addEventListener("keydown", (e) => {
  if (e.key.startsWith("Arrow")) {
    switch (e.key) {
      case "ArrowUp":
        y -= movement;
        break;
      case "ArrowDown":
        y += movement;
        break;
      case "ArrowLeft":
        x -= movement;
        break;
      case "ArrowRight":
        x += movement;
        break;
    }
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
  }
});


/*
krish
    CPP SQL
    
C 
    Mahit - weekend
    vatsal - Weekdays
    hetax - weekdays

*/