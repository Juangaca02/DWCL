let body = document.getElementById('body');
let random = Math.floor(Math.random() * 256);
let random2 = Math.floor(Math.random() * 256);
let random3 = Math.floor(Math.random() * 256);

body.style.backgroundColor = `rgb(${random}, ${random2}, ${random3})`;

if (!isNaN(prompt())) {
  alert('número');
} else {
  alert('no número');
}
