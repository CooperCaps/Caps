var r = document.querySelector(":root");
var colors = document.getElementsByName("colors");
function getColor() {
  for (i = 0; i < colors.length; i++) {
    if (colors[i].checked) r.className = colors[i].value;
  } 
}

let dots = [],
  mouse = {
    x: 0,
    y: 0
  };

let Dot = function () {
  this.x = 0;
  this.y = 0;
  this.node = (function () {
    let n = document.createElement("div");
    n.className = "cursor";
    document.body.appendChild(n);
    return n;
  })();
};
Dot.prototype.draw = function () {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

for (let i = 0; i < 1; i++) {
  let d = new Dot();
  dots.push(d);
}

function draw() {
  let x = mouse.x,
    y = mouse.y;

  dots.forEach(function (dot, index, dots) {
    let nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * 0.4;
    y += (nextDot.y - dot.y) * 0.4;
  });
}

addEventListener("mousemove", function (event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();

document.addEventListener("DOMContentLoaded", function () {
  var cursor = document.querySelector(".cursor");
  var links = document.querySelectorAll(
    'a, button, label, input[type="button"], input[type="submit"]'
  );
  var inputs = document.querySelectorAll("input, textarea");
  var showcur = document.querySelectorAll(".frame");

  var i = links.length;
  for (i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", addCursor);
    links[i].addEventListener("mouseleave", removeCursor);
  }

  var i = inputs.length;
  for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("mouseenter", addInput);
    inputs[i].addEventListener("mouseleave", removeInput);
  }

  var i = showcur.length;
  for (i = 0; i < showcur.length; i++) {
    showcur[i].addEventListener("mouseenter", addShow);
    showcur[i].addEventListener("mouseleave", removeShow);
  }

  function addInput() {
    cursor.classList.add("cursor-input");
  }

  function removeInput() {
    cursor.classList.remove("cursor-input");
  }

  function addCursor() {
    cursor.classList.remove("cursor-default");
    cursor.classList.add("cursor-active");
  }

  function removeCursor() {
    cursor.classList.remove("cursor-active");
    cursor.classList.add("cursor-default");
  }

  function addShow() {
    cursor.classList.add("cursor-default");
  }

  function removeShow() {
    cursor.classList.remove("cursor-default");
  }
  
});
