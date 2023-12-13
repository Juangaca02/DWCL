const textEl = document.getElementById('text');
let speedEl = 0;
const text = 'Velocidad';
let idx = 1;
let speed = 180;
function writeText() {
  console.log(speedEl);
  textEl.innerHTML = text.slice(0, idx) + speedEl;

  idx++;

  if (idx > text.length) {
    idx = 1;
  }
}

document.addEventListener('keydown', e => {
  if (e.keyCode == 38) {
    speedEl++;
    speedEl > 100 ? (speedEl = 100) : speedEl;
    writeText();
  }
  if (e.keyCode == 40) {
    speedEl--;
    speedEl < 1 ? (speedEl = 1) : speedEl;
    writeText();
  }
});
